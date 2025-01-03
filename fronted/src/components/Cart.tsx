import React, { useContext } from 'react'
import empty from '../assets/empty.png'
import { Link } from 'react-router-dom'
import { AppContext } from '../context/Context.js'
import { FaShoppingBasket } from "react-icons/fa";

const Cart = ({ show, setShow }) => {

    const { cart, formatMoney } = useContext(AppContext)

    return (
        <div className='flex flex-col w-full bg-gray-100 shadow-md px-3 py-3'>
            {cart ?
                <div className=' mt-3 flex flex-col gap-1.5'>
                    <div className='flex gap-3.5 items-center'>
                        <FaShoppingBasket className='text-3xl text-gray-600' />
                        <p className='text-xl font-semibold'>Giỏ hàng của bạn</p>
                    </div>
                    <div className='mt-3.5 grid grid-cols-[57%_13%_17%_13%] justify-center bg-gray-200 shadow-md px-3 py-2'>
                        <p className='text-lg font-semibold'>Tất cả ({cart.length} sản phẩm)</p>
                        <p className='text-lg font-semibold text-center'>Giá</p>
                        <p className='text-lg font-semibold text-center'>Số lượng</p>
                        <p className='text-lg font-semibold text-center'>Thành tiền</p>
                    </div>
                    {cart?.map((i, index) => (
                        <div key={index} className='mt-3.5 grid items-center text-center grid-cols-[57%_13%_17%_13%] px-3 py-2'>
                            <div className='flex gap-5 items-center'>
                                <img src={i?.product?.image} className='w-28  ' alt="" />
                                <p>{i?.product?.name}</p>
                            </div>
                            <p>{formatMoney(i?.product?.newPrice)} vnd</p>
                            <div className='flex justify-center items-center gap-3.5'>
                                <p className='text-xl cursor-pointer py-0.5 w-7 rounded-full bg-gray-100 shadow-md'>+</p>
                                <p className='px-5 py-2 text-center font-semibold bg-gray-100 rounded-md  shadow-md'>{i?.quantity}</p>
                                <p className='text-xl cursor-pointer py-0.5 w-7 rounded-full bg-gray-100 shadow-md'>-</p>
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
    )
}

export default Cart
