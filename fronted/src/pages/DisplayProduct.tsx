import React, { useContext } from 'react'
import Header from '../components/Header'
import Navbar from '../components/Navbar'
import { FaStar } from "react-icons/fa";
import { useParams } from 'react-router-dom'
import all_item from '../assets/all_item.js'
import StickyBar from '../components/StickBar.js'
import { FaCheckSquare } from "react-icons/fa";
import Interested from '../components/Interested.js';
import { AppContext } from '../context/Context.js';

const DisplayProduct = () => {

    const { productData } = useContext(AppContext)

    const { id } = useParams()

    const productInfo = productData?.find((i) => i._id === id)

    return (
        <div className='mb-16'>
            <Header />
            <Navbar />
            <StickyBar productInfo={productInfo} />

            <div className='flex flex-col gap-1.5 mt-1.5 sm:mt-3.5 px-3.5 sm:px-7'>
                <p className='text-sm '><span className='text-gray-500'>Trang chủ | {productInfo?.category} | </span><span className='font-semibold'>{productInfo?.name}</span></p>

                <div className='flex flex-col lg:flex-row justify-between gap-10'>
                    <div className='flex flex-col md:flex-row gap-3'>
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
                            <p>Loại: {productInfo?.type}</p>
                            <p>Mặt hàng: Có sẵn</p>
                            <p>Vận chuyển: <span className='text-red-500'>Freeship HCM</span></p>
                            <p>Gọi đặt mua: <span className='text-red-500'>1900 0129 </span><span className='text-gray-400'>(9:00 - 21:00)</span></p>

                            <div className='flex gap-5 mt-7'>
                                <div
                                    className='w-40 py-2 bg-red-500 text-center text-white cursor-pointer hover:bg-red-600'

                                >
                                    THÊM VÀO GIỎ
                                </div>
                                <div
                                    className='w-40 py-2 bg-red-500 text-center text-white cursor-pointer hover:bg-red-600'

                                >
                                    MUA NGAY
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className='flex flex-col gap-5 bg-gray-100 shadow-md px-3.5 py-3.5 w-fit h-fit'>
                        <div className='flex items-center gap-1.5 text-sm'>
                            <FaCheckSquare className='text-yellow-500' />
                            <p>Miễn phí đổi trả trong 7 ngày <span className='text-blue-500 hover:underline cursor-pointer'>xem chi tiết</span></p>
                        </div>
                        <hr />
                        <div className='flex items-center gap-1.5 text-sm '>
                            <FaCheckSquare className='text-yellow-500' />
                            <p>Hoàn tiền nếu phát hiện hàng giả</p>
                        </div>
                        <hr />
                        <div className='flex items-center gap-1.5 text-sm '>
                            <FaCheckSquare className='text-yellow-500' />
                            <p>Kiểm tra hàng trước khi nhận</p>
                        </div>
                    </div>
                </div>
            </div>

            <Interested />
        </div>
    )
}

export default DisplayProduct