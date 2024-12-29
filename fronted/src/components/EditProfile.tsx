import React, { useContext, useState } from 'react'
import { AppContext } from '../context/Context'
import { HiOutlineMail } from "react-icons/hi";
import { MdLocalPhone } from "react-icons/md";
import { IoMdLock } from "react-icons/io";
import { FaFacebook } from "react-icons/fa";
import { FcGoogle } from "react-icons/fc";
import axios from 'axios';
import { toast } from 'react-toastify';

const EditProfile = () => {

    const { userData, setUserData, backendUrl, token, loadUserProfileData } = useContext(AppContext)

    const [image, setImage] = useState()
    const [lastName, setLastName] = useState(userData.lastName)
    const [firstName, setFirstName] = useState(userData.firstName)
    const [selectGender, setSelectGender] = useState(userData.gender)
    const [dob, setdob] = useState(userData.dob)

    const editProfile = async () => {
        try {
            const payload = {
                firstName,
                lastName,
                selectGender,
                dob
            }

            if (image) {
                payload.image = image;  // Add image as a property instead of pushing to an array
            }

            const { data } = await axios.put(
                backendUrl + '/api/user/update-profile',
                payload,
                {
                    headers: {
                        'Content-Type': 'application/json',
                        token: token
                    }
                }
            )

            if (data.success) {
                toast.success('Profile updated successfully');
                await loadUserProfileData();
            } else {
                toast.error(data.message);
            }

        } catch (error) {
            toast.error(error.response?.data?.message || error.message)
        }
    }

    console.log(selectGender)

    return (
        <div className='flex gap-3 w-full bg-gray-100 px-3 py-3'>
            <div className='w-1/2 border-r'>
                <p className='font-bold text-lg'>Thông tin tài khoản</p>
                <div className='flex gap-10 mt-3'>
                    <label htmlFor="image">
                        <div className='inline-block relative cursor-pointer'>
                            <img className='h-28 w-28 rounded-full' src={image ? URL.createObjectURL(image) : userData.image} alt="" />
                            <p className='mt-3 text-sm text-center'>Tải ảnh của bạn</p>
                        </div>
                        <input onChange={(e) => setImage(e.target.files[0])} type="file" id='image' hidden />
                    </label>

                    <div className='flex flex-col gap-3.5'>
                        <div className='w-72 py-2 border border-gray-300 bg-gray-200 px-3 relative'>
                            <p>{userData.email}</p>
                            <HiOutlineMail className='absolute bottom-3 right-2' />
                        </div>
                        <div className='flex gap-8'>
                            <div>
                                <p className='text-sm'>Họ</p>
                                <input
                                    className='w-32 py-2 border border-gray-300 px-3 focus:outline-none'
                                    type="text"
                                    placeholder='Họ'
                                    value={lastName}
                                    onChange={(e) => setLastName(e.target.value)}
                                />
                            </div>

                            <div>
                                <p className='text-sm'>Tên</p>
                                <input
                                    className='w-32 py-2 border border-gray-300 px-3 focus:outline-none'
                                    type="text"
                                    placeholder='Tên'
                                    value={firstName}
                                    onChange={(e) => setFirstName(e.target.value)}
                                />
                            </div>
                        </div>

                        <div className="flex space-x-4">
                            {['Nam', 'Nữ', 'Không xác định'].map((gender) => (
                                <label key={gender} className="inline-flex items-center text-sm">
                                    <input
                                        type="radio"
                                        name="gender"
                                        value={gender}
                                        checked={selectGender === gender}
                                        onChange={() => setSelectGender(gender)}
                                        className="form-radio text-blue-600 h-5 w-5"
                                    />
                                    <span className="ml-2">{gender}</span>
                                </label>
                            ))}
                        </div>

                        <p className='text-sm font-semibold'>Ngày sinh</p>
                        <input
                            type="date"
                            className='w-72 py-2 border border-gray-300 px-3'
                            value={dob}
                            onChange={(e) => setdob(e.target.value)}
                        />

                        <div className='flex text-sm gap-3'>
                            <input type="checkbox" />
                            <p>Nhận thông tin khuyến mãi qua e-mail</p>
                        </div>

                        <div onClick={editProfile} className='w-32 py-1.5 cursor-pointer bg-red-500 hover:bg-red-600 text-center text-white'>Lưu thay đổi</div>
                    </div>
                </div>
            </div>

            <div className='w-1/2'>
                <p className='font-bold text-lg'>Số điện thoại và Email</p>

                <div className='mt-5 flex justify-between'>
                    <div className='flex gap-5 items-center'>
                        <MdLocalPhone className='text-2xl text-gray-700' />

                        <div>
                            <p>Số điện thoại</p>
                            <p className='text-gray-400'>Cập nhật số điện thoại</p>
                        </div>
                    </div>

                    <div className='bg-gray-300 rounded-md text-gray-500 font-bold px-5 py-1.5 h-fit hover:bg-green-300'>
                        Cập Nhật
                    </div>
                </div>

                <div className='mt-5 flex items-center gap-5'>
                    <HiOutlineMail className='text-2xl text-gray-700' />

                    <div>
                        <p>Email</p>
                        <p className='text-gray-400'>Cập nhật email</p>
                    </div>
                </div>

                <p className='font-bold text-lg mt-5'>Bảo mật</p>

                <div className='flex justify-between mt-3'>
                    <div className='flex items-center gap-5'>
                        <IoMdLock className='text-2xl text-gray-700' />
                        <p>Đổi mât khẩu</p>
                    </div>
                    <div className='bg-gray-300 rounded-md text-gray-500 font-bold px-5 py-1.5 h-fit hover:bg-green-300'>
                        Cập Nhật
                    </div>
                </div>

                <p className='font-bold text-lg mt-5'>Liên kết mạng xã hội</p>

                <div className='flex justify-between mt-3'>
                    <div className='flex items-center gap-5'>
                        <FaFacebook className='text-2xl text-blue-500' />
                        <p>Facebook</p>
                    </div>
                    <div className='bg-gray-300 rounded-md text-gray-500 font-bold px-5 py-1.5 h-fit hover:bg-green-300'>
                        Cập Nhật
                    </div>
                </div>

                <div className='flex justify-between mt-7'>
                    <div className='flex items-center gap-5'>
                        <FcGoogle className='text-2xl' />
                        <p>Google</p>
                    </div>
                    <div className='bg-gray-300 rounded-md text-gray-500 font-bold px-5 py-1.5 h-fit hover:bg-green-300'>
                        Cập Nhật
                    </div>
                </div>
            </div>
        </div>
    )
}

export default EditProfile
