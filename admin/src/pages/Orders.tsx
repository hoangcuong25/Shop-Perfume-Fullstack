import React, { useContext } from 'react'
import { AppContext } from '../context/Context'
import { FaBox } from 'react-icons/fa'

const Orders = () => {

    const { orders, formatMoney } = useContext(AppContext)

    return (
        <div className='m-5'>
            <div className='flex flex-col w-96 gap-3'>
                <div className='flex items-center gap-5 bg-gray-100 p-4 min-w-52 rounded shadow-md cursor-pointer hover:-translate-y-2 transition-all duration-300'>
                    <div className='text-xl font-bold '>Quản lí Đơn hàng</div>
                    <FaBox className='text-3xl text-gray-800' />
                    <div>
                        <p className='text-xl font-medium text-gray-600'>{orders.length}</p>
                        <p className='text-gray-500'>Đơn hàng</p>
                    </div>
                </div>

                <div className='flex flex-col gap-5 md:gap-8 mt-7'>
                    {orders.reverse().slice(0, 5).map((i: any, index: number) => (
                        <div key={index} className='bg-gray-100 border border-gray-200 rounded-md shadow-md hover:shadow-xl flex flex-col gap-2 px-2 py-1.5 md:px-5 md:py-5'>
                            <p>Mã đơn hàng: <span className='font-semibold'>{i._id}</span></p>
                            <p>Trạng thái: <span className='font-semibold'>{i.status}</span></p>
                            <p>Giá phải trả: <span className='font-semibold'>{formatMoney(i.price)} vnđ</span></p>
                            <p>Ngày đặt hàng: <span className='font-semibold'></span></p>
                            <p>Hình thức vận chuyển: <span className='font-semibold'>{i.optionShip}</span></p>
                            <p>Hình thức thanh toán: <span className='font-semibold'>{i.optionPayment}</span></p>

                            <div className='flex flex-col gap-5 mt-3.5'>
                                {i.productList.map((i: any, index: number) => (
                                    <div key={index} className='flex items-center gap-3 text-[13px] md:text-sm'>
                                        <img src={i.productList.image} className='w-20' alt="" />
                                        <div>
                                            <p>Tên sản phẩm: <span className='font-semibold'>{i.productList.name}</span> </p>
                                            <p>Số lượng: <span className='font-semibold'>{i.quantity}</span></p>
                                            <p>Giá mỗi sản phẩm: <span className='font-semibold'>{formatMoney(i.productList.newPrice)}</span> vnđ</p>
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

export default Orders
