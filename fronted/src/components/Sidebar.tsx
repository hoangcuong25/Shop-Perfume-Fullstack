import React, { useContext, useState } from 'react'
import { AppContext } from '../context/Context'
import { useNavigate } from 'react-router-dom'

const Sidebar = ({ sidebar, setSidebar, show }) => {

    const { userData, setToken } = useContext(AppContext)

    const navigate = useNavigate()

    const logout = () => {
        setToken(false)
        localStorage.removeItem('token')
        navigate('/')
    }

    return (
        <div className={`md:flex flex-col bg-gray-100 border border-gray-300 rounded-md pt-2 w-72 h-fit shadow-md hover:shadow-lg ${show ? 'flex absolute z-50 top-36 md:top-56' : 'hidden'}`}>
            <div className='flex items-center mx-3.5 gap-2 mb-3.5'>
                <img src={userData.image} className='rounded-full size-12' alt="" />
                <div className='flex flex-col'>
                    <p className='font-semibold'>Chào {userData.firstName}</p>
                    <p className='text-sm text-gray-500 cursor-pointer'>Chỉnh sửa tài khoản</p>
                </div>
            </div>

            <hr />

            <div className='flex flex-col text-sm '>
                <p
                    className={`py-1.5 cursor-pointer px-3.5 ${sidebar === 'Quản lí tài khoản' && 'bg-stone-200 text-orange-500'}`}
                    onClick={() => setSidebar('Quản lí tài khoản')}
                >
                    Quản lí tài khoản
                </p>
                <p
                    className={`py-1.5 cursor-pointer px-3.5 ${sidebar === 'Tích điểm' && 'bg-stone-200 text-orange-500'}`}
                    onClick={() => setSidebar('Tích điểm')}
                >
                    Tích điểm
                </p>
                <p
                    className={`py-1.5 cursor-pointer px-3.5 ${sidebar === 'Giỏ hàng của tôi' && 'bg-stone-200 text-orange-500'}`}
                    onClick={() => setSidebar('Giỏ hàng của tôi')}
                >
                    Giỏ hàng của tôi
                </p>
                <p
                    className={`py-1.5 cursor-pointer px-3.5 ${sidebar === 'Đơn hàng của tôi' && 'bg-stone-200 text-orange-500'}`}
                    onClick={() => setSidebar('Đơn hàng của tôi')}
                >
                    Đơn hàng của tôi
                </p>
                <p
                    className={`py-1.5 cursor-pointer px-3.5 ${sidebar === 'Danh sách yêu thích' && 'bg-stone-200 text-orange-500'}`}
                    onClick={() => setSidebar('Danh sách yêu thích')}
                >
                    Danh sách yêu thích
                </p>
                <p
                    className={`py-1.5 cursor-pointer px-3.5 ${sidebar === 'Hỏi đáp' && 'bg-stone-200 text-orange-500'}`}
                    onClick={() => setSidebar('Hỏi đáp')}
                >
                    Hỏi đáp
                </p>
                <p
                    className={`py-1.5 cursor-pointer px-3.5 text-red-500`}
                    onClick={() => logout()}
                >
                    Đăng xuất
                </p>
            </div>
        </div >
    )
}

export default Sidebar
