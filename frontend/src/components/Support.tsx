'use server'
import React from 'react'
import { BiMessageDetail } from "react-icons/bi";

const Support = () => {
    return (
        <div className='fixed bottom-10 right-5 bg-gray-100 shadow-md hover:shadow-lg rounded-full p-1 text-3xl text-red-500 hover:text-red-900 cursor-pointer animate-bounce'>
            <BiMessageDetail />
        </div>
    )
}

export default Support