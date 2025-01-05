import React, { useContext, useEffect } from 'react'
import { FaUsers } from "react-icons/fa";
import { GiPerfumeBottle } from "react-icons/gi";
import { FaBox } from "react-icons/fa";
import { AppContext } from '../context/Context';

const Dashboard = () => {

    const { users, products, orders } = useContext(AppContext)

    return (
        <div className='m-5'>
            <div className='flex flex-wrap gap-3'>
                <div className='flex items-center gap-3.5 bg-gray-100 p-4 min-w-52 rounded shadow-md cursor-pointer hover:scale-105 transition-all'>
                    <FaUsers className='text-3xl text-gray-800' />
                    <div>
                        <p className='text-xl font-medium text-gray-600'>{users.length}</p>
                        <p className='text-gray-400'>Thành viên</p>
                    </div>
                </div>

                <div className='flex items-center gap-3.5 bg-gray-100 p-4 min-w-52 rounded shadow-md cursor-pointer hover:scale-105 transition-all'>
                    <GiPerfumeBottle className='text-3xl text-gray-800' />
                    <div>
                        <p className='text-xl font-medium text-gray-600'>{products.length}</p>
                        <p className='text-gray-400'>Sản phẩm</p>
                    </div>
                </div>

                <div className='flex items-center gap-3.5 bg-gray-100 p-4 min-w-52 rounded shadow-md cursor-pointer hover:scale-105 transition-all'>
                    <FaBox className='text-3xl text-gray-800' />
                    <div>
                        <p className='text-xl font-medium text-gray-600'>{orders.length}</p>
                        <p className='text-gray-400'>Đơn hàng</p>
                    </div>
                </div>

            </div>

            <div className='bg-white'>
                <div className='flex items-center gap-2.5 px-4 py-4 mt-10 rounded-t bg-gray-100 shadow-md'>
                    <p className='font-medium'>Đơn hàng gần đây</p>
                </div>

                {/* <div className='pt-4 border border-t-0'>
                    {
                        dashData.latestAppointments.map((item, index) => (
                            <div className='flex items-center px-6 py-4 gap-3 hover:bg-gray-100' key={index}>
                                <img src={item.docData.image} className='rounded-full w-10' alt="" />

                                <div className='flex-1 text-sm'>
                                    <p className='text-gray-800 font-medium'>{item.docData.name}</p>
                                    <p className='text-gray-600'>{slotDateFormat(item.slotDate)}</p>
                                </div>

                                {item.cancelled
                                    ? <p className='text-red-400 text-xs font-medium'>Cancelled</p>
                                    : item.isCompleted
                                        ? <p className='text-green-500 text-xs font-medium'>Completed</p>
                                        : <img onClick={() => cancelAppointment(item._id)} className='w-10 cursor-pointer' src={assets.cancel_icon} alt="" />
                                }
                            </div>
                        ))
                    }
                </div> */}
            </div>
        </div>
    )
}

export default Dashboard