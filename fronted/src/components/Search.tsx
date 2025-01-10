import React, { useState } from 'react'
import { IoIosSearch } from 'react-icons/io'
import { TiDeleteOutline } from 'react-icons/ti'

const Search = ({ onSearch, searchProducts }) => {

    const [query, setQuery] = useState<string>('')
    const [isSearch, setIsSearch] = useState<boolean>(false)

    const handleSearch = () => {
        if (query) {
            onSearch(query)
            setIsSearch(true)
        }
    }

    const handleClearSearch = () => {
        setQuery("")
        setIsSearch(false)
    }

    return (
        <div className='hidden sm:flex items-center border border-gray-300 rounded-md w-72 h-9 hover:border-gray-500'>
            <IoIosSearch onClick={handleSearch} className='text-2xl text-gray-600 ml-2 cursor-pointer' />
            <input
                type="text"
                className='w-full focus:outline-none px-2.5'
                value={query}
                onChange={(e) => setQuery(e.target.value)}
            />
            {isSearch && <TiDeleteOutline onClick={handleClearSearch} className='mr-2 text-gray-500 text-xl cursor-pointer' />}
        </div>
    )
}

export default Search