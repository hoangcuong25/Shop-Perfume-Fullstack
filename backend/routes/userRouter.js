import express from 'express'
import { addToCart, wishlist, decreaseQuantity, getProduct, increaseQuantity, loginUser, profile, registerUser, removeFromCart, updateProfile } from '../controllers/userController.js'
import authUser from '../middlewares/authUser.js'
import upload from '../middlewares/multer.js'

const userRouter = express.Router()

userRouter.post('/register', registerUser)
userRouter.post('/login', loginUser)
userRouter.get('/profile', authUser, profile)
userRouter.put('/update-profile', upload.single('image'), authUser, updateProfile)
userRouter.get('/get-product', getProduct)
userRouter.post('/add-to-cart', authUser, addToCart)
userRouter.post('/remove-from-cart', authUser, removeFromCart)
userRouter.post('/increase-quantity', authUser, increaseQuantity)
userRouter.post('/decrease-quantity', authUser, decreaseQuantity)
userRouter.post('/wishlist', authUser, wishlist)

export default userRouter