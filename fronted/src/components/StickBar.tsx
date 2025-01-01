import React, { useState, useEffect } from 'react';

const StickyBar = ({ productInfo, formatMoney }) => {
    const [show, setShow] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            if (window.scrollY > 200) {
                setShow(true);
            } else {
                setShow(false);
            }
        };

        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    return (
        <div className={`fixed top-0 left-0 z-50 w-full bg-white shadow-lg border-b border-gray-200 transition-transform transform ${show ? 'translate-y-0' : '-translate-y-full'}`}>
            <div className="flex items-center justify-between p-1.5 md:p-4">
                <div className="flex items-center">
                    <img src={productInfo?.image} className="w-12 h-12 mr-4" />
                    <div>
                        <strong className="md:text-base text-xs">{productInfo?.name}</strong>
                        <div className="text-red-500 font-bold text-xs md:text-base">{formatMoney(productInfo?.newPrice)} vnd<span className='text-gray-300 line-through ml-3 sm:inline hidden'>{formatMoney(productInfo?.oldPrice)} vnd</span></div>
                    </div>
                </div>
                <div className='flex gap-5'>
                    <button className="bg-red-500 text-white text-xs md:text-base px-1 md:px-6 ml-2 py-1 md:py-2 rounded-lg">Thêm vào giỏ</button>
                    <button className="bg-red-500 text-white text-xs md:text-base px-1 md:px-6 py-1 md:py-2 rounded-lg">Mua ngay</button>
                </div>
            </div>
        </div>
    );
};

export default StickyBar;