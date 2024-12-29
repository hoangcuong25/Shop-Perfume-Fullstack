import express from 'express'
import { loginUser, profile, registerUser, updateProfile } from '../controllers/userController.js'
import authUser from '../middlewares/authUser.js'
import upload from '../middlewares/multer.js'

const userRouter = express.Router()

userRouter.post('/register', registerUser)
userRouter.post('/login', loginUser)
userRouter.get('/profile', authUser, profile)
userRouter.put('/update-profile', authUser, updateProfile)

export default userRouter