import express from 'express'
import upload from '../middlewares/multer.js'
import { addProduct, deleteUser, getAllOder, getAllProduct, getAllUser, login } from '../controllers/adminController.js'

const adminRouter = express.Router()

adminRouter.post('/login', login)
adminRouter.delete('/delete-user', deleteUser)
adminRouter.post('/add-product', upload.single('image'), addProduct)
adminRouter.get('/get-all-user', getAllUser)
adminRouter.get('/get-all-product', getAllProduct)
adminRouter.get('/get-all-order', getAllOder)

export default adminRouter