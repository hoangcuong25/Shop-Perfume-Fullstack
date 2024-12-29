import React, { useState } from 'react'
import Header from '../components/Header'
import Navbar from '../components/Navbar'
import Sidebar from '../components/Sidebar'
import EditProfile from '../components/EditProfile'
import Point from '../components/Point'
import AccountInfor from '../components/AccountInfor'
import TrackOrder from '../components/TrackOrder'
import WhistList from '../components/WhistList'
import FAQ from '../components/FAQ'

const MyProfile = () => {

    const [sidebar, setSidebar] = useState<string>('')

    return (
        <div className='mb-8'>
            <Header />
            <Navbar />

            <div className='flex mt-1.5 gap-3 sm:mt-3.5 px-3.5 sm:px-7'>
                <Sidebar sidebar={sidebar} setSidebar={setSidebar} />

                {sidebar === '' &&
                    <div className='flex flex-col justify-center items-center w-full bg-gray-100'>
                        <p className='text-3xl font-bold text-red-500'>namperfume</p>
                        <p>Thương hiệu nước hoa uy tín từ 2013</p>
                    </div>
                }

                {sidebar === 'Quản lí tài khoản' && <EditProfile />}
                {sidebar === 'Tích điểm' && <Point />}
                {sidebar === 'Đơn hàng của tôi' && <TrackOrder />}
                {sidebar === 'Danh sách yêu thích' && <WhistList />}
                {sidebar === 'Hỏi đáp' && <FAQ />}
            </div>
        </div>
    )
}

export default MyProfile
