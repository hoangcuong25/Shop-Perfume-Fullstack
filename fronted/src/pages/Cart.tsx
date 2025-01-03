import React, { useContext } from 'react'
import Header from '../components/Header'
import Navbar from '../components/Navbar'
import empty from '../assets/empty.png'
import { Link } from 'react-router-dom'
import Interested from '../components/Interested.js'
import { AppContext } from '../context/Context.js'
import { FaShoppingBasket } from "react-icons/fa";

const Cart = () => {

    const { cart, formatMoney } = useContext(AppContext)

    return (
        <div className='mb-16'>
            <Header />
            <Navbar />

            <div className='flex flex-col mt-1.5 sm:mt-3.5 px-3.5 sm:px-7'>
                <p className='text-sm '><span className='text-gray-500'>Trang chủ | </span><span className='font-semibold'>Giỏ hàng</span></p>

                {cart ?
                    <div className=' mt-3 flex flex-col gap-1.5'>
                        <div className='flex gap-3.5 items-center'>
                            <FaShoppingBasket className='text-3xl text-gray-600' />
                            <p className='text-xl font-semibold'>Giỏ hàng của bạn</p>
                        </div>
                        <div className='mt-3.5 grid grid-cols-[61%_13%_13%_13%] justify-center bg-gray-100 shadow-md px-3 py-2'>
                            <p className='text-lg font-semibold'>Tất cả ({cart.length} sản phẩm)</p>
                            <p className='text-lg font-semibold text-center'>Giá</p>
                            <p className='text-lg font-semibold text-center'>Số lượng</p>
                            <p className='text-lg font-semibold text-center'>Thành tiền</p>
                        </div>
                        {cart?.map((i, index) => (
                            <div key={index} className='mt-3.5 grid items-center text-center grid-cols-[61%_13%_13%_13%] px-3 py-2'>
                                <div className='flex gap-5 items-center'>
                                    <img src={i?.product?.image} className='w-28  ' alt="" />
                                    <p>{i?.product?.name}</p>
                                </div>
                                <p>{formatMoney(i?.product?.newPrice)} vnd</p>
                                <div className='flex justify-center items-center gap-3'>
                                    <p className='text-xl cursor-pointer'>+</p>
                                    <p className='px-5 py-2 text-center font-semibold bg-gray-100 rounded-md  shadow-md'>{i?.quantity}</p>
                                    <p className='text-xl cursor-pointer'>-</p>
                                </div>
                                <p>{formatMoney(i?.product?.newPrice * i?.quantity)} vnd</p>
                            </div>
                        ))}
                    </div>
                    : <div className=' mt-3 flex md:flex-row flex-col gap-1.5'>
                        <img src={empty} className='size-72' alt="" />

                        <div className='flex flex-col'>
                            <p className='text-2xl font-bold mb-3.5'>Giỏ hàng của bạn đang rỗng!</p>
                            <p>Thật tiếc! Chúng tôi biết bạn đang muốn mua món đồ gì đó.</p>
                            <p>Nhưng trước tiên bạn cần thêm món đồ đó vào giỏ hàng của mình.</p>
                            <p>Nhấn <Link onClick={() => scrollTo(0, 0)} to='/' className='font-bold hover:underline'>vào đây</Link> để tiếp tục mua sắm.</p>
                        </div>
                    </div>
                }
            </div>

            <Interested />
        </div>
    )
}

export default Cart
