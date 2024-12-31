import { v2 as cloudinary } from 'cloudinary'
import productModel from '../models/productModel'

// api add product
const addProduct = (req, res) => {
    try {
        const { name, brand, type, oldPrice, newPrice, image } = req.body

        if (!name || !brand || !type || !oldPrice || !newPrice || !image) {
            return res.json({ success: false, message: 'Hãy Điền Đầy Đủ Thông Tin' })
        }

    } catch (error) {
        console.log(error)
        res.status(400).json({ success: false, message: error.message })
    }
}

export { addProduct }