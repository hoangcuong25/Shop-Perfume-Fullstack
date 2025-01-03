import React from 'react'
import { AiOutlineMenu } from "react-icons/ai";

const WistList = ({ setShow, show }) => {
    return (
        <div className='flex flex-col gap-3 w-full bg-gray-100 px-3 py-3 shadow-md'>
            <div
                className='flex md:hidden items-center gap-3 mb-3 cursor-pointer'
                onClick={() => setShow(!show)}
            >
                <AiOutlineMenu />
                <p>Menu</p>
            </div>
            <p className='font-bold text-lg'>Danh sách yêu thích</p>
        </div>
    )
}

export default WistList
