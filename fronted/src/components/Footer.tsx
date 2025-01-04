'use server'
import React from 'react'
import { SiInstagram } from "react-icons/si";
import { FiFacebook } from "react-icons/fi";
import { AiOutlineYoutube } from "react-icons/ai";
import { IoLogoTiktok } from "react-icons/io5";
import { FaPhoneAlt } from "react-icons/fa";
import { TiTick } from "react-icons/ti";

const Footer = () => {
    return (
        <div className='flex flex-col bg-[#333333] text-xs text-white py-3.5 px-3.5 md:px-7'>
            <div className='flex flex-col lg:flex-row justify-between gap-3'>
                <div className='flex flex-col gap-1'>
                    <p className='font-bold mb-3.5 text-base'>namperfume</p>
                    <p className='hover:underline'>Giới thiệu</p>
                    <p className='hover:underline'>tuyển dụng</p>
                    <p className='hover:underline'>Liên hệ</p>
                </div>

                <div className='flex flex-col gap-1'>
                    <p className='font-bold mb-3.5 text-base'>Hỗ trợ</p>
                    <p className='hover:underline'>Các câu hỏi thường gặp</p>
                    <p className='hover:underline'>Cách thức mua hàng</p>
                    <p className='hover:underline'>Hướng dẫn đặt hàng</p>
                    <p className='hover:underline'>Phương thức vận chuyển</p>
                    <p className='hover:underline'>Phương thức thanh toán</p>
                    <p className='hover:underline'>Theo dõi đơn hàng</p>
                    <p className='hover:underline'>Chính sách giá cả</p>
                    <p className='hover:underline'>Chính sách đổi trả</p>
                    <p className='hover:underline'>Chính sách bảo mật</p>
                </div>

                <div className='flex flex-col gap-1'>
                    <p className='font-bold mb-3.5 text-base'>Địa chỉ cửa hàng</p>
                    <p className='hover:underline'>420/6 Lê Văn Sỹ P.14, Q.3, TP. Hồ Chí Minh</p>
                    <p className='hover:underline'>366A18 Phan Văn Trị, P.5, Q.Gò Vấp, TP. Hồ Chí Minh</p>
                    <p className='hover:underline'>1379-1381 Đường 3/2, P.16, Q.11, TP. Hồ Chí Minh</p>
                    <p className='hover:underline'>45-47 Cách Mạng Tháng 8, P.Bến Thành, Q.1, TP. Hồ Chí Minh</p>
                    <p className='hover:underline'>8 Nguyễn Gia Trí, P.25, Q.Bình Thạnh, TP. Hồ Chí Minh</p>
                    <p className='hover:underline'>252 Nguyễn Thị Thập, Phường Tân Quy, Quận 7, TP. Hồ Chí Minh</p>
                    <p className='hover:underline'>123-125 Võ Thị Sáu, P.Thống Nhất, TP.Biên Hòa, T. Đồng Nai</p>
                    <p className='hover:underline'>86 Mậu Thân, P.An Hòa, Q.Ninh Kiều, Cần Thơ</p>
                </div>

                <div className='flex flex-col gap-1'>
                    <p className='font-bold mb-3.5 text-base'>Theo dõi chúng tôi</p>
                    <div className='flex items-center gap-1.5'>
                        <SiInstagram />
                        <p className='hover:underline'>Instagram</p>
                    </div>
                    <div className='flex items-center gap-1.5'>
                        <FiFacebook />
                        <p className='hover:underline'>Facebook</p>
                    </div>
                    <div className='flex items-center gap-1.5'>
                        <AiOutlineYoutube />
                        <p className='hover:underline'>Youtube</p>
                    </div>
                    <div className='flex items-center gap-1.5'>
                        <IoLogoTiktok />
                        <p className='hover:underline'>Tiktok</p>
                    </div>
                </div>

                <div className='flex flex-col gap-3'>
                    <p className='text-xl font-bold'>Nơi mùi hương là <br /> bạn đồng hành</p>
                    <p className='font-bold'>Đăng ký thông báo và nhận tin</p>
                    <div className='flex gap-2'>
                        <input
                            type="text"
                            className='border bg-[#333333] px-1.5 py-0.5 rounded-sm focus:outline-none'
                            placeholder='Nhập email của bạn'
                        />
                        <button className='bg-white text-gray-700 px-2 py-0.5 rounded-sm'>Gửi</button>
                    </div>
                    <div className='flex gap-1 items-center text-[10px]'>
                        <p>GỌI ĐẶT MUA: </p>
                        <FaPhoneAlt />
                        <p className='hover:underline'>1900 0129 (9:00 - 21:00)</p>
                    </div>
                </div>
            </div>

            <hr className='w-full my-3.5 bg-gray-300 self-center' />

            <div className='flex flex-col md:flex-row justify-between'>
                <div className='flex flex-col text-[10px] gap-0.5'>
                    <p>Copyright 2013-2024 © namperfume. All Rights Reserved.</p>
                    <p>Cty TNHH namperfume</p>
                    <p>GPKD: 0316901314. Ngày cấp: 09/06/2021. Nơi cấp: Sở KH&DT TP.HCM</p>
                    <p>Địa chỉ: Tầng 7, 19A Cộng Hòa, Tòa Nhà Scetpa, Phường 12, Quận Tân Bình, TP. Hồ Chí Minh</p>
                </div>

                <div>
                    <TiTick className='text-6xl' />
                </div>
            </div>
        </div>
    )
}

export default Footer