import React, { useContext, useState } from 'react'
import { FaRegEyeSlash } from "react-icons/fa";
import { FaRegEye } from "react-icons/fa";
import { AppContext } from '../context/Context';
import { FcGoogle } from "react-icons/fc";
import { FaFacebook } from "react-icons/fa";
import { Link, useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';
import axios from 'axios';

const Login = () => {

    const navigate = useNavigate()

    const { backendUrl, setToken } = useContext(AppContext)

    const [isShow, setIsShow] = useState<boolean>(false)

    const [email, setEmail] = useState<string>('')
    const [password, setPassword] = useState<string>('')

    const login = async (e: React.FormEvent) => {
        e.preventDefault()

        try {
            const { data } = await axios.post(backendUrl + '/api/user/login', { email, password })

            if (data.success) {
                toast.success("Đăng Nhập Thành Công")
                localStorage.setItem('token', data.token)
                setToken(data.token)
                navigate('/')
                scrollTo(0, 0)
            } else {
                toast.error(data.message)
            }

        } catch (error) {
            toast.error(error.response?.data?.message || "Something went wrong")
        }
    }

    return (
        <div className='flex flex-col items-center gap-5 mt-3 mb-10 md:mt-5'>
            <Link to='/' className='text-3xl font-bold text-red-500'>namperfume</Link>

            <div className='text-center'>
                <p className='font-medium'>Đăng Nhập</p>
                <div className='flex gap-2'>
                    <input type="checkbox" />
                    <p className='text-gray-500 text-sm'>Lưu thông tin đăng nhập</p>
                </div>
            </div>

            <form onSubmit={login} className='flex flex-col gap-3.5 text-sm mt-3.5'>
                <div>
                    <p>Email*:</p>
                    <input
                        type="text"
                        className='border-b border-gray-500 focus:outline-none w-full mt-2'
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                    />
                </div>

                <div className='relative'>
                    <p>Mật Khẩu*:</p>
                    <input
                        type={`${isShow ? 'text' : 'password'}`}
                        className='border-b border-gray-500 focus:outline-none w-full mt-2'
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                    />

                    {isShow ?
                        <FaRegEye onClick={() => setIsShow(false)} className='absolute top-8 right-0 cursor-pointer' />
                        : <FaRegEyeSlash onClick={() => setIsShow(true)} className='absolute top-8 right-0 cursor-pointer' />
                    }
                </div>

                <Link className='mt-2 text-xs text-blue-400 text-center ' to='/'>Quên mật khẩu</Link>

                <button type='submit' className='bg-red-500 text-white mt-3.5 rounded-lg px-24 py-1 '>Đăng Nhập</button>

                <p className='mt-3 text-center font-medium'>Đăng nhập với</p>

                <div className='flex w-full hover:text-red-500 cursor-pointer group/item '>
                    <div className='flex border border-gray-300 text-center mt-3.5 px-2 py-1 group-hover/item:border-red-500 rounded-l-md'>
                        <FcGoogle className='text-2xl ' />
                    </div>
                    <div className='flex w-full font-light  border border-gray-300 rounded-r-md text-center mt-3.5 px-2 py-1 group-hover/item:border-red-500'>
                        Đăng Nhập Với Google
                    </div>
                </div>
                <div className='flex w-full hover:text-red-500 cursor-pointer group/item'>
                    <div className='flex border border-gray-300 text-center mt-3.5 px-2 py-1 group-hover/item:border-red-500 rounded-l-md'>
                        <FaFacebook className='text-2xl text-blue-500' />
                    </div>
                    <div className='flex w-full font-light  border border-gray-300 rounded-r-md text-center mt-3.5 px-2 py-1 group-hover/item:border-red-500'>
                        Đăng Nhập Với Facebook
                    </div>
                </div>
            </form>

            <div className='flex flex-col items-center mt-8 text-white text-sm w-full py-3.5 bg-[#333333]'>
                <p className='text-base mb-3'>Thành viên mới?</p>
                <p>Trở thành thành viên của namperfume</p>
                <p>Để nhận những ưu đãi và dịch vụ bất ngờ</p>
                <Link to='/register' className='mt-5 bg-white rounded-lg text-gray-900 px-24 py-1 '>Đăng Ký</Link>
            </div>
        </div>
    )
}

export default Login