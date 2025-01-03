import validator from 'validator'
import bcrypt from 'bcrypt'
import jwt from 'jsonwebtoken'
import { v2 as cloudinary } from 'cloudinary'
import userModel from '../models/userModel.js'
import productModel from '../models/productModel.js'

// api to register
const registerUser = async (req, res) => {
    try {
        const { firstName, lastName, email, phone, password_1, password_2, dob } = req.body

        if (!firstName || !lastName || !email || !phone || !password_1 || !password_2 || !dob) {
            return res.json({ success: false, message: 'Hãy Điền Đầy Đủ Thông Tin' })
        }

        if (!validator.isEmail(email)) {
            return res.status(400).json({ success: false, message: "Hãy Điền Email Hợp Lệ" })
        }

        const isUser = await userModel.findOne({ email })

        if (isUser) {
            return res.json({ success: false, message: 'Email này đã tồn tại' })
        }

        const isPhone = await userModel.findOne({ phone })
        if (isPhone) {
            return res.json({ success: false, message: 'Số điện thoại này đã tồn tại' })
        }

        if (phone.length !== 10) {
            return res.json({ success: false, message: 'Hãy Điền Số Điện Thoại Hợp Lệ ' })
        }

        if (password_1.length < 8) {
            return res.json({ success: false, message: 'Mật Khẩu Không Đủ Mạnh' })
        }

        if (password_1 !== password_2) {
            return res.json({ success: false, message: 'Mật Khẩu Không Giống Nhau' })
        }

        const salt = await bcrypt.genSalt(10)
        const hashedPassword = await bcrypt.hash(password_1, salt)

        const userData = {
            firstName,
            lastName,
            email,
            phone,
            password: hashedPassword,
            dob
        }

        const newUser = new userModel(userData)
        await newUser.save()

        const token = jwt.sign({ id: newUser._id }, process.env.JWT_SECERT)

        res.json({ success: true, token })

    } catch (error) {
        console.log(error)
        res.status(400).json({ success: false, message: error.message })
    }
}

// api for user login
const loginUser = async (req, res) => {
    try {
        const { email, password } = req.body
        const user = await userModel.findOne({ email })

        if (!user) {
            return res.status(400).json({ success: false, message: 'User does not exist' })
        }

        const isMatch = await bcrypt.compare(password, user.password)

        if (isMatch) {
            const token = jwt.sign({ id: user._id }, process.env.JWT_SECERT)
            return res.json({ success: true, token });

        } else {
            res.json({ success: true, message: 'invalid credentials' })
        }

    } catch (error) {
        console.log(error)
        res.status(400).json({ success: false, message: error.message })
    }
}

// api get profile
const profile = async (req, res) => {
    try {
        const { userId } = req.body
        const userData = await userModel.findById(userId).select('-password')

        res.json({ success: true, userData })

    } catch (error) {
        console.log(error)
        res.status(400).json({ success: false, message: error.message })
    }
}

// api update profile 
const updateProfile = async (req, res) => {
    try {
        const { userId, firstName, lastName, dob, gender, address } = req.body
        const imageFile = req.file

        if (!firstName || !lastName || !dob || !gender || !address) {
            return res.json({ success: false, message: "Thiếu thông tin" })
        }

        await userModel.findByIdAndUpdate(userId, { firstName, lastName, dob, gender, address })

        if (imageFile) {
            // upload image to cloudinary
            const imageUpload = await cloudinary.uploader.upload(imageFile.path, { resource_type: 'image' })
            const imageUrl = imageUpload.secure_url

            await userModel.findByIdAndUpdate(userId, { image: imageUrl })
        }

        res.json({ success: true, messgae: 'profile updated' })

    } catch (error) {
        console.log(error)
        res.status(400).json({ success: false, message: error.message })
    }
}

// api get product
const getProduct = async (req, res) => {
    try {
        const dataProduct = await productModel.find()

        res.json({ success: true, dataProduct })
    }
    catch (error) {
        console.log(error)
        res.status(400).json({ success: false, message: error.message })
    }
}

