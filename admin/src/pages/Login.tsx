import React, { useContext, useState } from 'react'
import { AppContext } from '../context/Context'
import axios from 'axios'
import { toast } from 'react-toastify'

const Login = () => {

    const { setToken, backendUrl } = useContext(AppContext)

    const [email, setEmail] = useState<string>('')
    const [password, setPassword] = useState<string>('')

    const onSubmitHandler = async (e: React.FormEvent): Promise<void> => {
        e.preventDefault()

        try {
            const { data } = await axios.post(backendUrl + "/api/admin/login", { email, password })
            if (data.success) {
                localStorage.setItem('atoken', 'success')
                setToken('success')
            } else {
                toast.error("Tài khoản hoặc mật khẩu không đúng")
            }
        } catch (error) {
            toast.error(error.message)
        }
    }

    return (
        <form onSubmit={onSubmitHandler} className='min-h-[80vh] flex items-center'>
            <div className='flex flex-col gap-3 m-auto items-start p-8 min-w-[340px] sm:min-w-96 border rounded-xl text-[#5e5e5e] text-sm shadow-lg'>
                <p className='text-2xl font-semibold m-auto text-red-500'>Admin Login</p>
                <div className='w-full '>
                    <p>Email</p>
                    <input onChange={(e) => setEmail(e.target.value)} value={email} className='border border-[#DADADA] rounded w-full p-2 mt-1' type="email" required />
                </div>
                <div className='w-full '>
                    <p>Password</p>
                    <input onChange={(e) => setPassword(e.target.value)} value={password} className='border border-[#DADADA] rounded w-full p-2 mt-1' type="password" required />
                </div>
                <button className='bg-red-500 text-white w-full py-2 rounded-md text-base'>Login</button>
            </div>
        </form>
    )
}

export default Login
