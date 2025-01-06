import React, { useContext } from 'react'
import { FaUsers } from 'react-icons/fa'
import { AppContext } from '../context/Context'

const ManageUser = () => {

    const { users } = useContext(AppContext)

    return (
        <div className='m-5'>
            <div className='flex flex-wrap gap-3'>
                <div className='flex items-center gap-5 bg-gray-100 p-4 min-w-52 rounded shadow-md cursor-pointer hover:-translate-y-2 transition-all duration-300'>
                    <div className='text-xl font-bold '>Quản lí thành viên</div>

                    <hr className='bg-gray-500 h-full w-1' />

                    <FaUsers className='text-3xl text-gray-800' />
                    <div>
                        <p className='text-xl font-medium text-gray-600'>{users.length}</p>
                        <p className='text-gray-500'>Thành viên</p>
                    </div>
                </div>
            </div>

        </div>
    )
}

export default ManageUser
