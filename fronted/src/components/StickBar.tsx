import React, { useState, useEffect } from 'react';

const StickyBar = () => {
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
            <div className="flex items-center justify-between p-4">
                <div className="flex items-center">
                    <img src="perfume.png" alt="Gucci Bloom" className="w-12 h-12 mr-4" />
                    <div>
                        <strong className="text-lg">GUCCI BLOOM EAU DE PARFUM</strong>
                        <div className="text-red-500 font-bold">480,000₫</div>
                    </div>
                </div>
                <button className="bg-red-500 text-white px-6 py-2 rounded-lg">Thêm vào giỏ hàng</button>
            </div>
        </div>
    );
};

export default StickyBar;