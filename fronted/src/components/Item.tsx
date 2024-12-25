import React from 'react'
import { Link } from 'react-router-dom'
import { FaRegHeart } from "react-icons/fa";

const Item = ({
    image,
    brand,
    name,
    newPrice,
    oldPrice,
    id
}) => {
    return (
        <Link onClick={() => window.scrollTo(0, 0)}>
            <div className="flex flex-col justify-center items-center hover:scale-105 transition-all duration-500 mx-3 relative">
                <img src={image} alt="" className="md:size-[185px] size-[150px]" />
                <h3 className="font-semibold text-base md:text-lg ">{brand}</h3>
                <h4 className="italic w-[300px] text-center lg:text-[16px] lg:px-8 px-10 text-gray-900">{name}</h4>
                <h5 className="mt-3 text-[9px] lg:text-[13px] md:text-[11px]">New Price: ${newPrice}</h5>
                <h5 className="line-through text-[9px] lg:text-[13px] md:text-[11px]  text-slate-400  color: rgb(71 85 105);">Old Price ${oldPrice}</h5>

                <div className='absolute top-0 left-0 px-1 py-0.5 bg-red-500 text-white rounded-lg text-[10px]'>
                    Brand year
                </div>
                <FaRegHeart className='absolute top-0 right-0 text-gray-700' />
            </div>
        </Link>
    )
}

export default Item