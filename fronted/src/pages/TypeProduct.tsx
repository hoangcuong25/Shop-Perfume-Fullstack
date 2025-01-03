import React, { useContext, useEffect, useState } from 'react'
import Header from '../components/Header.js'
import Navbar from '../components/Navbar.js'
import { IoIosArrowDown } from "react-icons/io";
import { AppContext } from '../context/Context.js';
import Item from '../components/item.js';
import { FaHeart, FaRegHeart } from "react-icons/fa";
import { FaFilter } from "react-icons/fa";
import Sorting from '../components/Sorting.js';
import Pagination from '../components/Pagination.js';
import DescriptionTypeProduct from '../components/DescriptionTypeProduct.js';

const TypeProduct = () => {

    const { navbar, productData, isWishlist, wishlistProduct } = useContext(AppContext)

    const [show, setShow] = useState<boolean>(false)

    const [items, setItems] = useState<any[]>([])

    const [selectedBrand, setSelectedBrand] = useState<string>()
    const [selectedPrice, setSelectedPrice] = useState<string>()

    const [isShowBrand, setIsShowBrand] = useState<boolean>(false)
    const [isShowPrice, setIsShowPrice] = useState<boolean>(false)

    const [selectedOption, setSelectedOption] = useState<string>('')

    const [currentPage, setCurrentPage] = useState(1)
    const [postPerPage, setPostPerPage] = useState(9)

    const lastPostIndex = currentPage * postPerPage
    const firstPostIndex = lastPostIndex - postPerPage
    const currentPosts = items?.slice(firstPostIndex, lastPostIndex)

    const filteredItem = () => {
        let filtered = productData?.filter(item => item.type === navbar)

        if (selectedBrand) {
            filtered = filtered.filter(item => item.brand === selectedBrand)
        }

        if (selectedPrice) {
            filtered = filtered.filter(item => {
                if (selectedPrice === 'Dưới 2 triệu') {
                    return item.newPrice < 2000000;
                }
                if (selectedPrice === 'Từ 2-4 triệu') {
                    return item.newPrice >= 2000000 && item.newPrice <= 4000000;
                }
                if (selectedPrice === 'Trên 4 triệu') {
                    return item.newPrice > 4000000;
                }
                return true;
            })
        }

        setItems(filtered);
    }

    useEffect(() => {
        filteredItem()
        setSelectedOption('')
    }, [navbar, selectedBrand, selectedPrice])

    const sorting = () => {
        if (items?.length === 0) return
        let sortedArray = [...items]

        if (selectedOption === 'Giá thấp đến cao') {
            sortedArray.sort((a, b) => a.newPrice - b.newPrice)
        } else if (selectedOption === 'Giá cao đến thấp') {
            sortedArray.sort((a, b) => b.newPrice - a.newPrice)
        }

        setItems(sortedArray)
    }

    useEffect(() => {
        sorting()
    }, [selectedOption])

    return (
        <div className='mb-16'>
            <Header />
            <Navbar />

            <DescriptionTypeProduct navbar={navbar} />

            <div className='flex gap-5 px-3.5 sm:px-7 mt-3.5 sm:mt-12 relative'>
                <div
                    className={`w-56 h-fit bg-gray-100 px-3 py-5 rounded-md shadow-md hover:shadow-lg md:flex flex-col  ${show ? 'flex absolute z-50 top-10' : 'hidden'} `}
                >
                    <p className='font-semibold text-2xl'>{navbar}</p>

                    <p className='mt-3.5 text-gray-500'>Bộ lọc</p>
                    <div className='flex items-center justify-between'>
                        <p className='mt-1.5 font-bold'>Thương Hiệu</p>
                        <IoIosArrowDown className='cursor-pointer' onClick={() => setIsShowBrand(!isShowBrand)} />
                    </div>

                    {isShowBrand &&
                        <form className='mt-1.5'>
                            {['Dolce & Gabbana', 'Gucci', 'Burberry', 'Tom Ford', 'Dior', 'Versace', 'Chanel'].map((brand) => (
                                <label key={brand} className='cursor-pointer flex items-center gap-2 text-sm hover:text-red-500'>
                                    <input
                                        type="radio"
                                        name="brand"
                                        value={brand}
                                        checked={selectedBrand === brand}
                                        onChange={(e) => setSelectedBrand(e.target.value)}
                                    />
                                    {brand}
                                </label>
                            ))}

                            <button
                                type="button"
                                className="my-3.5 px-5 py-1.5 bg-gray-300 text-sm text-gray-700 rounded hover:bg-gray-400"
                                onClick={() => setSelectedBrand('')}
                            >
                                Bỏ chọn
                            </button>
                        </form>
                    }

                    <div className='flex items-center justify-between mb-1'>
                        <p className='mt-1.5 font-bold'>Mức Giá</p>
                        <IoIosArrowDown className='cursor-pointer' onClick={() => setIsShowPrice(!isShowPrice)} />
                    </div>

                    {isShowPrice &&
                        <form className='mt-1.5'>
                            {['Dưới 2 triệu', 'Từ 2-4 triệu', 'Trên 4 triệu'].map((price, index) => (
                                <label key={index} className='cursor-pointer flex items-center gap-2 text-sm hover:text-red-500'>
                                    <input
                                        type="radio"
                                        name="price"
                                        value={price}
                                        checked={selectedPrice === price}
                                        onChange={(e) => setSelectedPrice(e.target.value)}
                                    />
                                    {price}
                                </label>
                            ))}

                            <button
                                type="button"
                                className="mt-3.5 px-5 py-1.5 bg-gray-300 text-sm text-gray-700 rounded hover:bg-gray-400"
                                onClick={() => setSelectedPrice('')}
                            >
                                Bỏ chọn
                            </button>
                        </form>
                    }
                </div>

                <div className='w-full '>
                    <div className='flex justify-between text-sm'>
                        <div className='flex items-center gap-3'>
                            <p>{items?.length ?? 0} kết quả</p>
                            <div
                                className='md:hidden flex items-center gap-1.5 px-3 py-1.5 bg-gray-100 rounded-lg shadow-md cursor-pointer'
                                onClick={() => setShow(!show)}
                            >
                                <FaFilter className=' text-gray-700' />
                                <p>Bộ lọc</p>
                            </div>
                        </div>

                        <Sorting setSelectedOption={setSelectedOption} selectedOption={selectedOption} />
                    </div>

                    <div className='mt-8 flex flex-wrap gap-5 justify-center'>
                        {currentPosts?.map((item, index) => (
                            <div key={index} className='relative'>
                                <Item id={item._id} image={item.image} brand={item.brand} name={item.name} oldPrice={item.oldPrice} newPrice={item.newPrice} des={item.des} />
                                {isWishlist(item?._id) ?
                                    < FaHeart onClick={() => wishlistProduct(item._id)} className='absolute z-50 top-0 right-7 text-red-500 text-lg hover:scale-110 cursor-pointer' />
                                    : < FaRegHeart onClick={() => wishlistProduct(item._id)} className='absolute z-50 top-0 right-7 text-gray-700 text-lg hover:scale-110 cursor-pointer' />
                                }
                            </div>
                        ))}
                    </div>
                </div>
            </div>

            <Pagination
                totalPosts={items?.length} postPerPage={postPerPage} setCurrentPage={setCurrentPage}
                setPostPerPage={setPostPerPage} currentPage={currentPage}
            />
        </div >
    )
}

export default TypeProduct