import React, { useContext } from 'react'
import { Link } from 'react-router-dom'
import { AppContext } from '../context/Context'
import menu_hover_nam_1 from '../assets/menu_hover_nam_1.png'
import menu_hover_nam_2 from '../assets/menu_hover_nam_2.png'
import menu_hover_nam_3 from '../assets/menu_hover_nam_3.png'
import menu_hover_nu_1 from '../assets/menu_hover_nu_1.png'
import menu_hover_nu_2 from '../assets/menu_hover_nu_2.png'
import menu_hover_nu_3 from '../assets/menu_hover_nu_3.png'
import menu_hover_mini_1 from '../assets/menu_hover_mini_1.png'
import menu_hover_mini_2 from '../assets/menu_hover_mini_2.png'
import menu_hover_mini_3 from '../assets/menu_hover_mini_3.png'
import menu_hover_brand_1 from '../assets/menu_hover_brand_1.png'
import menu_hover_brand_2 from '../assets/menu_hover_brand_2.png'
import menu_hover_brand_3 from '../assets/menu_hover_brand_3.png'
import menu_hover_giftset_1 from '../assets/menu_hover_giftset_1.png'
import menu_hover_giftset_2 from '../assets/menu_hover_giftset_2.png'
import menu_hover_giftset_3 from '../assets/menu_hover_giftset_3.png'
import menu_hover_bodyhomecare_1 from '../assets/menu_hover_bodyhomecare_1.png'
import menu_hover_bodyhomecare_2 from '../assets/menu_hover_bodyhomecare_2.png'
import menu_hover_bodyhomecare_3 from '../assets/menu_hover_bodyhomecare_3.png'

