import React, { useState } from 'react'
import { AiTwotoneShop } from "react-icons/ai";
import { BiMessageDetail } from "react-icons/bi";
import { FaTruck } from "react-icons/fa";
import { IoMdGift } from "react-icons/io";
import { RiRefund2Fill } from "react-icons/ri";
import { FaLongArrowAltRight } from "react-icons/fa"
import { IoShieldCheckmarkOutline } from "react-icons/io5";
import { FiCreditCard } from "react-icons/fi";

const About = () => {

    const [select1, setSelect1] = useState<string>('8-cua-hang-toan-quoc')
    const [select2, setSelect2] = useState<string>('100%-chinh-hang')

    return (
        <div data-aos="fade-up" className='px-3.5 sm:px-7 mt-20 mb-8 flex flex-col gap-10 items-center justify-center'>
            <p className='font-semibold text-2xl'>Về namperfume</p>
            <div className='flex justify-center flex-wrap gap-10 text-gray-800 text-5xl'>
                <div className='flex flex-col items-center gap-2 text-xs'>
                    <div
                        className={`p-3.5 w-fit cursor-pointer ${select1 === '8-cua-hang-toan-quoc' ? 'border-2 border-black rounded-full' : ''} `}
                        onClick={() => setSelect1('8-cua-hang-toan-quoc')}
                    >
                        <AiTwotoneShop className='text-3xl' />
                    </div>
                    <p>8 Cửa hàng toàn quốc</p>
                </div>

                <div className='flex flex-col items-center gap-2 text-xs'>
                    <div
                        className={`p-3.5 w-fit cursor-pointer ${select1 === 'tu-van-online' ? 'border-2 border-black rounded-full' : ''} `}
                        onClick={() => setSelect1('tu-van-online')}
                    >
                        <BiMessageDetail className='text-3xl' />
                    </div>
                    <p>Tư vấn online</p>
                </div>

                <div className='flex flex-col items-center gap-2 text-xs'>
                    <div
                        className={`p-3.5 w-fit cursor-pointer ${select1 === 'freeship-toan-quoc' ? 'border-2 border-black rounded-full' : ''} `}
                        onClick={() => setSelect1('freeship-toan-quoc')}
                    >
                        <FaTruck className='text-3xl' />
                    </div>
                    <p>Freeship toàn quốc</p>
                </div>

                <div className='flex flex-col items-center gap-2 text-xs'>
                    <div
                        className={`p-3.5 w-fit cursor-pointer ${select1 === 'dich-vu-qua-tang' ? 'border-2 border-black rounded-full' : ''} `}
                        onClick={() => setSelect1('dich-vu-qua-tang')}
                    >
                        <IoMdGift className='text-3xl' />
                    </div>
                    <p>Dịch vụ quà tặng</p>
                </div>

                <div className='flex flex-col items-center gap-2 text-xs'>
                    <div
                        className={`p-3.5 w-fit cursor-pointer ${select1 === 'doi-tra-mien-phi' ? 'border-2 border-black rounded-full' : ''} `}
                        onClick={() => setSelect1('doi-tra-mien-phi')}
                    >
                        <RiRefund2Fill className='text-3xl' />
                    </div>
                    <p>Đổi trả miễn phí</p>
                </div>
            </div>

            {select1 === '8-cua-hang-toan-quoc' &&
                <div className='text-center font-light text-xs'>
                    <p className='mt-5 mb-3.5 font-medium text-base'>Hệ Thống Cửa Hàng</p>
                    <p className='my-2'>420/6 Lê Văn Sỹ P.14, Q.3, TP. Hồ Chí Minh</p>
                    <p className='my-2'>366A18 Phan Văn Trị, P.5, Q.Gò Vấp, TP. Hồ Chí Minh</p>
                    <p className='my-2'>1379-1381 Đường 3/2, P.16, Q.11, TP. Hồ Chí Minh</p>
                    <p className='my-2'>45-47 Cách Mạng Tháng 8, P.Bến Thành, Q.1, TP. Hồ Chí Minh</p>
                    <p className='my-2'>8 Nguyễn Gia Trí, P.25, Q.Bình Thạnh, TP. Hồ Chí Minh</p>
                    <p className='my-2'>252 Nguyễn Thị Thập, Phường Tân Quy, Quận 7, TP. Hồ Chí Minh</p>
                    <p className='my-2'>123-125 Võ Thị Sáu, P.Thống Nhất, TP.Biên Hòa, T. Đồng Nai</p>
                    <p className='my-2'>86 Mậu Thân, P.An Hòa, Q.Ninh Kiều, Cần Thơ</p>

                    <div className='flex justify-center items-center mt-10 gap-2 hover:text-red-500 cursor-pointer'>
                        <p className='text-xs '>TÌM HIỂU THÊM</p>
                        <FaLongArrowAltRight className='text-gray-700' />
                    </div>
                </div>
            }

            {select1 === 'tu-van-online' &&
                <div className='text-center font-light text-xs'>
                    <p className='mt-5 mb-3.5 font-medium text-base'>Chuyên Viên Tư Vấn Nước Hoa namperfume </p>
                    <p className='my-2'>Các chuyên viên tư vấn nước hoa của namperfume luôn sẵn sàng hỗ trợ khách hàng từ</p>
                    <p className='my-2'>hotline, tin nhắn website và email một cách nhanh nhất</p>

                    <div className='flex justify-center items-center mt-10 gap-2 hover:text-red-500 cursor-pointer'>
                        <p className='text-xs '>gọi ngay 19000129/ Chat với chúng tôi</p>
                        <FaLongArrowAltRight className='text-gray-700' />
                    </div>
                </div>
            }

            {select1 === 'freeship-toan-quoc' &&
                <div className='text-center font-light text-xs'>
                    <p className='mt-5 mb-3.5 font-medium text-base'>Ship Nhanh Miễn Phí </p>
                    <p className='my-2 font-bold'>Tp Hcm</p>
                    <p className='my-2'>Đơn hàng sẽ được đóng gói cẩn thận và ship tới khách hàng trong vòng 2h nội thành từ 9h</p>
                    <p className='my-2'>sáng tới 21h tối.</p>
                    <p className='mb-2 mt-5 font-bold'>Toàn Quốc</p>
                    <p className='my-2'>Đơn hàng sẽ được đóng gói cẩn thận bằng nhiều lớp chống sốc kèm hộp đựng của</p>
                    <p className='my-2'>namperfume được dán tem niêm phong, đảm bảo sự an toàn cho sản phẩm trong quá trình</p>
                    <p className='my-2'>vận chuyển từ 2-4 ngày khi đến tay khách hàng.</p>
                    <div className='flex justify-center items-center mt-10 gap-2 hover:text-red-500 cursor-pointer'>
                        <p className='text-xs '>TÌM HIỂU THÊM</p>
                        <FaLongArrowAltRight className='text-gray-700' />
                    </div>
                </div>
            }

            {select1 === 'dich-vu-qua-tang' &&
                <div className='text-center font-light text-xs'>
                    <p className='mt-5 mb-3.5 font-medium text-base'>Gửi Gắm Sự Tận Tâm</p>
                    <p className='my-2'>namperfume cung cấp dịch vụ tư vấn hộp quà, viết thiệp và đóng gói để món quà của bạn trở</p>
                    <p className='my-2'>nên thật ý nghĩa</p>
                    <div className='flex justify-center items-center mt-10 gap-2 hover:text-red-500 cursor-pointer'>
                        <p className='text-xs '>TÌM HIỂU THÊM</p>
                        <FaLongArrowAltRight className='text-gray-700' />
                    </div>
                </div>
            }

            {select1 === 'doi-tra-mien-phi' &&
                <div className='text-center font-light text-xs'>
                    <p className='mt-5 mb-3.5 font-medium text-base'>Bạn đổi ý ? Không sao cả</p>
                    <p className='my-2'>Với những sản phẩm chưa bung seal và sử dụng, bạn có thể dễ dàng đổi trả miễn phí trong</p>
                    <p className='my-2'>vòng 7 ngày. Tìm hiểu thêm về quy trình đổi trả hàng hoá tại phần câu hỏi thường gặp.</p>
                    <div className='flex justify-center items-center mt-10 gap-2 hover:text-red-500 cursor-pointer'>
                        <p className='text-xs '>TÌM HIỂU THÊM</p>
                        <FaLongArrowAltRight className='text-gray-700' />
                    </div>
                </div>
            }

            <div className='flex gap-20 text-gray-700 text-xs'>
                <div className='flex flex-col items-center gap-2'>
                    <div
                        className={`p-3.5 w-fit cursor-pointer ${select2 === '100%-chinh-hang' ? 'border-2 border-black rounded-full' : ''} `}
                        onClick={() => setSelect2('100%-chinh-hang')}
                    >
                        <IoShieldCheckmarkOutline className='text-3xl' />
                    </div>
                    <p className='text-center'>100% Chính hãng</p>
                </div>

                <div className='flex flex-col items-center gap-2'>
                    <div
                        className={`p-3.5 w-fit cursor-pointer ${select2 === 'uu-dai-doc-quyen' ? 'border-2 border-black rounded-full' : ''} `}
                        onClick={() => setSelect2('uu-dai-doc-quyen')}
                    >
                        <IoMdGift className='text-3xl' />
                    </div>
                    <p className='text-center'>Ưu đãi đặc quyền</p>
                </div>

                <div className='flex flex-col items-center gap-2'>
                    <div
                        className={`p-3.5 w-fit cursor-pointer ${select2 === 'giao-dich-an-toan-uy-tin' ? 'border-2 border-black rounded-full' : ''} `}
                        onClick={() => setSelect2('giao-dich-an-toan-uy-tin')}
                    >
                        <FiCreditCard className='text-3xl' />
                    </div>
                    <p className='text-center'>Giao dịch an toàn uy tín</p>
                </div>
            </div>

            {select2 === '100%-chinh-hang' &&
                <div className='text-center font-light text-xs'>
                    <p className='mt-5 mb-3.5 font-medium text-base'>Bạn biết là bạn có thể tin chúng tôi</p>
                    <p className='my-2'>Cam Kết sản phẩm bán ra từ namperfume là hàng chính hãng 100%</p>
                    <div className='flex justify-center items-center mt-10 gap-2 hover:text-red-500 cursor-pointer'>
                        <p className='text-xs '>TÌM HIỂU THÊM</p>
                        <FaLongArrowAltRight className='text-gray-700' />
                    </div>
                </div>
            }

            {select2 === 'uu-dai-doc-quyen' &&
                <div className='text-center font-light text-xs'>
                    <p className='mt-5 mb-3.5 font-medium text-base'>Hãy là người đầu tiên được biết</p>
                    <p className='my-2'>Nhiều hoạt động hợp tác cùng các thương hiệu danh tiếng và chương trình khuyến mại hấp</p>
                    <p className='my-2'>dẫn chỉ dành riêng cho khách hàng của namperfume</p>

                    <div className='flex justify-center items-center mt-10 gap-2 hover:text-red-500 cursor-pointer'>
                        <p className='text-xs '>TÌM HIỂU THÊM</p>
                        <FaLongArrowAltRight className='text-gray-700' />
                    </div>
                </div>
            }

            {select2 === 'giao-dich-an-toan-uy-tin' &&
                <div className='text-center font-light text-xs'>
                    <p className='mt-5 mb-3.5 font-medium text-base'>Phương thức thanh toán linh hoạt</p>
                    <p className='my-2'>Giao dịch mua sắm tại namperfume luôn được đảm bảo an toàn về bảo mật thông tin, thuận</p>
                    <p className='my-2'>tiện và uy tín về phương thức thanh toán</p>
                    <p className='my-2'>namperufme chấp nhận thanh toán bằng tiền mặt, chuyển khoản, các loại thẻ ATM, VISA,</p>
                    <p className='my-2'>Master Card</p>

                    <div className='flex justify-center items-center mt-10 gap-2 hover:text-red-500 cursor-pointer'>
                        <p className='text-xs '>TÌM HIỂU THÊM</p>
                        <FaLongArrowAltRight className='text-gray-700' />
                    </div>
                </div>
            }
        </div>
    )
}

export default About