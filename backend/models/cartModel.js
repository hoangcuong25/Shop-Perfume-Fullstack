import mongoose from "mongoose";

const cartSchema = new mongoose.Schema({
    userId: { type: String, required: true },
    cart : { type: Object, required: true },
})

const cartModel = mongoose.model('cart', cartSchema)

export default cartModel