const Navbar = () => {

    const { navbar, setNavbar } = useContext(AppContext)

    return (
        <div className='mt-5 px-3.5 sm:px-7 overflow-x-scroll overflow-y-hidden'>
            <div className='flex justify-start gap-3 lg:gap-7 whitespace-nowrap space-x-4'>
                <Link
                    to='/brand-of-the-year'
                    className='text-sm text-red-600 font-bold'
                    onClick={() => setNavbar('brand-of-the-year')}
                >
                    Brand Of The Year
                    <hr className={`${navbar === 'brand-of-the-year' ? 'block' : 'hidden'} border-red-500`} />
                </Link>

                <Link
                    to="/nuoc-hoa-nam"
                    className={`text-sm hover:text-rose-600 group ${navbar === 'nuoc-hoa-nam' ? 'text-red-500' : ''}`}
                    onClick={() => setNavbar('nuoc-hoa-nam')}
                >
                    Nước Hoa Nam
                    <hr className={`${navbar === 'nuoc-hoa-nam' ? 'block' : 'hidden'} border-red-500`} />

                    <div className='absolute top-32 -left-4 z-50 pt-7 px-3.5 text-black sm:px-7 w-full hidden group-hover:flex'>
                        <div className='w-full bg-stone-100 justify-between p-3 hidden sm:flex'>
                            <div className='flex flex-col text-xs'>
                                <p className='font-semibold text-sm mb-3.5'>Phân loại</p>
                                <p className='my-1.5 hover:text-rose-500'>Mới nhất</p>
                                <p className='my-1.5 hover:text-rose-500'>Yêu thích nhất</p>
                                <p className='my-1.5 hover:text-rose-500'>Giftset</p>
                                <p className='my-1.5 hover:text-rose-500'>Nước Hoa Unisex</p>
                                <p className='my-1.5 hover:text-rose-500'>Nước Hoa Mini</p>
                            </div>

                            <div className='flex flex-col text-xs'>
                                <p className='font-semibold text-sm mb-3.5'>Thương Hiệu</p>

                                <div className='flex gap-7'>
                                    <div className='flex flex-col'>
                                        <p className='my-1.5 hover:text-rose-500'>Gucci</p>
                                        <p className='my-1.5 hover:text-rose-500'>Narciso</p>
                                        <p className='my-1.5 hover:text-rose-500'>Rodriguez</p>
                                        <p className='my-1.5 hover:text-rose-500'>Burberry</p>
                                        <p className='my-1.5 hover:text-rose-500'>Versace</p>
                                    </div>

                                    <div className='flex flex-col'>
                                        <p className='my-1.5 hover:text-rose-500'>Christian Dior</p>
                                        <p className='my-1.5 hover:text-rose-500'>Hugo Boss</p>
                                        <p className='my-1.5 hover:text-rose-500'>Jean Paul</p>
                                        <p className='my-1.5 hover:text-rose-500'>Gaultier</p>
                                    </div>
                                </div>

                                <Link className='mt-3 mb-1.5 text-gray-400 hover:text-gray-500'>Xem tất cả</Link>
                            </div>

                            <div className='flex gap-3 xl:gap-10'>
                                <img src={menu_hover_nam_1} className='h-24 md:h-28 lg:h-40 hover:scale-105 transition-all duration-500' alt="" />
                                <img src={menu_hover_nam_2} className='h-24 md:h-28  lg:h-40 hover:scale-105 transition-all duration-500' alt="" />
                                <img src={menu_hover_nam_3} className='h-24 md:h-28  lg:h-40 hover:scale-105 transition-all duration-500' alt="" />
                            </div>
                        </div>
                    </div>
                </Link>

                <Link
                    to="/nuoc-hoa-nu"
                    className={`text-sm hover:text-rose-600 group ${navbar === 'nuoc-hoa-nu' ? 'text-red-500' : ''}`}
                    onClick={() => setNavbar('nuoc-hoa-nu')}
                >
                    Nước Hoa Nữ
                    <hr className={`${navbar === 'nuoc-hoa-nu' ? 'block' : 'hidden'} border-red-500`} />

                    <div className='absolute top-32 -left-4 z-50 pt-7 px-3.5 text-black sm:px-7 w-full hidden group-hover:flex'>
                        <div className='w-full bg-stone-100 justify-between p-3 hidden sm:flex'>
                            <div className='flex flex-col text-xs'>
                                <p className='font-semibold text-sm mb-3.5'>Phân loại</p>
                                <p className='my-1.5 hover:text-rose-500'>Mới nhất</p>
                                <p className='my-1.5 hover:text-rose-500'>Yêu thích nhất</p>
                                <p className='my-1.5 hover:text-rose-500'>Giftset</p>
                                <p className='my-1.5 hover:text-rose-500'>Nước Hoa Unisex</p>
                                <p className='my-1.5 hover:text-rose-500'>Nước Hoa Mini</p>
                            </div>

                            <div className='flex flex-col text-xs'>
                                <p className='font-semibold text-sm mb-3.5'>Thương Hiệu</p>

                                <div className='flex gap-7'>
                                    <div className='flex flex-col'>
                                        <p className='my-1.5 hover:text-rose-500'>Gucci</p>
                                        <p className='my-1.5 hover:text-rose-500'>Narciso</p>
                                        <p className='my-1.5 hover:text-rose-500'>Rodriguez</p>
                                        <p className='my-1.5 hover:text-rose-500'>Burberry</p>
                                        <p className='my-1.5 hover:text-rose-500'>Versace</p>
                                    </div>

                                    <div className='flex flex-col'>
                                        <p className='my-1.5 hover:text-rose-500'>Christian Dior</p>
                                        <p className='my-1.5 hover:text-rose-500'>Hugo Boss</p>
                                        <p className='my-1.5 hover:text-rose-500'>Jean Paul</p>
                                        <p className='my-1.5 hover:text-rose-500'>Gaultier</p>
                                    </div>
                                </div>

                                <Link className='mt-3 mb-1.5 text-gray-400 hover:text-gray-500'>Xem tất cả</Link>
                            </div>

                            <div className='flex gap-3 xl:gap-10'>
                                <img src={menu_hover_nu_1} className='h-24 md:h-28 lg:h-40 hover:scale-105 transition-all duration-500' alt="" />
                                <img src={menu_hover_nu_2} className='h-24 md:h-28  lg:h-40 hover:scale-105 transition-all duration-500' alt="" />
                                <img src={menu_hover_nu_3} className='h-24 md:h-28  lg:h-40 hover:scale-105 transition-all duration-500' alt="" />
                            </div>
                        </div>
                    </div>
                </Link>

                <Link
                    to="/nuoc-hoa-mini"
                    className={`text-sm hover:text-rose-600 group ${navbar === 'nuoc-hoa-mini' ? 'text-red-500' : ''}`}
                    onClick={() => setNavbar('nuoc-hoa-mini')}
                >
                    Nước Hoa Mini
                    <hr className={`${navbar === 'nuoc-hoa-mini' ? 'block' : 'hidden'} border-red-500`} />

                    <div className='absolute top-32 -left-4 z-50 pt-7 px-3.5 text-black sm:px-7 w-full hidden group-hover:flex'>
                        <div className='w-full bg-stone-100 justify-between p-3 hidden sm:flex'>
                            <div className='flex flex-col text-xs'>
                                <p className='font-semibold text-sm mb-3.5'>Phân loại</p>
                                <p className='my-1.5 hover:text-rose-500'>Mới nhất</p>
                                <p className='my-1.5 hover:text-rose-500'>Yêu thích nhất</p>
                                <p className='my-1.5 hover:text-rose-500'>Giftset</p>
                                <p className='my-1.5 hover:text-rose-500'>Nước Hoa Unisex</p>
                                <p className='my-1.5 hover:text-rose-500'>Nước Hoa Mini</p>
                            </div>

                            <div className='flex flex-col text-xs'>
                                <p className='font-semibold text-sm mb-3.5'>Thương Hiệu</p>

                                <div className='flex gap-7'>
                                    <div className='flex flex-col'>
                                        <p className='my-1.5 hover:text-rose-500'>Gucci</p>
                                        <p className='my-1.5 hover:text-rose-500'>Narciso</p>
                                        <p className='my-1.5 hover:text-rose-500'>Rodriguez</p>
                                        <p className='my-1.5 hover:text-rose-500'>Burberry</p>
                                        <p className='my-1.5 hover:text-rose-500'>Versace</p>
                                    </div>

                                    <div className='flex flex-col'>
                                        <p className='my-1.5 hover:text-rose-500'>Christian Dior</p>
                                        <p className='my-1.5 hover:text-rose-500'>Hugo Boss</p>
                                        <p className='my-1.5 hover:text-rose-500'>Jean Paul</p>
                                        <p className='my-1.5 hover:text-rose-500'>Gaultier</p>
                                    </div>
                                </div>

                                <Link className='mt-3 mb-1.5 text-gray-400 hover:text-gray-500'>Xem tất cả</Link>
                            </div>

                            <div className='flex gap-3 xl:gap-10'>
                                <img src={menu_hover_mini_1} className='h-24 md:h-28 lg:h-40 hover:scale-105 transition-all duration-500' alt="" />
                                <img src={menu_hover_mini_2} className='h-24 md:h-28  lg:h-40 hover:scale-105 transition-all duration-500' alt="" />
                                <img src={menu_hover_mini_3} className='h-24 md:h-28  lg:h-40 hover:scale-105 transition-all duration-500' alt="" />
                            </div>
                        </div>
                    </div>
                </Link>

                <Link
                    to="/giftset"
                    className={`text-sm hover:text-rose-600 group ${navbar === 'giftset' ? 'text-red-500' : ''}`}
                    onClick={() => setNavbar('giftset')}
                >
                    Giftset
                    <hr className={`${navbar === 'giftset' ? 'block' : 'hidden'} border-red-500`} />

                    <div className='absolute top-32 -left-4 z-50 pt-7 px-3.5 text-black sm:px-7 w-full hidden group-hover:flex'>
                        <div className='w-full bg-stone-100 justify-between p-3 hidden sm:flex'>
                            <div className='flex flex-col text-xs'>
                                <p className='font-semibold text-sm mb-3.5'>Phân loại</p>
                                <p className='my-1.5 hover:text-rose-500'>Gift set nước hoa nam</p>
                                <p className='my-1.5 hover:text-rose-500'>Gift set nước hoa nữ</p>
                                <p className='my-1.5 hover:text-rose-500'>Gift set nước hoa mini</p>
                            </div>

                            <div className='flex flex-col text-xs'>
                                <p className='font-semibold text-sm mb-3.5'>Mức giá</p>
                                <div className='flex flex-col'>
                                    <p className='my-1.5 hover:text-rose-500'>Dưới 1 triệu</p>
                                    <p className='my-1.5 hover:text-rose-500'>Dưới 2 triệu</p>
                                    <p className='my-1.5 hover:text-rose-500'>Trên 2 triệu</p>
                                </div>
                            </div>

                            <div className='flex gap-3 xl:gap-10'>
                                <img src={menu_hover_giftset_1} className='h-24 md:h-28 lg:h-40 hover:scale-105 transition-all duration-500' alt="" />
                                <img src={menu_hover_giftset_2} className='h-24 md:h-28  lg:h-40 hover:scale-105 transition-all duration-500' alt="" />
                                <img src={menu_hover_giftset_3} className='h-24 md:h-28  lg:h-40 hover:scale-105 transition-all duration-500' alt="" />
                            </div>
                        </div>
                    </div>
                </Link>

                <Link
                    to="/thuong-hieu"
                    className={`text-sm hover:text-rose-600 group ${navbar === 'thuong-hieu' ? 'text-red-500' : ''}`}
                    onClick={() => setNavbar('thuong-hieu')}
                >
                    Thương Hiệu
                    <hr className={`${navbar === 'thuong-hieu' ? 'block' : 'hidden'} border-red-500`} />

                    <div className='absolute top-32 -left-4 z-50 pt-7 px-3.5 text-black sm:px-7 w-full hidden group-hover:flex'>
                        <div className='w-full bg-stone-100 justify-between p-3 hidden sm:flex'>
                            <div className='flex flex-col text-xs'>
                                <p className='font-semibold text-sm mb-3.5'>Thương Hiệu Mới</p>
                                <p className='my-1.5 hover:text-rose-500'>Maison Margiela</p>
                                <p className='my-1.5 hover:text-rose-500'>Kilian</p>
                                <p className='my-1.5 hover:text-rose-500'>Mancera</p>
                                <p className='my-1.5 hover:text-rose-500'>Parfums De Marly</p>
                                <p className='my-1.5 hover:text-rose-500'>Creed</p>
                            </div>

                            <div className='flex flex-col text-xs'>
                                <p className='font-semibold text-sm mb-3.5'>Thương Hiệu</p>

                                <div className='flex gap-7'>
                                    <div className='flex flex-col'>
                                        <p className='my-1.5 hover:text-rose-500'>Gucci</p>
                                        <p className='my-1.5 hover:text-rose-500'>Narciso</p>
                                        <p className='my-1.5 hover:text-rose-500'>Rodriguez</p>
                                        <p className='my-1.5 hover:text-rose-500'>Burberry</p>
                                        <p className='my-1.5 hover:text-rose-500'>Versace</p>
                                    </div>

                                    <div className='flex flex-col'>
                                        <p className='my-1.5 hover:text-rose-500'>Christian Dior</p>
                                        <p className='my-1.5 hover:text-rose-500'>Hugo Boss</p>
                                        <p className='my-1.5 hover:text-rose-500'>Jean Paul</p>
                                        <p className='my-1.5 hover:text-rose-500'>Gaultier</p>
                                    </div>
                                </div>

                                <Link className='mt-3 mb-1.5 text-gray-400 hover:text-gray-500'>Xem tất cả</Link>
                            </div>

                            <div className='flex gap-3 xl:gap-10'>
                                <img src={menu_hover_brand_1} className='h-24 md:h-28 lg:h-40 hover:scale-105 transition-all duration-500' alt="" />
                                <img src={menu_hover_brand_2} className='h-24 md:h-28  lg:h-40 hover:scale-105 transition-all duration-500' alt="" />
                                <img src={menu_hover_brand_3} className='h-24 md:h-28  lg:h-40 hover:scale-105 transition-all duration-500' alt="" />
                            </div>
                        </div>
                    </div>
                </Link>

                <Link
                    to="/bodycare&homecare"
                    className={`text-sm hover:text-rose-600 group ${navbar === 'bodycare&homecare' ? 'text-red-500' : ''}`}
                    onClick={() => setNavbar('bodycare&homecare')}
                >
                    Bodycare & Homecare
                    <hr className={`${navbar === 'bodycare&homecare' ? 'block' : 'hidden'} border-red-500`} />

                    <div className='absolute top-32 -left-4 z-50 pt-7 px-3.5 text-black sm:px-7 w-full hidden group-hover:flex'>
                        <div className='w-full bg-stone-100 justify-between p-3 hidden sm:flex'>
                            <div className='flex flex-col text-xs'>
                                <p className='font-semibold text-sm mb-3.5'>Phân Loại</p>
                                <p className='my-1.5 hover:text-rose-500'>Chăm sóc tóc</p>
                                <p className='my-1.5 hover:text-rose-500'>Chăm sóc da</p>
                                <p className='my-1.5 hover:text-rose-500'>Tinh dầu nước hoa</p>
                                <p className='my-1.5 hover:text-rose-500'>Lăn khử mùi</p>
                                <p className='my-1.5 hover:text-rose-500'>Thực phẩm chức năng</p>
                                <p className='my-1.5 hover:text-rose-500'>Quà Tặng</p>
                                <p className='my-1.5 hover:text-rose-500'>Hộp quà</p>
                            </div>

                            <div className='flex gap-3 xl:gap-10'>
                                <img src={menu_hover_bodyhomecare_1} className='h-24 md:h-28 lg:h-40 hover:scale-105 transition-all duration-500' alt="" />
                                <img src={menu_hover_bodyhomecare_2} className='h-24 md:h-28  lg:h-40 hover:scale-105 transition-all duration-500' alt="" />
                                <img src={menu_hover_bodyhomecare_3} className='h-24 md:h-28  lg:h-40 hover:scale-105 transition-all duration-500' alt="" />
                            </div>
                        </div>
                    </div>
                </Link>
            </div>
        </div>
    )
}

export default Navbar