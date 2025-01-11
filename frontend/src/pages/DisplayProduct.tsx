import React, { useContext, useState } from 'react'
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
import { AiOutlineReload } from "react-icons/ai";
import CommentModal from '../components/CommentModal.js'

const DisplayProduct = () => {

    const { productData, formatMoney, loadUserProfileData, backendUrl, token, comments } = useContext(AppContext)

    const [loading, setLoading] = useState<boolean>(false)

    const navigate = useNavigate()

    const { id } = useParams()

    const productInfo = productData?.find((i: any) => i._id === id)

    const addToCart = async (productId: string | undefined): Promise<void> => {
        setLoading(true)

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

        setLoading(false)
    }

    return (
        <div className='mb-16'>
            <Header />
            <Navbar />
            <StickyBar productInfo={productInfo} formatMoney={formatMoney} addToCart={addToCart} loading={loading} setLoading={setLoading} />

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
                            <p>Giá: <span className='text-lg text-red-500'>{formatMoney(productInfo?.newPrice)} vnđ </span><span className='text-gray-400 line-through'>{formatMoney(productInfo?.oldPrice)} vnđ</span></p>

                            <div className='flex gap-5 mt-5'>
                                {loading ?
                                    <div
                                        className='flex items-center justify-center w-40 h-10 rounded-md bg-gray-300 text-center text-white cursor-pointer'
                                    >
                                        <AiOutlineReload className='animate-spin text-green-500 text-2xl' />
                                    </div>
                                    : <div
                                        className='w-40 py-2 rounded-md bg-red-500 text-center text-white cursor-pointer hover:bg-red-600'
                                        onClick={() => addToCart(id)}
                                    >
                                        THÊM VÀO GIỎ
                                    </div>
                                }
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
                    <CommentModal productInfo={productInfo} />
                </div>

                <div className='mt-3.5'>
                    {
                        productInfo?.comments.length != 0 ?
                            <div className='flex flex-col gap-3.5'>
                                {
                                    productInfo?.comments.map((item: any, index: number) => (
                                        <div className='border border-gray-300 px-2 py-2 rounded w-80 sm:w-[500px] '>
                                            <p className='font-semibold capitalize'>{item?.userData?.firstName + " " + item?.userData?.lastName}:</p>
                                            <p className='mt-1.5'>{item?.comment}</p>
                                        </div>
                                    ))
                                }
                            </div>
                            : <div>
                                Chưa có đánh giá nào về sản phẩm này
                            </div>
                    }
                </div>
            </div>

            <Interested />
        </div>
    )
}

export default DisplayProduct