import { Link, useParams } from 'react-router-dom'
import menu_hover_nam_1 from '../assets/menu_hover_nam_1.png'
import menu_hover_nam_2 from '../assets/menu_hover_nam_2.png'
import menu_hover_nam_3 from '../assets/menu_hover_nam_3.png'
import menu_hover_nu_1 from '../assets/menu_hover_nu_1.png'
import menu_hover_nu_2 from '../assets/menu_hover_nu_2.png'
import menu_hover_nu_3 from '../assets/menu_hover_nu_3.png'
import menu_hover_mini_1 from '../assets/menu_hover_mini_1.png'
import menu_hover_mini_2 from '../assets/menu_hover_mini_2.png'
import menu_hover_mini_3 from '../assets/menu_hover_mini_3.png'
import menu_hover_giftset_1 from '../assets/menu_hover_giftset_1.png'
import menu_hover_giftset_2 from '../assets/menu_hover_giftset_2.png'
import menu_hover_giftset_3 from '../assets/menu_hover_giftset_3.png'
import menu_hover_bodyhomecare_1 from '../assets/menu_hover_bodyhomecare_1.png'
import menu_hover_bodyhomecare_2 from '../assets/menu_hover_bodyhomecare_2.png'
import menu_hover_bodyhomecare_3 from '../assets/menu_hover_bodyhomecare_3.png'

const Navbar = () => {

    const { catalog } = useParams()

    return (
        <div className='mt-1.5 sm:mt-3 px-3.5 sm:px-7  overflow-x-scroll overflow-y-hidden'>
            <div className='flex justify-start gap-3 lg:gap-8 xl:gap-12 whitespace-nowrap'>
                <Link
                    to='/'
                    className='xl:text-lg text-red-600 font-bold py-1 mx-1.5'
                    onClick={() => scrollTo(0, 1000)}
                >
                    Brand Of The Year
                </Link>

                <Link
                    to="/nuoc-hoa-nam"
                    className={`font-medium hover:text-rose-600 group py-1 pt-1 pb-5 mx-1.5 ${catalog === 'nuoc-hoa-nam' ? 'text-red-500' : ''}`}
                >
                    Nước Hoa Nam
                    <hr className={`${catalog === 'nuoc-hoa-nam' ? 'block' : 'hidden'} border-red-500`} />

                    <div className='absolute top-40 left-0 z-40 px-3.5 text-black sm:px-7 w-full hidden group-hover:flex'>
                        <div className='w-full bg-stone-100 rounded-md justify-between p-3 hidden sm:flex'>
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

                                <Link to='/' className='mt-3 mb-1.5 text-gray-400 hover:text-gray-500'>Xem tất cả</Link>
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
                    className={`font-medium hover:text-rose-600 group py-1 pt-1 pb-5 mx-1.5 ${catalog === 'nuoc-hoa-nu' ? 'text-red-500' : ''}`}
                >
                    Nước Hoa Nữ
                    <hr className={`${catalog === 'nuoc-hoa-nu' ? 'block' : 'hidden'} border-red-500`} />

                    <div className='absolute top-40 left-0 z-50 px-3.5 text-black sm:px-7 w-full hidden group-hover:flex'>
                        <div className='w-full bg-stone-100 rounded-md justify-between p-3 hidden sm:flex'>
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

                                <Link to='/' className='mt-3 mb-1.5 text-gray-400 hover:text-gray-500'>Xem tất cả</Link>
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
                    className={`font-medium hover:text-rose-600 group py-1 pt-1 pb-5 mx-1.5 ${catalog === 'nuoc-hoa-mini' ? 'text-red-500' : ''}`}
                >
                    Nước Hoa Mini
                    <hr className={`${catalog === 'nuoc-hoa-mini' ? 'block' : 'hidden'} border-red-500`} />

                    <div className='absolute top-40 left-0 z-50 px-3.5 text-black sm:px-7 w-full hidden group-hover:flex'>
                        <div className='w-full bg-stone-100 rounded-md justify-between p-3 hidden sm:flex'>
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

                                <Link to='/' className='mt-3 mb-1.5 text-gray-400 hover:text-gray-500'>Xem tất cả</Link>
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
                    className={`font-medium hover:text-rose-600 group py-1 pt-1 pb-5 mx-1.5 ${catalog === 'giftset' ? 'text-red-500' : ''}`}
                >
                    Giftset
                    <hr className={`${catalog === 'giftset' ? 'block' : 'hidden'} border-red-500`} />

                    <div className='absolute top-40 left-0 z-50 px-3.5 text-black sm:px-7 w-full hidden group-hover:flex'>
                        <div className='w-full bg-stone-100 rounded-md justify-between p-3 hidden sm:flex'>
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
                    to="/bodycare&homecare"
                    className={`font-medium hover:text-rose-600 group py-1 pt-1 pb-5 mx-1.5 ${catalog === 'bodycare&homecare' ? 'text-red-500' : ''}`}
                >
                    Bodycare & Homecare
                    <hr className={`${catalog === 'bodycare&homecare' ? 'block' : 'hidden'} border-red-500`} />

                    <div className='absolute top-40 left-0 z-50 px-3.5 text-black sm:px-7 w-full hidden group-hover:flex'>
                        <div className='w-full bg-stone-100 rounded-md justify-between p-3 hidden sm:flex'>
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