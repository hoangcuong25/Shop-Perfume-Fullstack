import React from 'react'
import Header from '../components/Header'
import Navbar from '../components/Navbar'
import { FaStar } from "react-icons/fa";
import { useParams } from 'react-router-dom'
import all_item from '../assets/all_item.js'
import StickyBar from '../components/StickBar.js'

const DisplayProduct = () => {

    const { id } = useParams()

    const productInfo = all_item.find((i) => i.id === Number(id))

    console.log(productInfo)

    return (
        <div className='mb-16'>
            <Header />
            <Navbar />
            <StickyBar />

            <div className='flex flex-col gap-1.5 mt-1.5 sm:mt-3.5 px-3.5 sm:px-7'>
                <p className='text-sm '><span className='text-gray-500'>Trang chủ | {productInfo?.category} | </span><span className='font-semibold'>{productInfo?.name}</span></p>

                <div className='flex gap-1.5'>
                    <img src={productInfo?.image} className='w-80' alt="" />

                    <div className='flex flex-col gap-2'>
                        <p>{productInfo?.name}</p>
                        <div className='flex gap-1 text-orange-600'>
                            <FaStar />
                            <FaStar />
                            <FaStar />
                            <FaStar />
                            <FaStar />
                            <p className='text-gray-800 text-sm'>13 đánh giá</p>
                        </div>
                        <p>Thương Hiệu: <span className='font-bold'>{productInfo?.brands}</span></p>
                        <p>Loại: {productInfo?.category}</p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default DisplayProduct