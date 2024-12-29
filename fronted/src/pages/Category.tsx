import React, { useContext, useEffect, useState } from 'react'
import Header from '../components/Header'
import Navbar from '../components/Navbar'
import { IoIosArrowDown } from "react-icons/io";
import { AppContext } from '../context/Context';
import all_item from '../assets/all_item.js'
import Item from '../components/item.js';
import { FaRegHeart } from "react-icons/fa";

const Category = () => {

    const { navbar, setNavbar } = useContext(AppContext)

    const [fillterItem, setFillterItem] = useState()

    const [selectedBrand, setSelectedBrand] = useState<string>()
    const [selectedPrice, setSelectedPrice] = useState<string>()

    const [isShowBrand, setIsShowBrand] = useState<boolean>(false)
    const [isShowPrice, setIsShowPrice] = useState<boolean>(false)

    const filteredItem = () => {
        let filtered = all_item.filter(item => item.category === navbar);

        if (selectedBrand) {
            filtered = filtered.filter(item => item.brands === selectedBrand);
        }

        if (selectedPrice) {
            filtered = filtered.filter(item => {
                if (selectedPrice === 'Dưới 2 triệu') {
                    return item.new_price < 50;
                }
                if (selectedPrice === 'Từ 2-4 triệu') {
                    return item.new_price >= 50 && item.new_price <= 160;
                }
                if (selectedPrice === 'Trên 4 triệu') {
                    return item.new_price > 160;
                }
                return true;
            });
        }

        setFillterItem(filtered);
    };

    console.log(selectedPrice)

    useEffect(() => {
        filteredItem()
    }, [navbar, selectedBrand, selectedPrice])

    return (
        <div className='mb-16'>
            <Header />
            <Navbar />

            {navbar === 'nuoc-hoa-nam' &&
                < div className='text-sm mt-2 sm:mt-5 px-6 sm:px-16'>
                    Các quý ông tìm đến nước hoa để làm gì?
                    Có lẽ là để thơm tho, nam tính và làm chỉn chu thêm phong cách của bản thân, phải chứ?
                    Namperfume thấu hiểu các quý ông của chúng ta, đem tới cho đấng mày râu những mùi hương tươm tất,
                    gọn gàng, cuốn hút, đôi khi là quyền lực choáng ngợp, và chắc chắn không thể quên được sự bụi bặm phóng khoáng đặc trưng của phái mạnh.
                </div>
            }

            {navbar === 'nuoc-hoa-nu' &&
                <div className='text-sm mt-2 sm:mt-5 px-6 sm:px-16'>
                    Nước hoa từ những ngày đầu đã được tạo ra là để phục vụ cho phái đẹp,
                    vì thế dường như trong thế giới mùi hương, những sự lựa chọn cho nữ giới là phong phú và nhiều màu sắc hơn cả.
                    Là do vậy, namperfume luôn muốn đem đến cho các quý cô xinh đẹp những lựa chọn tuyệt vời, từ quyến rũ, sang trọng, quyền lực đến nhẹ nhàng, ngây thơ,
                    và không thể thiếu một chút gợi cảm lả lơi, ngả ngốn...
                </div>
            }

            {navbar === 'nuoc-hoa-mini' &&
                <div className='text-sm mt-2 sm:mt-5 px-6 sm:px-16'>
                    Nước hoa mini là những chai nước hoa nhỏ xinh được sản xuất chính hãng,
                    được chế tác và hoàn thiện tỉ mỉ,
                    nhằm giúp người dùng nước hoa có thể trải nghiệm được những mùi hương mới một cách nhanh chóng.
                    Không chỉ vậy, bạn còn có thể gặp phiên bản "travel spray" đến từ một số nhãn hàng,
                    giúp người dùng có thể dễ dàng mang theo mùi hương yêu thích của mình trong mỗi chuyến đi dài.
                </div>
            }

            <div className='flex gap-3 px-3.5 sm:px-7 mt-3.5 sm:mt-12'>
                <div className='w-56'>
                    <p className='font-semibold text-2xl'>{navbar}</p>

                    <p className='mt-3.5 text-gray-500'>Bộ lọc</p>
                    <div className='flex items-center justify-between'>
                        <p className='mt-1.5 font-bold'>Thương Hiệu</p>
                        <IoIosArrowDown className='cursor-pointer' onClick={() => setIsShowBrand(!isShowBrand)} />
                    </div>

                    {isShowBrand &&
                        <form className='mt-1.5'>
                            {['Dolce & Gabbana', 'Gucci', 'Burberry', 'Tom Ford', 'Ralph Lauren', 'Versace', 'Chanel'].map((brand) => (
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
                        <p>{fillterItem?.length ?? 0} kết quả</p>
                        <p>Sắp xếp theo: </p>
                    </div>

                    <div className='mt-8 flex flex-wrap justify-center'>
                        {fillterItem?.map((item, index) => (
                            <div key={index} className='relative'>
                                <Item id={item.id} image={item.image} brand={item.brands} name={item.name} oldPrice={item.old_price} newPrice={item.new_price} />
                                <FaRegHeart className='absolute top-0 right-7 text-gray-700' />
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </div >
    )
}

export default Category