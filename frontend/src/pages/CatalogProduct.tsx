/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable prefer-const */
import { useContext, useEffect, useState } from 'react'
import Header from '../components/Header.js'
import Navbar from '../components/Navbar.js'
import { IoIosArrowDown } from "react-icons/io";
import { AppContext } from '../context/Context.js';
import Item from '../components/Item';
import { FaHeart, FaRegHeart } from "react-icons/fa";
import { FaFilter } from "react-icons/fa";
import { FaRegWindowClose } from "react-icons/fa";
import Sorting from '../components/Sorting.js';
import Pagination from '../components/Pagination.js';
import { useParams } from 'react-router-dom';
import DescriptionCatalogProduct from '../components/DescriptionCatalogProduct.js';

const CatalogProduct = () => {

    const { productData, isWishlist, wishlistProduct } = useContext(AppContext)

    const { catalog } = useParams()
    const [items, setItems] = useState([])

    const [show, setShow] = useState<boolean>(false)

    const [selectedBrand, setSelectedBrand] = useState<string>()
    const [selectedPrice, setSelectedPrice] = useState<string>()

    const [isShowBrand, setIsShowBrand] = useState<boolean>(false)
    const [isShowPrice, setIsShowPrice] = useState<boolean>(false)

    const [selectedOption, setSelectedOption] = useState<string>('')

    const [currentPage, setCurrentPage] = useState(1)
    const [postPerPage] = useState(9)

    const lastPostIndex = currentPage * postPerPage
    const firstPostIndex = lastPostIndex - postPerPage
    const currentPosts = items?.slice(firstPostIndex, lastPostIndex)

    const filteredItem = () => {
        let catalogProduct = ''

        if (catalog === 'nuoc-hoa-nam') { catalogProduct = 'Nước hoa nam' }
        if (catalog === 'nuoc-hoa-nu') { catalogProduct = 'Nước hoa nữ' }
        if (catalog === 'nuoc-hoa-mini') { catalogProduct = 'Nước hoa mini' }
        if (catalog === 'giftset') { catalogProduct = 'Giftset' }
        if (catalog === 'bodycare&homecare') { catalogProduct = 'Bodycare & Homecare' }

        let filtered = productData?.filter((item: { type: string }) => item.type === catalogProduct)

        if (selectedBrand) {
            filtered = filtered.filter((item: { brand: string; }) => item.brand === selectedBrand)
        }

        if (selectedPrice) {
            filtered = filtered.filter((item: { newPrice: number; }) => {
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

        setItems(filtered)
    }

    useEffect(() => {
        if (productData.length > 0) {
            filteredItem()
            setSelectedOption('')
        }
    }, [productData, selectedBrand, selectedPrice, catalog])

    const sorting = (): void => {
        if (items?.length === 0) return
        let sortedArray = [...items]

        if (selectedOption === 'Giá thấp đến cao') {
            sortedArray.sort((a: any, b: any) => a.newPrice - b.newPrice)
        } else if (selectedOption === 'Giá cao đến thấp') {
            sortedArray.sort((a: any, b: any) => b.newPrice - a.newPrice)
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

            <DescriptionCatalogProduct catalog={catalog} />

            <div className='flex gap-5 px-3.5 sm:px-7 mt-3.5 sm:mt-12 relative'>
                <div
                    className={`w-56 h-fit bg-gray-100 px-3 py-5 rounded-md shadow-md hover:shadow-lg md:flex flex-col  ${show ? 'flex absolute z-50 top-10' : 'hidden'} `}
                >
                    <p className='font-semibold text-2xl'>
                        {catalog === 'nuoc-hoa-nam' && 'Nước hoa nam'}
                        {catalog === 'nuoc-hoa-nu' && 'Nước hoa nữ'}
                        {catalog === 'nuoc-hoa-mini' && 'Nước hoa mini'}
                        {catalog === 'giftset' && 'Giftset'}
                        {catalog === 'bodycare&homecare' && 'Bodycare & Homecare'}
                    </p>


                    <p className='mt-3.5 text-gray-500'>Bộ lọc</p>
                    <div className='flex items-center justify-between'>
                        <p className='mt-1.5 font-bold'>Thương Hiệu</p>
                        <IoIosArrowDown
                            className={`cursor-pointer transition-all duration-300 ${isShowBrand === true && 'rotate-180'}`}
                            onClick={() => setIsShowBrand(!isShowBrand)}
                        />
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
                        <IoIosArrowDown
                            className={`cursor-pointer transition-all duration-300 ${isShowPrice === true && 'rotate-180'}`}
                            onClick={() => setIsShowPrice(!isShowPrice)}
                        />
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
                                {show ?
                                    <FaRegWindowClose className=' text-gray-700' />
                                    : <FaFilter className=' text-gray-700' />
                                }
                                <p>Bộ lọc</p>
                            </div>
                        </div>

                        <Sorting setSelectedOption={setSelectedOption} selectedOption={selectedOption} />
                    </div>

                    <div className='mt-8 flex flex-wrap gap-5 justify-center'>
                        {currentPosts?.map((item: any, index: number) => (
                            <div key={index} className='relative'>
                                <Item id={item._id} image={item.image} brand={item.brand} name={item.name} oldPrice={item.oldPrice} newPrice={item.newPrice} des={item.des} />
                                {isWishlist(item?._id) ?
                                    < FaHeart onClick={() => wishlistProduct(item._id)} className='absolute top-0 right-7 text-red-500 text-lg hover:scale-110 cursor-pointer' />
                                    : < FaRegHeart onClick={() => wishlistProduct(item._id)} className='absolute top-0 right-7 text-gray-700 text-lg hover:scale-110 cursor-pointer' />
                                }
                            </div>
                        ))}
                    </div>

                    <Pagination
                        totalPosts={items?.length} postPerPage={postPerPage} setCurrentPage={setCurrentPage}
                        currentPage={currentPage}
                    />
                </div>
            </div>
        </div >
    )
}

export default CatalogProduct