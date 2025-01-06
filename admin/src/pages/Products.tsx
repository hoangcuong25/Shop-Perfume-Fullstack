import React, { useContext } from 'react'
import { AppContext } from '../context/Context'
import { GiPerfumeBottle } from 'react-icons/gi'

const Products = () => {

    const { products, formatMoney } = useContext(AppContext)

    return (
        <div className='m-5'>
            <div className='flex flex-col w-96 gap-3'>
                <div className='flex items-center gap-5 bg-gray-100 p-4 min-w-52 rounded shadow-md cursor-pointer hover:-translate-y-2 transition-all duration-300'>
                    <div className='text-xl font-bold '>Quản lí thành viên</div>
                    <GiPerfumeBottle className='text-3xl text-gray-800' />
                    <div>
                        <p className='text-xl font-medium text-gray-600'>{products.length}</p>
                        <p className='text-gray-500'>Sản phẩm</p>
                    </div>
                </div>

                <div className='flex flex-col gap-5 md:gap-8 mt-7'>
                    {products.map((i: any, index: number) => (
                        <div key={index} className='bg-gray-100 border border-gray-200 rounded-md shadow-md hover:shadow-xl flex flex-col gap-2 px-2 py-1.5 md:px-5 md:py-5'>
                            <p><span className='font-semibold'>Tên: </span>{i.name}</p>
                            <p><span className='font-semibold'>Mô tả: </span>{i.des}</p>
                            <p><span className='font-semibold'>Brand: </span>{i.brand}</p>
                            <p><span className='font-semibold'>loại: </span>{i.type}</p>
                            <p><span className='font-semibold'>Giá mới: </span>{formatMoney(i.newPrice)} vnđ</p>
                            <p><span className='font-semibold'>Giá cũ: </span>{formatMoney(i.oldPrice)} vnđ</p>
                            <img src={i.image} className='w-20' alt="" />
                        </div>
                    ))}
                </div>
            </div>
        </div>
    )
}

export default Products
