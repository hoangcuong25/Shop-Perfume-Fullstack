import axios from 'axios'
import React, { useContext, useState } from 'react'
import { IoIosSearch } from 'react-icons/io'
import { TiDeleteOutline } from 'react-icons/ti'
import { toast } from 'react-toastify'
import { AppContext } from '../context/Context'

const Search = ({ modalIsOpen }) => {

    const { formatMoney, backendUrl } = useContext(AppContext)

    const [searchProducts, setSearchProducts] = useState([])
    const [query, setQuery] = useState<string>('')
    const [isSearch, setIsSearch] = useState<boolean>(false)

    const onSearch = async (query: string): Promise<void> => {
        try {
            const { data } = await axios.get(
                backendUrl + "/api/user/search",
                {
                    params: { query }
                }
            )

            if (data.success) {
                setSearchProducts(data.products)
            } else {
                toast.warning("Không tìm thấy sản phẩm!")
            }

        } catch (error) {
            toast.error(error.response?.data?.message || "Something went wrong!!!")
        }

        setIsSearch(true)
    }

    const handleClearSearch = () => {
        setQuery("")
        setIsSearch(false)
        setSearchProducts([])
    }

    return (
        <div className='relative'>
            <div className={`${modalIsOpen ? 'flex' : 'hidden sm:flex'}  items-center border border-gray-300 rounded-md w-72 h-9 hover:border-gray-500`}>
                <IoIosSearch onClick={() => onSearch(query)} className='text-2xl text-gray-600 ml-2 cursor-pointer' />
                <input
                    type="text"
                    className='w-full focus:outline-none px-2.5'
                    placeholder='Tìm kiếm'
                    value={query}
                    onChange={(e) => setQuery(e.target.value)}
                />
                {isSearch && <TiDeleteOutline onClick={handleClearSearch} className='mr-2 text-gray-500 text-xl cursor-pointer' />}
            </div>

            {isSearch && searchProducts.length != 0 && (
                <div
                    className={`absolute top-10 flex-col gap-3.5 bg-stone-100 rounded-md text-black w-[400px] h-96 z-50 flex overflow-y-scroll`}
                >
                    {searchProducts?.map((item: any, index: number) => (
                        <div
                            key={index}
                            className="flex gap-3.5 border-b pb-3 border-gray-300"
                        >
                            <img src={item?.image} className="w-28" alt="" />
                            <div className="flex flex-col pt-1.5">
                                <p className="font-semibold">{item?.brand}</p>
                                <p className="text-sm">{item?.name}</p>
                                <p className="text-sm">{item?.type}</p>
                                <p className="text-sm">
                                    Giá:{" "}
                                    <span className="text-red-500">
                                        {formatMoney(item?.newPrice)} vnđ{" "}
                                    </span>
                                    <span className="text-gray-400 line-through">
                                        {formatMoney(item?.oldPrice)} vnđ
                                    </span>
                                </p>
                            </div>
                        </div>
                    ))}
                </div>
            )}
        </div>
    )
}

export default Search