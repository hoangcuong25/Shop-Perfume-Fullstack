import React from 'react'
import { Link } from 'react-router-dom'

const Item = ({
    image,
    brand,
    name,
    newPrice,
    oldPrice,
    id
}) => {
    return (
        <Link to={`/product/${id}`} onClick={() => window.scrollTo(0, 0)}>
            <div className="flex flex-col justify-center items-center hover:scale-105 transition-all duration-500 mx-3 relative group">
                <img src={image} alt="" className="md:size-[185px] size-[150px]" />
                <h3 className="font-semibold text-base md:text-lg ">{brand}</h3>
                <h4 className="italic w-[300px] text-center lg:text-[16px] lg:px-8 px-10 text-gray-900">{name}</h4>
                <h5 className="mt-3 text-[9px] lg:text-[13px] md:text-[11px]">New Price: ${newPrice}</h5>
                <h5 className="line-through text-[9px] lg:text-[13px] md:text-[11px]  text-slate-400  color: rgb(71 85 105);">Old Price ${oldPrice}</h5>

                <div className='absolute hidden group-hover:block w-[65%] bg-red-500 py-1 text-white text-sm rounded-lg text-center'>
                    XEM NHANH
                </div>
            </div>
        </Link>
    )
}

export default Item