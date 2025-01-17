import { v2 as cloudinary } from 'cloudinary'
import productModel from '../models/productModel.js'
import userModel from '../models/userModel.js'
import orderModel from '../models/orderModel.js'

// api login 
const login = async (req, res) => {
    try {
        const { email, password } = req.body

        if (email === process.env.ADMIN_EMAIL && password === process.env.ADMIN_PASSWORD) {
            return res.json({ success: true })
        }

        res.json({ success: false });
    }
    catch (error) {
        console.log(error)
        res.status(400).json({ success: false, message: error.message })
    }
}

// api delete user
const deleteUser = async (req, res) => {
    try {
        const { userId } = req.body

        await userModel.findByIdAndDelete(userId)
        res.json({ success: true, message: "Xóa người dùng thành công" })

    }
    catch (error) {
        console.log(error)
        res.status(400).json({ success: false, message: error.message })
    }
}

// api add product
const addProduct = async (req, res) => {
    try {
        const { name, des, brand, type, oldPrice, newPrice } = req.body
        const imageFile = req.file

        const imageUpload = await cloudinary.uploader.upload(imageFile.path, { resource_type: 'image' })
        const imageUrl = imageUpload.secure_url

        if (!name || !des || !brand || !type || !oldPrice || !newPrice || !imageFile) {
            return res.json({ success: false, message: 'Hãy Điền Đầy Đủ Thông Tin' })
        }

        const isName = await productModel.findOne({ name });
        if (isName) {
            return res.status(400).json({ success: false, message: 'Sản phẩm này đã tồn tại' });
        }

        const productData = {
            name,
            des,
            brand,
            type,
            oldPrice,
            newPrice,
            image: imageUrl
        }

        const newProduct = new productModel(productData)
        await newProduct.save()

        res.json({ success: true, newProduct })

    } catch (error) {
        console.log(error)
        res.status(400).json({ success: false, message: error.message })
    }
}

// api get all user
const getAllUser = async (req, res) => {
    try {
        const users = await userModel.find()

        res.json({ success: true, users })
    }
    catch (error) {
        console.log(error)
        res.status(400).json({ success: false, message: error.message })
    }
}

// api get all product
const getAllProduct = async (req, res) => {
    try {
        const products = await productModel.find()

        res.json({ success: true, products })
    }
    catch (error) {
        console.log(error)
        res.status(400).json({ success: false, message: error.message })
    }
}

// api get all order
const getAllOder = async (req, res) => {
    try {
        const orders = await orderModel.find()

        res.json({ success: true, orders })
    }
    catch (error) {
        console.log(error)
        res.status(400).json({ success: false, message: error.message })
    }
}

export {
    addProduct,
    getAllUser,
    getAllProduct,
    getAllOder,
    login,
    deleteUser
}