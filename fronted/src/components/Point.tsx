import React from 'react'
import { RiCopperCoinFill } from "react-icons/ri";
import { FaPen } from "react-icons/fa";
import { IoIosGift } from "react-icons/io";
import { IoMdPaper } from "react-icons/io";

const Point = () => {
    return (
        <div className='flex flex-col gap-3 w-full bg-gray-100 px-3 py-3 shadow-md'>
            <div className='w-full h-20 bg-stone-200 flex justify-center items-center gap-5'>
                <RiCopperCoinFill className='text-yellow-400 text-2xl' />
                <p> Điểm khả dụng</p>
                <p className='text-2xl font-bold text-orange-500'>0</p>
            </div>

            <div className='w-full h-fit border border-gray-300 flex items-center justify-evenly py-5'>
                <div className='flex flex-col items-center gap-3 hover:text-orange-500 text-gray-700'>
                    <FaPen className='text-5xl' />
                    <p className='font-bold'>Lịch sử tích điểm</p>
                </div>

                <div className='flex flex-col items-center gap-3 hover:text-orange-500 text-gray-700'>
                    <IoIosGift className='text-5xl' />
                    <p className='font-bold'>Đổi quà</p>
                </div>

                <div className='flex flex-col items-center gap-3 hover:text-orange-500 text-gray-700'>
                    <IoMdPaper className='text-5xl' />
                    <p className='font-bold'>Quản lí đổi quà</p>
                </div>
            </div>
        </div>
    )
}

export default Point
