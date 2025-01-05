import { Link, useLocation } from 'react-router-dom';
import { RiDashboardHorizontalFill } from "react-icons/ri";
import { FaUsers } from "react-icons/fa";
import { IoMdAdd } from "react-icons/io";
import { FaBox } from "react-icons/fa";
import { GiPerfumeBottle } from "react-icons/gi";

const Sidebar = () => {
    const location = useLocation()

    const isActive = (path: string) => location.pathname === path

    return (
        <div className='min-h-screen bg-white border-r'>
            <ul className='text-[#515151] mt-5'>
                <Link
                    to={'/'}
                    className={`flex items-center gap-3 py-3.5 px-3 md:px-9 md:min-w-72 cursor-pointer 
                        ${isActive('/') ? 'border-r-4 border-blue-500' : ''}`}>
                    <p className='hidden md:block'>Dashboard</p>
                    <RiDashboardHorizontalFill className='text-xl' />
                </Link>

                <Link
                    to={'/manage-user'}
                    className={`flex items-center gap-3 py-3.5 px-3 md:px-9 md:min-w-72 cursor-pointer 
                        ${isActive('/manage-user') ? 'border-r-4 border-blue-500' : ''}`}>
                    <p className='hidden md:block'>Quản lí thành viên</p>
                    <FaUsers className='text-xl' />
                </Link>

                <Link
                    to={'/products'}
                    className={`flex items-center gap-3 py-3.5 px-3 md:px-9 md:min-w-72 cursor-pointer 
                        ${isActive('/products') ? 'border-r-4 border-blue-500' : ''}`}>
                    <p className='hidden md:block'>Tất cả sản phẩm</p>
                    <GiPerfumeBottle className='text-xl' />
                </Link>

                <Link
                    to={'/add-product'}
                    className={`flex items-center gap-3 py-3.5 px-3 md:px-9 md:min-w-72 cursor-pointer 
                        ${isActive('/add-product') ? 'border-r-4 border-blue-500' : ''}`}>
                    <p className='hidden md:block'>Thêm sản phẩm</p>
                    <IoMdAdd className='text-xl' />
                </Link>

                <Link
                    to={'/orders'}
                    className={`flex items-center gap-3 py-3.5 px-3 md:px-9 md:min-w-72 cursor-pointer 
                        ${isActive('/orders') ? 'border-r-4 border-blue-500' : ''}`}>
                    <p className='hidden md:block'>Các đơn hàng</p>
                    <FaBox className='text-xl' />
                </Link>
            </ul>
        </div>
    )
}

export default Sidebar;
