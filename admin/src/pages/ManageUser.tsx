import React, { useContext } from 'react'
import { FaUsers } from 'react-icons/fa'
import { AppContext } from '../context/Context'

const ManageUser = () => {

    const { users } = useContext(AppContext)

    return (
        <div className='m-5'>
            <div className='flex flex-col gap-3'>
                <div className='flex items-center gap-5 bg-gray-100 p-4 min-w-52 rounded shadow-md cursor-pointer hover:-translate-y-2 transition-all duration-300'>
                    <div className='text-xl font-bold '>Quản lí thành viên</div>
                    <FaUsers className='text-3xl text-gray-800' />
                    <div>
                        <p className='text-xl font-medium text-gray-600'>{users.length}</p>
                        <p className='text-gray-500'>Thành viên</p>
                    </div>
                </div>

                <div className='flex flex-col gap-5 md:gap-8 mt-7'>
                    {users.map((i: any, index: number) => (
                        <div key={index} className='bg-gray-100 border border-gray-200 rounded-md shadow-md hover:shadow-xl flex flex-col gap-2 px-2 py-1.5 md:px-5 md:py-5'>
                            <p>Tên: <span className='font-semibold capitalize'>{i.lastName + ' ' + i.firstName}</span></p>
                            <p>Email: <span className='font-semibold'>{i.email}</span></p>
                            <p>Số điện thoại: <span className='font-semibold'>{i.phone}</span></p>
                            <p>Ngày sinh: <span className='font-semibold'>{i.dob}</span></p>
                            <p>Giới tính: <span className='font-semibold'>{i.gender}</span></p>
                            <p>Địa chỉ: <span className='font-semibold'>{i.address}</span></p>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    )
}

export default ManageUser
