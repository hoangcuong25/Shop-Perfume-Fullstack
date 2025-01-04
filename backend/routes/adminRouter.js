import express from 'express'
import upload from '../middlewares/multer.js'
import { addProduct, getAllOder, getAllProduct, getAllUser } from '../controllers/adminController.js'

const adminRouter = express.Router()

adminRouter.post('/add-product', upload.single('image'), addProduct)
adminRouter.get('/get-all-user', getAllUser)
adminRouter.get('/get-all-product', getAllProduct)
adminRouter.get('/get-all-order', getAllOder)

export default adminRouter