import validator from 'validator'
import bcrypt from 'bcrypt'
import jwt from 'jsonwebtoken'
import { v2 as cloudinary } from 'cloudinary'
import userModel from '../models/userModel.js'
import productModel from '../models/productModel.js'
import orderModel from '../models/orderModel.js'

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
            return res.status(400).json({ success: false, message: 'Tài khoản không tồn tại' })
        }

        const isMatch = await bcrypt.compare(password, user.password)

        if (isMatch) {
            const token = jwt.sign({ id: user._id }, process.env.JWT_SECERT)
            return res.json({ success: true, token });

        } else {
            res.json({ success: false, message: 'Mật khẩu không đúng' })
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

// api update password
const updatePassword = async (req, res) => {
    try {
        const { userId, newPassword1, newPassword2, oldPassword } = req.body

        if (!newPassword1 || !newPassword2 || !oldPassword) {
            return res.json({ success: false, message: "Missing required fields." })
        }

        const user = await userModel.findById(userId)

        if (!user) {
            return res.status(404).json({ success: false, message: "User not found." })
        }

        const isOldPasswordValid = await bcrypt.compare(oldPassword, user.password);
        if (!isOldPasswordValid) {
            return res.status(400).json({ success: false, message: "Incorrect old password." })
        }

        if (newPassword1 !== newPassword2) {
            return res.status(400).json({ success: false, message: "New passwords do not match." })
        }

        const hashedPassword = await bcrypt.hash(newPassword1, 10);

        await userModel.findByIdAndUpdate(userId, { password: hashedPassword })

        res.json({ success: true, message: "Password updated successfully." })
    } catch (error) {
        console.error(error)
        res.status(500).json({ success: false, message: "An error occurred. Please try again." })
    }
}
// api update phone number
const updatePhone = async (req, res) => {
    try {
        const { userId, phone } = req.body

        if (!phone) {
            return res.json({ success: false, message: "Hãy điền số điện thoại" })
        }

        if (phone.length !== 10) {
            return res.json({ success: false, message: 'Hãy Điền Số Điện Thoại Hợp Lệ ' })
        }

        const user = await userModel.findById(userId)

        if (phone === user.phone) {
            return res.json({ success: false, message: "Trùng với số cũ" })
        }

        await userModel.findByIdAndUpdate(userId, { phone: phone })
        res.status(200).json({ success: true })

    }
    catch (error) {
        console.error(error)
        res.status(500).json({ success: false, message: "An error occurred. Please try again." })
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
        const { userId, productInfor, subtotal, optionShip, optionPayment } = req.body

        const cart = []
        const productList = []

        for (const i of productInfor) {
            const product = await productModel.findById(i.productId)

            productList.push({
                productList: product,
                quantity: i.quantity,
            })
        }

        const orderData = {
            userId: userId,
            productList: productList,
            date: Date.now(),
            price: subtotal,
            optionShip: optionShip,
            optionPayment: optionPayment
        }

        const newOrder = new orderModel(orderData)
        await newOrder.save()

        await userModel.findByIdAndUpdate(userId, { cart: cart })

        res.status(200).json({ success: true })

    }
    catch (error) {
        console.log(error)
        res.status(400).json({ success: false, message: error.message })
    }
}

// api get order
const getOrder = async (req, res) => {
    try {
        const { userId } = req.body

        const orderData = await orderModel.find({ userId })

        res.json({ success: true, orderData })

    }
    catch (error) {
        console.log(error)
        res.status(400).json({ success: false, message: error.message })
    }
}

// api search
const search = async (req, res) => {
    try {
        const { query } = req.query

        if (!query || typeof query !== 'string') {
            return res.json({ success: false, message: 'Query parameter is required and must be a string' })
        }

        const searchCriteria = {
            $or: [
                { name: { $regex: query, $options: 'i' } },
                { brand: { $regex: query, $options: 'i' } }
            ]
        }

        const products = await productModel.find(searchCriteria)
        res.json({ success: true, products })

    } catch (error) {
        console.log(error)
        res.status(400).json({ success: false, message: error.message })
    }
}

// api comment 
const comment = async (req, res) => {
    try {
        const { userId, comment, productId } = req.body

        if (!comment) {
            return res.json({ success: false, message: 'Hãy cho chúng tôi biết cảm nhận của bạn' })
        }

        const userData = await userModel.findById(userId)

        const commentData = {
            userData: userData,
            comment: comment
        }

        const product = await productModel.findById(productId)

        const comments = product.comments

        comments.push(commentData)

        await productModel.findByIdAndUpdate(productId, { comments: comments })

        res.json({ success: true })
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
    order,
    getOrder,
    updatePassword,
    updatePhone,
    search,
    comment
}