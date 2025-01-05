import React, { useContext } from 'react'
import { AiOutlineMenu } from "react-icons/ai";
import wishlist_icon from '../assets/wishlist.jpg'
import { RiFileList3Line } from "react-icons/ri";
import { AppContext } from '../context/Context';
import { Link, useNavigate } from 'react-router-dom';
import { MdDeleteForever } from 'react-icons/md';
import { FaRegWindowClose } from 'react-icons/fa';

type Props = {
    setShow: React.Dispatch<React.SetStateAction<boolean>>
    show: boolean
}

const WishList = ({ setShow, show }: Props) => {

    const { wishlist, formatMoney, wishlistProduct } = useContext(AppContext)

    const navigate = useNavigate()

    return (
        <div className='flex flex-col gap-3 w-full bg-gray-100 px-3 py-3 shadow-md'>
            <div
                className='flex md:hidden items-center gap-3 mb-3 cursor-pointer'
                onClick={() => setShow(!show)}
            >
                {show ?
                    <FaRegWindowClose className='text-gray-700' />
                    : <AiOutlineMenu className='text-gray-700' />
                }
                <p>Menu</p>
            </div>
            {wishlist?.length != 0 ?
                <div className=' mt-3 flex flex-col gap-1.5'>
                    <div className='flex gap-3.5 items-center'>
                        <RiFileList3Line className='text-3xl text-gray-600' />
                        <p className='text-xl font-semibold'>Danh sách yêu thích của bạn</p>
                    </div>
                    <div className='mt-3.5 flex lg:grid lg:grid-cols-[50%_13%_17%_13%_7%] lg:justify-center bg-gray-200 shadow-md px-3 py-2'>
                        <p className='text-lg font-semibold'>Tất cả ({wishlist.length} sản phẩm)</p>
                        <p className='text-lg font-semibold text-center hidden lg:block'>Thương hiệu</p>
                        <p className='text-lg font-semibold text-center hidden lg:block'>Loại</p>
                        <p className='text-lg font-semibold text-center hidden lg:block'>Giá tiền</p>
                    </div>

                    {wishlist?.map((i: any, index: number) => (
                        <div key={index} className='mt-3.5 flex lg:grid items-center text-center lg:grid-cols-[50%_13%_17%_13%_7%] px-3 py-2'>
                            <div className='flex gap-5 items-center'>
                                <img onClick={() => navigate(`/product/${i?._id}`)} src={i?.image} className='w-28 cursor-pointer ' alt="" />
                                <p className='lg:block hidden'>{i?.name}</p>
                                <div className='lg:hidden flex flex-col gap-2 text-[13px]'>
                                    <p className='text-start'>{i?.name}</p>
                                    <div className='flex gap-3.5 items-center'>
                                        <p className=''>{formatMoney(i?.newPrice)} vnd</p>
                                        <MdDeleteForever
                                            className='text-gray-700 text-2xl cursor-pointer'
                                            onClick={() => wishlistProduct(i?._id)}
                                        />
                                    </div>
                                </div>
                            </div>
                            <p className='lg:block hidden font-semibold'>{i?.brand}</p>
                            <p className='lg:block hidden'>{i?.type}</p>
                            <p className='lg:block hidden'>{formatMoney(i?.newPrice)} vnd</p>
                            <MdDeleteForever
                                className='text-gray-700 text-2xl cursor-pointer lg:block hidden'
                                onClick={() => wishlistProduct(i?._id)}
                            />
                        </div>
                    ))}
                </div>
                : <div className='mt-3 flex md:flex-row flex-col gap-3.5'>
                    <div
                        className='flex md:hidden items-center gap-3 mb-3 cursor-pointer'
                        onClick={() => setShow(!show)}
                    >
                        <AiOutlineMenu />
                        <p>Menu</p>
                    </div>
                    <img src={wishlist_icon} className='size-72' alt="" />
                    <div className='flex flex-col'>
                        <p className='text-2xl font-bold mb-3.5'>Danh sách của bạn đang rỗng!</p>
                        <p>Thật tiếc! Có thể bạn đang thích món đồ nào đó.</p>
                        <p>Có rất nhiều món đồ tuyệt vời đang đợi bạn khám phá.</p>
                        <p>Nhấn <Link onClick={() => scrollTo(0, 0)} to='/' className='font-bold hover:underline'>vào đây</Link> để tiếp tục khám phá những món đồ tuyệt vời.</p>
                    </div>
                </div>
            }
        </div>
    )
}

export default WishList
