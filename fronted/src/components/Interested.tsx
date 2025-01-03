import React, { useContext } from 'react'
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Item from '../components/item.js';
import { FaRegHeart } from "react-icons/fa";
import { AppContext } from '../context/Context.js';

const Interested = () => {

    const { productData, addToWishlist } = useContext(AppContext)

    const setting = {
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
            },
            {
                breakpoint: 480,
                settings: {
                    slidesToShow: 1,
                }
            }
        ]
    }

    return (
        <div className='flex flex-col gap-5 mt-8 px-3.5 sm:px-7'>
            <p className='text-2xl font-semibold'>Có thể bạn sẽ quan tâm:</p>
            <Slider {...setting}>
                {productData?.slice(0, 8).map((item, index) => {
                    return (
                        <div key={index} className='relative'>
                            <Item id={item._id} image={item.image} brand={item.brand} name={item.name} oldPrice={item.oldPrice} newPrice={item.newPrice} des={item.des} />
                            <div className='absolute top-0 left-7 px-1 py-0.5 bg-red-500 text-white rounded-lg text-[10px]'>
                                Brand year
                            </div>
                            <FaRegHeart onClick={() => addToWishlist(item._id)} className='absolute z-50 top-0 right-7 text-gray-700 text-lg hover:scale-110 cursor-pointer' />
                        </div>
                    )
                })}
            </Slider>
        </div>
    )
}

export default Interested
