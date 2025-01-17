/* eslint-disable @typescript-eslint/no-unused-expressions */
/* eslint-disable @typescript-eslint/no-explicit-any */
import { useContext, useRef, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import axios from 'axios'
import { AppContext } from '../context/Context'
import { toast } from 'react-toastify'
import { FaRegEye, FaRegEyeSlash } from 'react-icons/fa'

const ResetPassword = () => {

    const { backendUrl } = useContext(AppContext)
    axios.defaults.withCredentials = true

    const navigate = useNavigate()
    const [email, setEmail] = useState('')
    const [newPassword, setNewPassword] = useState('')
    const [isEmailSent, setIsEmailSent] = useState<boolean>(false)
    const [otp, setOtp] = useState<string>('')
    const [isOtpSubmited, setIsOtpSubmted] = useState(false)
    const [isShowPassword, setIsShowPassword] = useState<boolean>(false)

    const inputRefs = useRef<(HTMLInputElement | null)[]>([])

    const handleInput = (e: any, index: number) => {
        if (e.target.value.length > 0 && index < inputRefs.current.length - 1) {
            inputRefs.current[index + 1]?.focus()
        }
    }

    const handleKeyDown = (e: any, index: number) => {
        if (e.key === "Backspace" && e.target.value === "" && index > 0) {
            inputRefs.current[index - 1]?.focus()
        }
    }

    const handlePaste = (e: any) => {
        const paste = e.clipboardData.getData('text')
        const pasteArray = paste.split('')
        pasteArray.forEach((char: any, index: number) => {
            if (inputRefs.current[index]) {
                inputRefs.current[index].value = char
            }
        })
    }

    const onSubmitEmail = async (e: any) => {
        e.preventDefault()

        try {
            const { data } = await axios.post(backendUrl + '/api/user/send-reset-otp', { email })

            if (data.success) {
                setIsEmailSent(true)
                toast.success("Mã OTP đã được gửi đến Email của bạn")
            }

        } catch (error: any) {
            console.log(error.message)
        }
    }

    const onSubmitOTP = async (e: any) => {
        e.preventDefault()
        const otpArray = inputRefs.current.map((e: any) => e.value)
        setOtp(otpArray.join(''))
        setIsOtpSubmted(true)
    }

    const onSubmitNewPassword = async (e: any) => {
        e.preventDefault()

        try {
            const { data } = await axios.post(backendUrl + '/api/user/reset-password', { email, otp, newPassword })
            if (data.success) {
                navigate('/login')
                toast.success('Thay đổi mật khẩu thành công')
            }

        } catch (error: any) {
            console.log(error.message)
        }
    }

    return (
        <div className='flex items-center justify-center min-h-screen px-6 sm:px-0 bg-gradient-to-br from-blue-200 to-purple-400'>
            {
                !isEmailSent &&
                <form onSubmit={onSubmitEmail} className='bg-slate-900 p-8 rounded-lg shadow-lg w-96 text-sm'>
                    <h1 className='text-white text-2xl font-semibold text-center mb-4'>Reset password</h1>
                    <p className='text-center mb-6 text-indigo-300'>Enter your registered email address</p>
                    <div className='mb-4 flex items-center gap-3 w-full px-5 py-2.5 rounded-full bg-[#333a5c]'>
                        <input
                            type="email"
                            placeholder='Email address'
                            className='bg-transparent outline-none text-white'
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            required
                        />
                    </div>
                    <button className='w-full py-2.5 bg-gradient-to-r from-indigo-500 to-indigo-800 text-white rounded-full mt-3'>Submit</button>
                </form>
            }

            {
                !isOtpSubmited && isEmailSent &&
                <form onSubmit={onSubmitOTP} className='bg-slate-900 p-8 rounded-lg shadow-lg w-96 text-sm'>
                    <h1 className='text-white text-2xl font-semibold text-center mb-4'>Reset password</h1>
                    <p className='text-center mb-6 text-indigo-300'>Enter the 6-digit code sent to your email address</p>
                    <div className='flex justify-between mb-8' onPaste={handlePaste}>
                        {Array(6).fill(0).map((_, index) => (
                            <input
                                type="text"
                                maxLength={1}
                                key={index}
                                className='w-12 h-12 bg-[#333a5c] text-white text-center text-xl rounded-md'
                                ref={e => inputRefs.current[index] = e}
                                onInput={(e) => handleInput(e, index)}
                                onKeyDown={(e) => handleKeyDown(e, index)}
                            />
                        ))}
                    </div>
                    <button className='w-full py-2.5 bg-gradient-to-r from-indigo-500 to-indigo-900 text-white rounded-full'>Submit</button>
                </form>
            }

            {
                isOtpSubmited && isEmailSent &&
                <form onSubmit={onSubmitNewPassword} className='bg-slate-900 p-8 rounded-lg shadow-lg w-96 text-sm'>
                    <h1 className='text-white text-2xl font-semibold text-center mb-4'>New password</h1>
                    <p className='text-center mb-6 text-indigo-300'>Enter new password below</p>
                    <div className='mb-4 flex items-center gap-3 w-full px-5 py-2.5 rounded-full bg-[#333a5c] relative'>
                        <input
                            type={`${isShowPassword ? 'password' : 'text'}`}
                            placeholder='Password'
                            className='bg-transparent outline-none text-white'
                            value={newPassword}
                            onChange={(e) => setNewPassword(e.target.value)}
                            required
                        />
                        {isShowPassword ?
                            <FaRegEyeSlash onClick={() => setIsShowPassword(false)} className='absolute top-3.5 right-3.5 cursor-pointer text-white' />
                            : <FaRegEye onClick={() => setIsShowPassword(true)} className='absolute top-3.5 right-3.5 cursor-pointer text-white' />
                        }
                    </div>
                    <button className='w-full py-2.5 bg-gradient-to-r from-indigo-500 to-indigo-800 text-white rounded-full mt-3'>Submit</button>
                </form>
            }
        </div>
    )
}

export default ResetPassword