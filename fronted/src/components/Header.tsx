import React, { useContext } from 'react'
import { FiBell } from "react-icons/fi";
import { IoIosSearch } from "react-icons/io";
import { TiDeleteOutline } from "react-icons/ti";
import { AiTwotoneShop } from "react-icons/ai";
import { RiArticleLine } from "react-icons/ri";
import { FaRegUser } from "react-icons/fa";
import { FaRegHeart } from "react-icons/fa";
import { RiShoppingCartLine } from "react-icons/ri";
import cong_dong_nuoc_hoa from '../assets/cong-dong-nuoc-hoa.png'
import xu_huong_nuoc_hoa from '../assets/xu-huong-nuoc-hoa.png'
import goc_review from '../assets/goc-review.png'
import feedbacks_instore from '../assets/feedbacks-instore.png'
import { FaFacebook } from "react-icons/fa";
import { Link, useNavigate } from 'react-router-dom';
import { AppContext } from '../context/Context';
import GoogleLoginForm from './GoogleLogin';

const Header = () => {

    const { setNavbar, token, setToken, userData, cart, setSidebar, wishlist } = useContext(AppContext)

    const navigate = useNavigate()

    const logout = (): void => {
        setToken(false)
        localStorage.removeItem('token')
    }

    return (
        <div className=''>
            <div className='bg-red-500 text-white py-1 hidden sm:block'>
                <p className='text-center text-sm'>Thương hiệu nước hoa được feedback nhiều nhất Việt Nam</p>
            </div>

            <div className='flex flex-col mt-1.5 sm:mt-3 px-3.5 sm:px-7'>

                <div className='flex justify-between text-sm'>
                    <p className='hidden sm:block'>Thương hiệu nước hoa uy tín từ 2013</p>
                    <div className='items-center gap-2 relative hidden sm:flex '>
                        <p>Thông báo mới</p>
                        <FiBell className='text-xl text-gray-700' />
                        <div className='absolute -right-2 -top-2 px-[7px] rounded-full bg-red-500 text-[10px] text-white'>
                            5
                        </div>
                    </div>
                </div>

                <div className='flex justify-between mt-0 sm:mt-3.5'>
                    <div className='items-center gap-2 relative flex sm:hidden'>
                        <IoIosSearch className='text-2xl text-gray-600' />
                        {token ?
                            <img onClick={() => navigate('/my-profile')} src={userData?.image} className='lg:size-10 size-7 rounded-full' alt="" />
                            : <FaRegUser onClick={() => navigate('/login')} />
                        }
                    </div>
                    <Link
                        to='/'
                        className='text-red-500 text-2xl md:text-3xl font-medium cursor-pointer'
                        onClick={() => setNavbar('/')}
                    >
                        namperfume
                    </Link>
                    <div className='hidden sm:flex items-center border border-gray-300 rounded-md w-72 h-9 hover:border-gray-500'>
                        <IoIosSearch className='text-2xl text-gray-600 mx-2' />
                        <input type="text" className='w-full focus:outline-none pr-2.5' />
                        <TiDeleteOutline className='mr-2 text-gray-500 text-xl' />
                    </div>

                    <div className='hidden sm:flex items-center gap-1.5 text-gray-700  cursor-pointer'>
                        <AiTwotoneShop />
                        <p className='hidden lg:block hover:text-red-500'>8 cửa hàng toàn quốc</p>
                    </div>

                    <div className='hidden sm:flex items-center gap-1.5 text-gray-700 cursor-pointer relative group'>
                        <RiArticleLine />
                        <p className='group-hover:text-red-500 hidden lg:block'>Nmagazine</p>

                        <div className='absolute z-50 pt-8 top-2.5 -left-20 lf lg:-left-3.5 hidden group-hover:flex'>
                            <div className='border border-gray-300 rounded-md bg-white w-max px-3.5 py-3.5 flex flex-col gap-3.5'>
                                <div className='flex items-center gap-3 border-b pb-2 cursor-pointer group/item'>
                                    <img src={cong_dong_nuoc_hoa} className='w-11' alt="" />
                                    <div className='flex flex-col '>
                                        <p className='text-sm font-medium'>Cộng Đồng Nước Hoa</p>
                                        <p className='text-xs font-extralight group-hover/item:text-red-500'>Thảo luận</p>
                                    </div>
                                </div>
                                <div className='flex items-center gap-3 border-b pb-2 cursor-pointer group/item'>
                                    <img src={xu_huong_nuoc_hoa} className='w-11' alt="" />
                                    <div className='fleconsole.log()x flex-col'>
                                        <p className='text-sm font-medium'>Xu Hướng Nước Hoa </p>
                                        <p className='text-xs font-extralight group-hover/item:text-red-500'>Tham gia</p>
                                    </div>
                                </div>
                                <div className='flex items-center gap-3  border-b pb-2 cursor-pointer group/item'>
                                    <img src={goc_review} className='w-11' alt="" />
                                    <div className='flex flex-col'>
                                        <p className='text-sm font-medium'>Góc Review</p>
                                        <p className='text-xs font-extralight group-hover/item:text-red-500'>Thảo luận</p>
                                    </div>
                                </div>
                                <div className='flex items-center gap-3 cursor-pointer group/item'>
                                    <img src={feedbacks_instore} className='w-11' alt="" />
                                    <div className='flex flex-col'>
                                        <p className='text-sm font-medium'>Feedbacks & Instore</p>
                                        <p className='text-xs font-extralight group-hover/item:text-red-500'>Xem ngay</p>
                                    </div>
                                </div>

                            </div>
                        </div>
                    </div>

                    {token ?
                        <div className='hidden sm:flex items-center gap-2  cursor-pointer relative group'>
                            <img src={userData?.image} className='lg:size-10 size-7 rounded-full' alt="" />
                            <Link
                                to='/my-profile'
                                className='capitalize group-hover:text-red-500 font-medium hidden lg:block'
                            >
                                {`${userData?.lastName} ${userData?.firstName}`}
                            </Link>

                            <div className='absolute z-50 pt-8 top-3.5 -right-3.5 hidden group-hover:flex'>
                                <div className='border border-gray-300 rounded-md bg-white w-max px-7 py-3.5 flex flex-col gap-3.5'>
                                    <Link to='/my-profile' className='group/item'>
                                        <p className=' group-hover/item:text-red-500'>Tài khoản của tôi</p>
                                    </Link>
                                    <div className='group/item'>
                                        <p onClick={logout} className=' group-hover/item:text-red-500'>Đăng xuất</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                        : <div className='hidden sm:flex items-center gap-1.5 text-gray-700 cursor-pointer relative group '>
                            <FaRegUser />
                            <p className='group-hover:text-red-500 hidden lg:block'>Đăng nhập</p>

                            <div className='absolute z-50 pt-8 top-2.5 -right-3.5 hidden group-hover:flex'>
                                <div className='border border-gray-300 rounded-md bg-white w-max px-3.5 py-3.5 flex flex-col gap-3.5'>
                                    <div className='flex items-center gap-5'>
                                        <FaRegUser className='text-2xl' />
                                        <div className='flex flex-col'>
                                            <p className='font-semibold'>Chào bạn,</p>
                                            <p className='text-xs font-light'>Đăng nhập để tham gia với chúng tôi</p>
                                        </div>
                                    </div>
                                    <div className='flex text-xs font-bold justify-between text-center border-b pb-5'>
                                        <Link to='/login' className='border border-gray-300 px-3.5 py-1 w-28 cursor-pointer hover:bg-red-500 hover:text-white'>
                                            Đăng nhập
                                        </Link>
                                        <Link to='/register' className='border border-gray-300 px-3.5 py-1 w-28 cursor-pointer hover:bg-red-500 hover:text-white'>
                                            Đăng ký
                                        </Link>
                                    </div>
                                    <div className='text-sm font-bold flex flex-col'>
                                        <p className='text-center mb-3.5'>Hoặc Đăng Nhập Với</p>
                                        <GoogleLoginForm />
                                        <div className='flex w-full hover:text-red-500 cursor-pointer group/item'>
                                            <div className='flex border border-gray-300 text-center mt-3.5 px-2 py-1 group-hover/item:border-red-500'>
                                                <FaFacebook className='text-2xl text-blue-500' />
                                            </div>
                                            <div className='flex w-full font-light  border border-gray-300 text-center mt-3.5 px-2 py-1 group-hover/item:border-red-500'>
                                                Đăng Nhập Với Facebook
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    }

                    <div className='flex items-center gap-7 text-gray-700'>
                        <Link
                            to='/my-profile'
                            onClick={() => setSidebar('Danh sách yêu thích')}
                            className='relative cursor-pointer group'
                        >
                            <FaRegHeart />
                            <div className='absolute -right-3 -top-2 px-1.5  py-0.5 rounded-full bg-red-500 text-[10px] text-white text-center'>
                                {wishlist.length}
                            </div>
                            <div className='absolute z-50 pt-8 top-2.5 -right-3 hidden group-hover:flex'>
                                <div className='border border-gray-300 rounded-md bg-white text-sm w-max px-3.5 py-2.5 flex flex-col gap-3.5'>
                                    Danh sách yêu thích của bạn
                                </div>
                            </div>
                        </Link>
                        <Link
                            to='/my-profile'
                            onClick={() => setSidebar('Giỏ hàng của tôi')}
                            className='relative cursor-pointer group'
                        >
                            <RiShoppingCartLine className='' />
                            <div className='absolute -right-3 -top-2 px-1.5  py-0.5 rounded-full bg-red-500 text-[10px] text-white text-center'>
                                {cart.length}
                            </div>
                            <div className='absolute z-50 pt-8 top-2.5 -right-3.5 hidden group-hover:flex'>
                                {cart.length != 0 ?
                                    <div className='flex flex-col border border-gray-300 rounded-md bg-white gap-3 '>
                                        {cart.map((i: any, index: number) => (
                                            <div key={index} className='flex items-center gap-3.5 text-xs w-72 px-3.5 py-2.5 border-b'>
                                                <img src={i.product.image} className='size-12  ' alt="" />
                                                <p>{i.product.name}</p>
                                            </div>
                                        ))}
                                    </div>
                                    : <div className='border border-gray-300 rounded-md bg-white text-sm w-max px-3.5 py-2.5 flex flex-col gap-3.5'>
                                        Chưa có sản phẩm nào trong giỏ hàng!
                                    </div>}
                            </div>
                        </Link>
                    </div>
                </div>
            </div>
        </div >
    )
}

export default Header