// api add to cart
const addToCart = async (req, res) => {
    try {
        const { userId, productId } = req.body

        const productData = await productModel.findById(productId)
        const user = await userModel.findById(userId)

        let isProduct = false
        let indexProduct = 0

        user.cart.forEach((i, index) => {
            if (i.product._id.toString() === productId) {
                isProduct = true
                indexProduct = index
            }
        })

        if (isProduct) {
            const cart = user.cart;

            cart[indexProduct].quantity += 1;

            await userModel.findByIdAndUpdate(userId, { cart });
            res.json({ success: true })
        } else {
            const addToCart = {
                product: productData,
                quantity: 1
            }

            const cartData = [...user.cart, addToCart]

            await userModel.findByIdAndUpdate(userId, { cart: cartData })
            res.json({ success: true })
        }
    }
    catch (error) {
        console.log(error)
        res.status(400).json({ success: false, message: error.message })
    }
}

// api remove from cart
const removeFromCart = async (req, res) => {
    try {
        const { userId, productId } = req.body

        const user = await userModel.findById(userId)

        let indexProduct = 0
        const cart = user.cart

        cart.forEach((i, index) => {
            if (i.product._id.toString() === productId) {
                indexProduct = index
            }
        })

        cart.splice(indexProduct, 1)
        await userModel.findByIdAndUpdate(userId, { cart })

        res.status(200).json({ success: true })
    }
    catch (error) {
        console.log(error)
        res.status(400).json({ success: false, message: error.message })
    }
}

// api increase quantity
const increaseQuantity = async (req, res) => {
    try {
        const { userId, productId } = req.body

        const user = await userModel.findById(userId)

        let indexProduct = 0
        const cart = user.cart

        cart.forEach((i, index) => {
            if (i.product._id.toString() === productId) {
                indexProduct = index
            }
        })

        cart[indexProduct].quantity += 1

        await userModel.findByIdAndUpdate(userId, { cart })
        res.status(200).json({ success: true })

    }
    catch (error) {
        console.log(error)
        res.status(400).json({ success: false, message: error.message })
    }
}

// api decrease quantity
const decreaseQuantity = async (req, res) => {
    try {
        const { userId, productId } = req.body

        const user = await userModel.findById(userId)

        let indexProduct = 0
        const cart = user.cart

        cart.forEach((i, index) => {
            if (i.product._id.toString() === productId) {
                indexProduct = index
            }
        })

        cart[indexProduct].quantity -= 1

        await userModel.findByIdAndUpdate(userId, { cart })
        res.status(200).json({ success: true })

    }
    catch (error) {
        console.log(error)
        res.status(400).json({ success: false, message: error.message })
    }
}

// api add to wishlist
const wishlist = async (req, res) => {
    try {
        const { userId, productId } = req.body

        const user = await userModel.findById(userId)
        const productData = await productModel.findById(productId)

        let isProduct = false
        let indexProduct = 0

        user.wishlist.forEach((i, index) => {
            if (i._id.toString() === productId) {
                isProduct = true
                indexProduct = index
            }
        })

        if (isProduct) {
            const wishlist = user.wishlist
            wishlist.splice(indexProduct, 1)
            await userModel.findByIdAndUpdate(userId, { wishlist })

            res.json({ success: true, message: 'Bỏ khỏi danh sách thành công' })
        } else {
            const wishlistData = [...user.wishlist, productData]
            await userModel.findByIdAndUpdate(userId, { wishlist: wishlistData })

            res.json({ success: true, message: 'Thêm vào danh sách thành công' })
        }

    }
    catch (error) {
        console.log(error)
        res.status(400).json({ success: false, message: error.message })
    }
}

// api order
const order = async (req, res) => {
    try {
        const { userId } = req.body

        const cart = []

        await userModel.findByIdAndUpdate(userId, { cart: cart })
        res.status(200).json({ success: true })

    }
    catch (error) {
        console.log(error)
        res.status(400).json({ success: false, message: error.message })
    }
}

export {
    registerUser,
    loginUser,
    profile,
    updateProfile,
    getProduct,
    addToCart,
    removeFromCart,
    increaseQuantity,
    decreaseQuantity,
    wishlist,
    order
}