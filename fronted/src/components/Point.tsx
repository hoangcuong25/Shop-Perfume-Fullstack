import React from 'react'
import { RiCopperCoinFill } from "react-icons/ri";
import { FaPen, FaRegWindowClose } from "react-icons/fa";
import { IoIosGift } from "react-icons/io";
import { IoMdPaper } from "react-icons/io";
import { AiOutlineMenu } from "react-icons/ai";

const Point = ({ setShow, show }) => {
    return (
        <div className='flex flex-col gap-3 w-full bg-gray-100 px-3 py-3 shadow-md'>
            <div
                className='flex md:hidden items-center gap-3 mb-3 cursor-pointer'
                onClick={() => setShow(!show)}
            >
                {show ?
                    <FaRegWindowClose className='text-gray-700' />
                    : <AiOutlineMenu className='text-gray-700' />
                }
                <p>Menu</p>
            </div>
            <div className='w-full h-20 bg-stone-200 rounded-md flex justify-center items-center gap-5'>
                <RiCopperCoinFill className='text-yellow-400 text-2xl' />
                <p> Điểm khả dụng</p>
                <p className='text-2xl font-bold text-orange-500'>0</p>
            </div>

            <div className='w-full h-fit bg-gray-200 rounded-md flex items-center justify-evenly py-5'>
                <div className='flex flex-col items-center gap-3 hover:text-orange-500 text-gray-700'>
                    <FaPen className='text-2xl md:text-5xl' />
                    <p className='font-bold text-xs md:text-base'>Lịch sử tích điểm</p>
                </div>

                <div className='flex flex-col items-center gap-3 hover:text-orange-500 text-gray-700'>
                    <IoIosGift className='text-2xl md:text-5xl' />
                    <p className='font-bold text-xs md:text-base'>Đổi quà</p>
                </div>

                <div className='flex flex-col items-center gap-3 hover:text-orange-500 text-gray-700'>
                    <IoMdPaper className='text-2xl md:text-5xl' />
                    <p className='font-bold text-xs md:text-base'>Quản lí đổi quà</p>
                </div>
            </div>
        </div>
    )
}

export default Point
