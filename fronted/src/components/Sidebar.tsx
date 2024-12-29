import React, { useContext, useState } from 'react'
import { AppContext } from '../context/Context'

const Sidebar = ({ sidebar, setSidebar }) => {

    const { userData } = useContext(AppContext)

    return (
        <div className='flex flex-col bg-gray-100 pt-2 w-72 h-fit shadow-md'>
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
            </div>
        </div >
    )
}

export default Sidebar
