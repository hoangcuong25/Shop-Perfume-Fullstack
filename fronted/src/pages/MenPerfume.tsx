import React, { useState } from 'react'
import Header from '../components/Header'
import Navbar from '../components/Navbar'
import { IoIosArrowDown } from "react-icons/io";
import Slider from 'rc-slider';
import 'rc-slider/assets/index.css';
import { FaRegStar } from "react-icons/fa";
import { FaStar } from "react-icons/fa";

const MenPerfume = () => {

    const [selectedBrand, setSelectedBrand] = useState<string>('');

    const [isShowBrand, setIsShowBrand] = useState<boolean>(false)
    const [isShowPrice, setIsShowPrice] = useState<boolean>(false)
    const [isShowSize, setIsShowSize] = useState<boolean>(false)
    const [isShowRate, setIsShowRate] = useState<boolean>(false)


    return (
        <div >
            <Header />
            <Navbar />

            <div className='text-sm mt-2 sm:mt-5 px-6 sm:px-16'>
                Các quý ông tìm đến nước hoa để làm gì?
                Có lẽ là để thơm tho, nam tính và làm chỉn chu thêm phong cách của bản thân, phải chứ?
                Namperfume thấu hiểu các quý ông của chúng ta, đem tới cho đấng mày râu những mùi hương tươm tất,
                gọn gàng, cuốn hút, đôi khi là quyền lực choáng ngợp, và chắc chắn không thể quên được sự bụi bặm phóng khoáng đặc trưng của phái mạnh.
            </div>

            <div className='flex gap-3 px-3.5 sm:px-7 mt-3.5 sm:mt-12'>
                <div className='w-56'>
                    <p className='font-semibold text-2xl'>Nước Hoa Nam</p>

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
                        </form>
                    }

                    <div className='flex items-center justify-between mb-1'>
                        <p className='mt-1.5 font-bold'>Mức Giá</p>
                        <IoIosArrowDown className='cursor-pointer' onClick={() => setIsShowPrice(!isShowPrice)} />
                    </div>

                    {isShowPrice && <Slider
                        range
                        allowCross={false}
                        defaultValue={[0, 100]}
                        styles={{
                            rail: {
                                background: `lightgray`,
                            },
                            track: {
                                background: 'black',
                            },
                        }}
                    />}

                    <div className='flex items-center justify-between mb-1'>
                        <p className='mt-1.5 font-bold'>Size</p>
                        <IoIosArrowDown className='cursor-pointer' onClick={() => setIsShowSize(!isShowSize)} />
                    </div>

                    {isShowSize &&
                        <form className='mt-1.5'>
                            {['Tất cả', '30ml', '50ml', '100ml'].map((brand) => (
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
                        </form>
                    }

                    <div className='flex items-center justify-between mb-1'>
                        <p className='mt-1.5 font-bold'>Đánh giá</p>
                        <IoIosArrowDown className='cursor-pointer' onClick={() => setIsShowRate(!isShowRate)} />
                    </div>

                    {isShowRate && (
                        <form className="mt-1.5">
                            {[5, 4, 3, 2, 1].map((star, index) => {
                                const stars = [];
                                for (let i = 0; i < star; i++) {
                                    stars.push(<FaStar key={i} className="text-orange-800" />);
                                }
                                return (
                                    <div key={index} className="flex gap-2">
                                        <label>
                                            <input type="radio" name="brand" value={star} />
                                        </label>
                                        {stars}
                                    </div>
                                );
                            })}
                        </form>
                    )}
                </div>

                <div className='w-full '>
                    <div className='flex justify-between'>
                        <p>56 kết quả</p>
                        <p>Sắp xếp theo: </p>
                    </div>


                    <div>

                    </div>
                </div>
            </div>
        </div>
    )
}

export default MenPerfume