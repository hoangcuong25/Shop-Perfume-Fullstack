/* eslint-disable @typescript-eslint/no-explicit-any */
import { useContext } from 'react'
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import HeroBanner from '../assets/banner.js';
import banner_brand from '../assets/banner_brand.js';
import logo_brand from '../assets/logo_brand.js';
import { FaRegHeart } from "react-icons/fa";
import { FaHeart } from "react-icons/fa";
import { IoIosArrowDropright } from "react-icons/io";
import for_him from '../assets/for_him.png'
import for_her from '../assets/for_her.png'
import sale from '../assets/sale.png'
import new_in from '../assets/new_in.png'
import { AppContext } from '../context/Context.js';
import { Link } from 'react-router-dom';
import Item from './Item'
import { AiOutlineReload } from 'react-icons/ai';

const Hero = () => {

    const { productData, wishlistProduct, isWishlist } = useContext(AppContext)

    const miniSize = productData?.filter((i: { type: string }) => i.type === 'Nước hoa mini')
    const giftset = productData?.filter((i: { type: string }) => i.type === 'Giftset')
    const bodyAndHome = productData?.filter((i: { type: string }) => i.type === 'Bodycare & Homecare')

    const setting1 = {
        dots: true,
        infinite: true,
        speed: 1000,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 2000,
        arrows: false
    }

    const setting2 = {
        dots: true,
        infinite: true,
        speed: 1000,
        slidesToShow: 5,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 2000,
        arrows: false,
        responsive: [
            {
                breakpoint: 1300,
                settings: {
                    slidesToShow: 4,
                }
            },
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 3,
                }
            },
            {
                breakpoint: 600,
                settings: {
                    slidesToShow: 2,
                }
            }
        ]
    }

    return (
        <div className='mt-8'>
            <Slider {...setting1}>
                {HeroBanner.map((banner: any, index: number) => {
                    return (
                        <div key={index} className='!important flex justify-center'>
                            <img src={banner} alt="" />
                        </div>
                    )
                })}
            </Slider>

            <div className='mt-10 px-3.5 sm:px-7'>
                <div className='flex justify-between'>
                    <p className='text-lg md:text-2xl font-semibold border-b border-gray-500 '>Thương Hiệu</p>
                    <div className='flex items-center gap-3.5 cursor-pointer text-gray-500'>
                        <p className=''>Xem thêm</p>
                        <IoIosArrowDropright />
                    </div>
                </div>

                <div className='mt-3.5 flex flex-col md:flex-row items-center md:gap-3'>
                    <div className='w-full md:w-1/2'>
                        <Slider {...setting1}>
                            {banner_brand.map((banner: any, index: number) => {
                                return (
                                    <div key={index} className='!important flex justify-center'>
                                        <img src={banner} alt="" />
                                    </div>
                                )
                            })}
                        </Slider>
                    </div>

                    <div className='w-full md:w-1/2 flex flex-wrap justify-center'>
                        {logo_brand.map((logo: any, index: number) => (
                            <div key={index}>
                                <img src={logo} className='w-24 md:w-20 lg:w-32 m-1 lg:m-3 hover:-translate-y-1 transition-all duration-500' alt="" />
                            </div>
                        ))}
                    </div>
                </div>
            </div>

            <div className='mt-10 px-3.5 sm:px-7 '>
                <div className='flex justify-between mb-3.5'>
                    <p className='text-lg md:text-2xl font-semibold border-b border-gray-500'>Brand Of The Year</p>
                    <div className='flex items-center gap-3.5 cursor-pointer text-gray-500'>
                        <p className=''>Xem thêm</p>
                        <IoIosArrowDropright />
                    </div>
                </div>

                {productData.length !== 0
                    ? <Slider {...setting2}>
                        {productData?.slice(0, 8).map((item: any, index: number) => {
                            return (
                                <div key={index} className='relative'>
                                    <Item id={item._id} image={item.image} brand={item.brand} name={item.name} oldPrice={item.oldPrice} newPrice={item.newPrice} des={item.des} />
                                    <div className='absolute top-0 left-0 px-3 py-0.5 bg-red-500 text-white rounded-lg text-[10px]'>
                                        Brand year
                                    </div>
                                    {isWishlist(item._id) ?
                                        < FaHeart onClick={() => wishlistProduct(item._id)} className='absolute z-50 top-0 right-7 text-red-500 text-lg hover:scale-110 cursor-pointer' />
                                        : < FaRegHeart onClick={() => wishlistProduct(item._id)} className='absolute z-50 top-0 right-7 text-gray-700 text-lg hover:scale-110 cursor-pointer' />
                                    }
                                </div>
                            )
                        })}
                    </Slider>
                    :
                    <div className='flex items-center justify-center'>
                        <AiOutlineReload className='animate-spin text-green-500 text-3xl text-center' />
                    </div>
                }
            </div>

            <div className='mt-10 px-3.5 sm:px-7 '>
                <div className='flex justify-between mb-3.5'>
                    <p className='text-lg md:text-2xl font-semibold border-b border-gray-500'>New Arrivals</p>
                    <div className='flex items-center gap-3.5 cursor-pointer text-gray-500'>
                        <p className=''>Xem thêm</p>
                        <IoIosArrowDropright />
                    </div>
                </div>

                {productData.length !== 0
                    ? <Slider {...setting2}>
                        {productData?.slice(10, 18).map((item: any, index: number) => {
                            return (
                                <div key={index} className='relative'>
                                    <Item id={item._id} image={item.image} brand={item.brand} name={item.name} oldPrice={item.oldPrice} newPrice={item.newPrice} des={item.des} />
                                    <div className='absolute top-0 left-0 px-3 py-0.5 bg-red-500 text-white rounded-lg text-[10px]'>
                                        New
                                    </div>
                                    {isWishlist(item._id) ?
                                        < FaHeart onClick={() => wishlistProduct(item._id)} className='absolute z-50 top-0 right-7 text-red-500 text-lg hover:scale-110 cursor-pointer' />
                                        : < FaRegHeart onClick={() => wishlistProduct(item._id)} className='absolute z-50 top-0 right-7 text-gray-700 text-lg hover:scale-110 cursor-pointer' />
                                    }
                                </div>
                            )
                        })}
                    </Slider>
                    :
                    <div className='flex items-center justify-center'>
                        <AiOutlineReload className='animate-spin text-green-500 text-3xl text-center' />
                    </div>
                }
            </div>

            <div className='mt-10 px-3.5 sm:px-7 '>
                <div className='flex justify-between mb-3.5'>
                    <p className='text-lg md:text-2xl font-semibold border-b border-gray-500'>Bestsellers</p>
                    <div className='flex items-center gap-3.5 cursor-pointer text-gray-500'>
                        <p className=''>Xem thêm</p>
                        <IoIosArrowDropright />
                    </div>
                </div>

                {productData.length !== 0
                    ? <Slider {...setting2}>
                        {productData?.slice(3, 10).map((item: any, index: number) => {
                            return (
                                <div key={index} className='relative'>
                                    <Item id={item._id} image={item.image} brand={item.brand} name={item.name} oldPrice={item.oldPrice} newPrice={item.newPrice} des={item.des} />
                                    <div className='absolute top-0 left-0 px-3 py-0.5 bg-red-500 text-white rounded-lg text-[10px]'>
                                        Bestsellers
                                    </div>
                                    {isWishlist(item._id) ?
                                        < FaHeart onClick={() => wishlistProduct(item._id)} className='absolute z-50 top-0 right-7 text-red-500 text-lg hover:scale-110 cursor-pointer' />
                                        : < FaRegHeart onClick={() => wishlistProduct(item._id)} className='absolute z-50 top-0 right-7 text-gray-700 text-lg hover:scale-110 cursor-pointer' />
                                    }
                                </div>
                            )
                        })}
                    </Slider>
                    :
                    <div className='flex items-center justify-center'>
                        <AiOutlineReload className='animate-spin text-green-500 text-3xl text-center' />
                    </div>
                }
            </div>

            <div className='mt-16 px-3.5 sm:px-7 justify-center items-center flex flex-wrap gap-6 xl:gap-10'>
                <Link
                    to='/nuoc-hoa-nam'
                    className='flex flex-col items-center gap-2 hover:scale-105 transition-all duration-500 cursor-pointer'
                    onClick={() => { scrollTo(0, 0) }}
                >
                    <img src={for_him} loading='lazy' className=' w-40 md:w-60 xl:w-72  ' alt="" />
                    <p>For Him</p>
                </Link>
                <Link
                    to='/nuoc-hoa-nu'
                    className='flex flex-col items-center gap-2 hover:scale-105 transition-all duration-500 cursor-pointer'
                    onClick={() => { scrollTo(0, 0) }}
                >
                    <img src={for_her} loading='lazy' className='w-40 md:w-60 xl:w-72 ' alt="" />
                    <p>For Her</p>
                </Link>
                <div className='flex flex-col items-center gap-2 hover:scale-105 transition-all duration-500 cursor-pointer'>
                    <img src={sale} loading='lazy' onClick={() => scrollTo(0, 1800)} className='w-40 md:w-60 xl:w-72 ' alt="" />
                    <p>Bestseller</p>
                </div>
                <div className='flex flex-col items-center gap-2 hover:scale-105 transition-all duration-500 cursor-pointer'>
                    <img src={new_in} loading='lazy' onClick={() => scrollTo(0, 1500)} className='w-40 md:w-60 xl:w-72 ' alt="" />
                    <p>New Arrivals</p>
                </div>
            </div>

            <div className='mt-10 px-3.5 sm:px-7 '>
                <div className='flex justify-between mb-3.5'>
                    <p className='text-lg md:text-2xl font-semibold border-b border-gray-500'>Mini & Travel Size</p>
                    <div className='flex items-center gap-3.5 cursor-pointer text-gray-500'>
                        <p className=''>Xem thêm</p>
                        <IoIosArrowDropright />
                    </div>
                </div>

                {productData.length !== 0
                    ? <Slider {...setting2}>
                        {miniSize?.slice(0, 6).map((item: any, index: number) => {
                            return (
                                <div key={index} className='relative'>
                                    <Item id={item._id} image={item.image} brand={item.brand} name={item.name} oldPrice={item.oldPrice} newPrice={item.newPrice} des={item.des} />
                                    <div className='absolute top-0 left-0 px-3 py-0.5 bg-red-500 text-white rounded-lg text-[10px]'>
                                        Mini size
                                    </div>
                                    {isWishlist(item._id) ?
                                        < FaHeart onClick={() => wishlistProduct(item._id)} className='absolute z-50 top-0 right-7 text-red-500 text-lg hover:scale-110 cursor-pointer' />
                                        : < FaRegHeart onClick={() => wishlistProduct(item._id)} className='absolute z-50 top-0 right-7 text-gray-700 text-lg hover:scale-110 cursor-pointer' />
                                    }
                                </div>
                            )
                        })}
                    </Slider>
                    :
                    <div className='flex items-center justify-center'>
                        <AiOutlineReload className='animate-spin text-green-500 text-3xl text-center' />
                    </div>
                }
            </div>

            <div className='mt-10 px-3.5 sm:px-7 '>
                <div className='flex justify-between mb-3.5'>
                    <p className='text-lg md:text-2xl font-semibold border-b border-gray-500'>Giftset</p>
                    <div className='flex items-center gap-3.5 cursor-pointer text-gray-500'>
                        <p className=''>Xem thêm</p>
                        <IoIosArrowDropright />
                    </div>
                </div>

                {productData.length !== 0
                    ? <Slider {...setting2}>
                        {giftset?.slice(0, 6).map((item: any, index: number) => {
                            return (
                                <div key={index} className='relative'>
                                    <Item id={item._id} image={item.image} brand={item.brand} name={item.name} oldPrice={item.oldPrice} newPrice={item.newPrice} des={item.des} />
                                    <div className='absolute top-0 left-0 px-3 py-0.5 bg-red-500 text-white rounded-lg text-[10px]'>
                                        Giftset
                                    </div>
                                    {isWishlist(item._id) ?
                                        < FaHeart onClick={() => wishlistProduct(item._id)} className='absolute z-50 top-0 right-7 text-red-500 text-lg hover:scale-110 cursor-pointer' />
                                        : < FaRegHeart onClick={() => wishlistProduct(item._id)} className='absolute z-50 top-0 right-7 text-gray-700 text-lg hover:scale-110 cursor-pointer' />
                                    }
                                </div>
                            )
                        })}
                    </Slider>
                    :
                    <div className='flex items-center justify-center'>
                        <AiOutlineReload className='animate-spin text-green-500 text-3xl text-center' />
                    </div>
                }
            </div>

            <div className='mt-10 px-3.5 sm:px-7 '>
                <div className='flex justify-between mb-3.5'>
                    <p className='text-lg md:text-2xl font-semibold border-b border-gray-500'>Bodycare & Homecare</p>
                    <div className='flex items-center gap-3.5 cursor-pointer text-gray-500'>
                        <p className=''>Xem thêm</p>
                        <IoIosArrowDropright />
                    </div>
                </div>

                {productData.length !== 0
                    ? <Slider {...setting2}>
                        {bodyAndHome?.slice(0, 6).map((item: any, index: number) => {
                            return (
                                <div key={index} className='relative'>
                                    <Item id={item._id} image={item.image} brand={item.brand} name={item.name} oldPrice={item.oldPrice} newPrice={item.newPrice} des={item.des} />
                                    {isWishlist(item._id) ?
                                        < FaHeart onClick={() => wishlistProduct(item._id)} className='absolute z-50 top-0 right-7 text-red-500 text-lg hover:scale-110 cursor-pointer' />
                                        : < FaRegHeart onClick={() => wishlistProduct(item._id)} className='absolute z-50 top-0 right-7 text-gray-700 text-lg hover:scale-110 cursor-pointer' />
                                    }
                                </div>
                            )
                        })}
                    </Slider>
                    :
                    <div className='flex items-center justify-center'>
                        <AiOutlineReload className='animate-spin text-green-500 text-3xl text-center' />
                    </div>
                }
            </div>
        </div >
    )
}

export default Hero