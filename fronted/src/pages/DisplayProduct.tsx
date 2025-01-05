import React, { useContext } from 'react'
import Header from '../components/Header'
import Navbar from '../components/Navbar'
import { useNavigate, useParams } from 'react-router-dom'
import StickyBar from '../components/StickBar.js'
import { FaCheckSquare } from "react-icons/fa";
import Interested from '../components/Interested.js';
import { AppContext } from '../context/Context.js';
import { FaStar } from "react-icons/fa";
import { toast } from 'react-toastify'
import axios from 'axios'
const DisplayProduct = () => {

    const { productData, formatMoney, loadUserProfileData, backendUrl, token } = useContext(AppContext)

    const navigate = useNavigate()

    const { id } = useParams()

    const productInfo = productData?.find((i: any) => i._id === id)

    const addToCart = async (productId: string | undefined) => {
        try {
            const { data } = await axios.post(
                backendUrl + '/api/user/add-to-cart',
                { productId },
                {
                    headers: { token }
                }
            )

            if (data.success) {
                toast.success("Thêm vào giỏ hàng thành công")
                loadUserProfileData()
            } else {
                navigate('/login')
                scrollTo(0, 0)
            }

        } catch (error) {
            toast.error(error.response?.data?.message || "Something went wrong")
        }
    }

    return (
        <div className='mb-16'>
            <Header />
            <Navbar />
            <StickyBar productInfo={productInfo} formatMoney={formatMoney} addToCart={addToCart} />

            <div className='flex flex-col gap-1.5 mt-1.5 sm:mt-3.5 px-3.5 sm:px-7'>
                <p className='text-sm '><span className='text-gray-500'>Trang chủ | {productInfo?.type} | </span><span className='font-semibold'>{productInfo?.name}</span></p>

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
                            <p>Thương Hiệu: <span className='font-bold'>{productInfo?.brand}</span></p>
                            <p>Mô tả: {productInfo?.des}</p>
                            <p>Loại: {productInfo?.type}</p>
                            <p>Mặt hàng: Có sẵn</p>
                            <p>Vận chuyển: <span className='text-red-500'>Freeship HCM</span></p>
                            <p>Gọi đặt mua: <span className='text-red-500'>1900 0129 </span><span className='text-gray-400'>(9:00 - 21:00)</span></p>
                            <p>Giá: <span className='text-lg text-red-500'>{formatMoney(productInfo?.newPrice)} vnd </span><span className='text-gray-400 line-through'>{formatMoney(productInfo?.oldPrice)} vnd</span></p>

                            <div className='flex gap-5 mt-7'>
                                <div
                                    className='w-40 py-2 rounded-md bg-red-500 text-center text-white cursor-pointer hover:bg-red-600'
                                    onClick={() => addToCart(id)}
                                >
                                    THÊM VÀO GIỎ
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className='flex flex-col gap-5 bg-gray-100 shadow-md px-3.5 py-3.5 w-fit h-fit'>
                        <div className='flex items-center gap-3.5 text-sm'>
                            <FaCheckSquare className='text-yellow-500' />
                            <div>
                                <p>Miễn phí đổi trả trong 7 ngày</p>
                                <span className='text-blue-500 hover:underline cursor-pointer'>xem chi tiết</span>
                            </div>
                        </div>
                        <hr />
                        <div className='flex items-center gap-3.5 text-sm '>
                            <FaCheckSquare className='text-yellow-500' />
                            <p>Hoàn tiền nếu phát hiện hàng giả</p>
                        </div>
                        <hr />
                        <div className='flex items-center gap-3.5 text-sm '>
                            <FaCheckSquare className='text-yellow-500' />
                            <p>Kiểm tra hàng trước khi nhận</p>
                        </div>
                    </div>
                </div>
            </div>

            <div className='flex flex-col gap-3 mt-8 px-3.5 sm:px-7'>
                <p className='text-2xl font-semibold'>Đánh giá về sản phẩm</p>
                <p className='text-lg font-medium mb-3.5'>13 đánh giá cho {productInfo?.name}</p>

                <div className='bg-gray-100 rounded-md shadow-md flex gap-1.5 md:gap-16 md:px-7 px-1.5 md:py-3.5 py-1.5 w-fit items-center'>
                    <div className='flex flex-col items-center gap-2'>
                        <div className='flex items-center gap-3'>
                            <p className='md:text-2xl font-bold text-yellow-500 '>4.8</p>
                            <FaStar className='md:text-2xl text-orange-500' />
                        </div>
                        <p className='md:text-lg text-xs font-semibold'>Đánh giá trung bình</p>
                    </div>
                    <div className='flex flex-col md:text-base text-xs md:px-16 px-1.5 border-x-2 border-gray-300'>
                        <p>8 đánh giá 5 sao</p>
                        <p>5 đánh giá 4 sao</p>
                        <p>0 đánh giá 3 sao</p>
                        <p>0 đánh giá 2 sao</p>
                        <p>0 đánh giá 1 sao</p>
                    </div>
                    <div className='bg-black rounded-md text-white md:px-3.5 px-1.5 md:py-3 py-1 md:text-base text-xs'>
                        Đánh giá ngay
                    </div>
                </div>
            </div>

            <Interested />
        </div>
    )
}

export default DisplayProduct