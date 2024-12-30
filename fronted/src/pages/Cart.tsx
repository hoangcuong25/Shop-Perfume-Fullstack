import React from 'react'
import Header from '../components/Header'
import Navbar from '../components/Navbar'
import empty from '../assets/empty.png'
import { Link } from 'react-router-dom'
import Interested from '../components/Interested.js'

const Cart = () => {

    return (
        <div className='mb-16'>
            <Header />
            <Navbar />

            <div className='flex flex-col mt-1.5 sm:mt-3.5 px-3.5 sm:px-7'>
                <p className='text-sm '><span className='text-gray-500'>Trang chủ | </span><span className='font-semibold'>Giỏ hàng</span></p>

                <div className=' mt-3 flex md:flex-row flex-col gap-1.5'>
                    <img src={empty} className='size-72' alt="" />

                    <div className='flex flex-col'>
                        <p className='text-2xl font-bold mb-3.5'>Giỏ hàng của bạn đang rỗng!</p>
                        <p>Thật tiếc! Chúng tôi biết bạn đang muốn mua món đồ gì đó.</p>
                        <p>Nhưng trước tiên bạn cần thêm món đồ đó vào giỏ hàng của mình.</p>
                        <p>Nhấn <Link to='/' className='font-bold hover:underline'>vào đây</Link> để tiếp tục mua sắm.</p>
                    </div>
                </div>
            </div>

            <Interested />
        </div>
    )
}

export default Cart
