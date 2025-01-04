import React, { useContext } from 'react'
import { AiOutlineMenu } from "react-icons/ai";
import { AppContext } from '../context/Context';

const TrackOrder = ({ setShow, show }) => {

    const { order, formatMoney } = useContext(AppContext)

    const formatDate = (dateString) => {
        if (!dateString) return ''
        const date = new Date(dateString);
        return `${date.getDate()}/${date.getMonth() + 1}/${date.getFullYear()}`
    }

    return (
        <div className='flex flex-col gap-3 w-full bg-gray-100 px-3 py-3 shadow-md'>
            <div
                className='flex md:hidden items-center gap-3 mb-3 cursor-pointer'
                onClick={() => setShow(!show)}
            >
                <AiOutlineMenu />
                <p>Menu</p>
            </div>

            <div className='flex flex-col'>
                <p className='font-bold text-lg'>Đơn hàng của tôi</p>

                <div className='flex flex-col gap-5 md:gap-8 mt-3.5'>
                    {order?.map((i, index) => (
                        <div key={index} className='bg-gray-100 border border-gray-200 rounded-md shadow-md hover:shadow-xl flex flex-col gap-2 px-2 py-1.5 md:px-5 md:py-5'>
                            <p>Mã đơn hàng: <span className='font-semibold'>{i?._id}</span></p>
                            <p>Trạng thái: <span className='font-semibold'>{i?.status}</span></p>
                            <p>Giá phải trả: <span className='font-semibold'>{formatMoney(i?.price)}</span></p>
                            <p>Ngày đặt hàng: <span className='font-semibold'>{formatDate(i?.date)}</span></p>

                            <div className='flex flex-col gap-5 mt-3.5'>
                                {i?.productList?.map((i, index) => (
                                    <div key={index} className='flex items-center gap-3 text-[13px] md:text-sm'>
                                        <img src={i.productList?.image} className='w-20' alt="" />
                                        <div>
                                            <p>Tên sản phẩm: <span className='font-semibold'>{i.productList?.name}</span> </p>
                                            <p>Số lượng: <span className='font-semibold'>{i.quantity}</span></p>
                                            <p>Giá mỗi sản phẩm: <span className='font-semibold'>{formatMoney(i.productList?.newPrice)}</span> vnd</p>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    )
}

export default TrackOrder
