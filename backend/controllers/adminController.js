import { v2 as cloudinary } from 'cloudinary'
import productModel from '../models/productModel.js'

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

export { addProduct }