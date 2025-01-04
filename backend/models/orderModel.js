import mongoose from "mongoose";

const orderSchema = new mongoose.Schema({
    userId: { type: String, required: true },
    status: { type: String, default: 'Đang xử lý' },
    productList: { type: Array, default: [] }
}, { minimize: false })

const orderModel = mongoose.model('order', orderSchema)

export default orderModel