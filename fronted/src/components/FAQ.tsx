import React, { useState } from 'react';
import { AiOutlineMenu } from "react-icons/ai";

const FAQ = ({ setShow, show }) => {
    const [openIndex, setOpenIndex] = useState(null);

    const faqs = [
        {
            question: 'Làm thế nào để đăng ký tài khoản?',
            answer: 'Bạn có thể đăng ký tài khoản bằng cách nhấn vào nút "Đăng ký" trên trang chủ và điền thông tin cần thiết.'
        },
        {
            question: 'Quên mật khẩu, làm sao để khôi phục?',
            answer: 'Hãy nhấp vào "Quên mật khẩu" tại trang đăng nhập và làm theo hướng dẫn để khôi phục mật khẩu của bạn.'
        },
        {
            question: 'Làm thế nào để liên hệ với bộ phận hỗ trợ?',
            answer: 'Bạn có thể liên hệ qua biểu mẫu "Liên hệ" hoặc gửi email trực tiếp tới support@example.com.'
        }
    ];

    const toggleFAQ = (index) => {
        setOpenIndex(openIndex === index ? null : index);
    };

    return (
        <div className='flex flex-col gap-5 w-full bg-gray-100 px-5 py-5 shadow-md'>
            <div
                className='flex md:hidden items-center gap-3 cursor-pointer'
                onClick={() => setShow(!show)}
            >
                <AiOutlineMenu />
                <p>Menu</p>
            </div>
            <p className='font-bold text-xl md:text-2xl text-center mb-3'>Câu hỏi thường gặp</p>

            {faqs.map((faq, index) => (
                <div key={index} className='bg-white rounded-lg shadow p-4 cursor-pointer'>
                    <div
                        className='flex justify-between items-center'
                        onClick={() => toggleFAQ(index)}
                    >
                        <p className='font-semibold text-base md:text-lg'>{faq.question}</p>
                        <span className='text-xl md:text-2xl ml-2'>
                            {openIndex === index ? '-' : '+'}
                        </span>
                    </div>

                    {openIndex === index && (
                        <div className='mt-3 text-gray-700 text-sm md:text-base'>
                            {faq.answer}
                        </div>
                    )}
                </div>
            ))}
        </div>
    );
};

export default FAQ;
