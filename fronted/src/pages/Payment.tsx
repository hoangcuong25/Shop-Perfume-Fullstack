import React, { useContext, useState } from 'react'
import Header from '../components/Header'
import Navbar from '../components/Navbar'
import { AppContext } from '../context/Context'
import { FaTruck } from "react-icons/fa";
import { IoIosWallet } from "react-icons/io";
import { IoIosPricetags } from "react-icons/io";
import { Link } from 'react-router-dom';
import { toast } from 'react-toastify';
import axios from 'axios';

const Payment = () => {

    const { token, totalPrice, formatMoney, backendUrl, loadUserProfileData, cart, getOrder } = useContext(AppContext)

    const [optionShip, setOptionShip] = useState<string>('Giao hàng tiêu chuẩn')
    const [optionPayment, setOptionPayment] = useState<string>('Thanh toán khi nhận hàng')

    const subtotal = totalPrice() + (optionShip === 'Giao hàng tiêu chuẩn' ? 30000 : 60000)

    const productInfor: any[] = []

    const order = async () => {
        try {
            cart.map((i) => {
                productInfor.push({
                    productId: i?.product?._id,
                    quantity: i?.quantity
                })
            })

            const { data } = await axios.post(backendUrl + '/api/user/order', { productInfor, subtotal, optionShip, optionPayment }, { headers: { token } })

            if (data.success) {
                toast.success('Đặt hàng thành công')
                scrollTo(0, 0)
                loadUserProfileData()
                getOrder()
            }
        }
        catch (error) {
            toast.error(error.response?.data?.message || "Something went wrong")
        }
    }

    return token && (
        <div className='mb-16'>
            <Header />
            <Navbar />

            <p className='text-sm mt-1.5 sm:mt-3.5 px-3.5 sm:px-7'><span className='text-gray-500'>Trang chủ |</span><span className='font-semibold'> Thanh toán</span></p>
            <div className='flex flex-col md:flex-row gap-3.5 justify-between px-3.5 sm:px-7'>
                <div className='flex flex-col mt-3'>
                    <div className='flex flex-col gap-3.5'>
                        <div className='flex items-center gap-3.5'>
                            <FaTruck className='text-5xl text-gray-700' />
                            <p className='text-lg font-bold'>Hình thức giao hàng</p>
                        </div>
                        <div className="flex items-start">
                            <input
                                type="radio"
                                name="shippingMethod"
                                checked={optionShip === 'Giao hàng tiêu chuẩn'}
                                onClick={() => setOptionShip('Giao hàng tiêu chuẩn')}
                                className="mt-1 w-5 h-5 text-blue-500 focus:ring-blue-400 border-gray-300"
                            />
                            <div className="ml-3 text-sm">
                                <p className="block text-base font-medium">
                                    Giao hàng tiêu chuẩn
                                </p>
                                <p className="text-gray-600">
                                    Miễn phí vận chuyển các đơn nội thành Hồ Chí Minh
                                </p>
                                <p className="text-gray-600">
                                    Các địa chỉ khác: <span className="font-semibold">30.000 vnd</span>
                                </p>
                            </div>
                        </div>
                        <div className="flex items-start">
                            <input
                                type="radio"
                                name="shippingMethod"
                                checked={optionShip === 'Giao hàng hỏa tốc'}
                                onClick={() => setOptionShip('Giao hàng hỏa tốc')}
                                className="mt-1 w-5 h-5 text-blue-500 focus:ring-blue-400 border-gray-300"
                            />
                            <div className="ml-3 text-sm">
                                <p className="block text-base font-medium">
                                    Giao hàng hỏa tốc
                                </p>
                                <p className="text-gray-600">
                                    Giao hàng hỏa tốc các đơn nội thành Hồ Chí Minh: <span className="font-semibold">35.000 vnd</span>
                                </p>
                                <p className="text-gray-600">
                                    Các địa chỉ khác: <span className="font-semibold">60.000 vnd</span>
                                </p>
                            </div>
                        </div>
                    </div>

                    <div className='mt-7 flex flex-col gap-3.5'>
                        <div className='flex items-center gap-3.5'>
                            <IoIosWallet className='text-5xl text-gray-700' />
                            <p className='text-lg font-bold'>Phương thức thanh toán</p>
                        </div>
                        <div className="flex items-start">
                            <input
                                type="radio"
                                name="paymentMethod"
                                checked={optionPayment === 'Thanh toán khi nhận hàng'}
                                onClick={() => setOptionPayment('Thanh toán khi nhận hàng')}
                                className="mt-1 w-5 h-5 text-blue-500 focus:ring-blue-400 border-gray-300"
                            />
                            <div className="ml-3 text-sm">
                                <p className="block text-base font-medium">
                                    Thanh toán khi nhận hàng
                                </p>
                                <p className="text-gray-600">
                                    Quý khách sẽ thanh toán bằng tiền mặt khi nhận hàng
                                </p>
                            </div>
                        </div>
                        <div className="flex items-start">
                            <input
                                type="radio"
                                name="paymentMethod"
                                checked={optionPayment === 'Thanh toán bằng ví VNPAY'}
                                onClick={() => setOptionPayment('Thanh toán bằng ví VNPAY')}
                                className="mt-1 w-5 h-5 text-blue-500 focus:ring-blue-400 border-gray-300"
                            />
                            <div className="ml-3 text-sm">
                                <p className="block text-base font-medium">
                                    Thanh toán bằng ví VNPAY
                                </p>
                                <p className="text-gray-600">
                                    Quý khách sử dụng ví VNPAY để thanh toán online
                                </p>
                            </div>
                        </div>
                    </div>
                </div>

                <div className='flex flex-col mt-3'>
                    <div className='flex justify-start md:justify-end items-center gap-3'>
                        <IoIosPricetags className='text-3xl text-gray-700' />
                        <p className='text-lg font-bold'>Mã giảm giá</p>
                    </div>
                    <div className='flex justify-start md:justify-end mt-3.5'>
                        <input
                            type="text"
                            placeholder='Nhập mã khyến mãi'
                            className='w-52 py-1 border border-gray-300 hover:border-gray-400 px-1.5 focus:outline-none'
                        />
                        <div className='w-24 py-1 bg-black text-white text-center'>
                            Áp dụng
                        </div>
                    </div>
                    <p className='mt-1 md:text-end text-sm text-blue-500 hover:text-blue-600 cursor-pointer'>Chọn mã giảm giá</p>
                    <div className='mt-5 flex justify-between'>
                        <p>Tạm tính:</p>
                        <p>{formatMoney(totalPrice())} vnd</p>
                    </div>
                    <div className='mt-3 flex justify-between'>
                        <p>Vận chyển:</p>
                        <p>{optionShip === 'Giao hàng tiêu chuẩn' ? '+ 30.000' : '+ 60.000'} vnd</p>
                    </div>
                    <div className='mt-3 flex justify-between'>
                        <p>Điểm tích lũy:</p>
                        <p>1.000 Điểm</p>
                    </div>
                    <div className='mt-5 flex justify-between'>
                        <p>Tiền phải trả:</p>
                        <p className='text-red-500 font-semibold'>
                            {formatMoney(subtotal)} vnd
                        </p>
                    </div>
                    <p className='mt-1 text-sm'>(giá này đã bao gồm thuế GTGT, phí đóng gói, phí vận chuyển và các chi phí phát sinh khác)</p>
                    <div className='mt-3 flex justify-between'>
                        <p>Thời gian dự kiến:</p>
                        <p>Dự kiến từ 20/04 - 21/04</p>
                    </div>
                    <Link to='/' onClick={() => order()} className='mt-7 w-52 py-3 bg-red-500 hover:bg-red-600 text-white text-lg text-center self-start md:self-end'>
                        ĐẶT HÀNG
                    </Link>
                </div>
            </div>
        </div>
    )
}

export default Payment
