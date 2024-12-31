import { Link, useLocation } from 'react-router-dom';

const Sidebar = () => {
    const location = useLocation()

    const isActive = (path) => location.pathname === path

    return (
        <div className='min-h-screen bg-white border-r'>
            <ul className='text-[#515151] mt-5'>
                <Link
                    to={'/dashboard'}
                    className={`flex items-center gap-3 py-3.5 px-3 md:px-9 md:min-w-72 cursor-pointer 
                        ${isActive('/dashboard') ? 'border-r-4 border-blue-500' : ''}`}>
                    <p className='hidden md:block'>Dashboard</p>
                </Link>

                <Link
                    to={'/manage-user'}
                    className={`flex items-center gap-3 py-3.5 px-3 md:px-9 md:min-w-72 cursor-pointer 
                        ${isActive('/manage-user') ? 'border-r-4 border-blue-500' : ''}`}>
                    <p className='hidden md:block'>Quản lí thành viên</p>
                </Link>

                <Link
                    to={'/add-product'}
                    className={`flex items-center gap-3 py-3.5 px-3 md:px-9 md:min-w-72 cursor-pointer 
                        ${isActive('/add-product') ? 'border-r-4 border-blue-500' : ''}`}>
                    <p className='hidden md:block'>Thêm sản phẩm</p>
                </Link>

                <Link
                    to={'/orders'}
                    className={`flex items-center gap-3 py-3.5 px-3 md:px-9 md:min-w-72 cursor-pointer 
                        ${isActive('/orders') ? 'border-r-4 border-blue-500' : ''}`}>
                    <p className='hidden md:block'>Các đơn hàng</p>
                </Link>
            </ul>
        </div>
    )
}

export default Sidebar;
