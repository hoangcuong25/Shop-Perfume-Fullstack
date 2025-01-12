/* eslint-disable @typescript-eslint/no-explicit-any */
import axios from 'axios';
import React, { useContext, useRef, useState } from 'react'
import Modal from 'react-modal'
import { AppContext } from '../context/Context';
import { toast } from 'react-toastify';

const customStyles = {
    content: {
        top: '50%',
        left: '50%',
        right: 'auto',
        bottom: 'auto',
        marginRight: '-50%',
        transform: 'translate(-50%, -50%)',
    },
}

type Props = {
    modalIsOpen: boolean
    setIsOpen: React.Dispatch<React.SetStateAction<boolean>>
}

const ModalPassword: React.FC<Props> = ({ modalIsOpen, setIsOpen }) => {

    const { backendUrl, token, loadProductData } = useContext(AppContext)

    const [oldPassword, setOldPassword] = useState<string>()
    const [newPassword1, setnewPassword1] = useState<string>()
    const [newPassword2, setnewPassword2] = useState<string>()

    const subtitle = useRef<HTMLHeadingElement | null>(null)

    const afterOpenModal = () => {
        if (subtitle.current) {
            subtitle.current.style.color = '#f00'
        }
    }

    function closeModal() {
        setIsOpen(false);
    }

    const updatePassword = async (): Promise<void> => {
        try {
            const { data } = await axios.put(backendUrl + '/api/user/update-password', { oldPassword, newPassword1, newPassword2 }, { headers: { token } })

            if (data.success) {
                toast.success('Thay đổi mật khẩu thành công')
                loadProductData()
                closeModal()
            }

        } catch (error: any) {
            toast.error(error.response?.data?.message || "Something went wrong")
        }
    }

    return (
        <div>
            <Modal
                isOpen={modalIsOpen}
                onAfterOpen={afterOpenModal}
                onRequestClose={closeModal}
                style={customStyles}
                contentLabel="Example Modal"
            >
                <div className='flex justify-between'>
                    <h2 ref={(el) => {
                        subtitle.current = el
                    }}>Đổi mật khẩu</h2>
                    <button className='hover:text-red-500' onClick={closeModal}>X</button>
                </div>

                <div className='mt-10'>
                    <p>Mật khẩu cũ:</p>
                    <input
                        type="text"
                        className='border border-gray-300 w-60 py-1 pl-1.5 mt-1.5'
                        onChange={(e) => setOldPassword(e.target.value)}
                        value={oldPassword}
                    />
                </div>

                <div className='mt-3.5'>
                    <p>Mật khẩu Mới:</p>
                    <input
                        type="text"
                        className='border border-gray-300 w-60 py-1 pl-1.5 mt-1.5'
                        onChange={(e) => setnewPassword1(e.target.value)}
                        value={newPassword1}
                    />
                </div>

                <div className='mt-3.5'>
                    <p>Nhập lại mật khẩu Mới:</p>
                    <input
                        type="text"
                        className='border border-gray-300 w-60 py-1 pl-1.5 mt-1.5'
                        onChange={(e) => setnewPassword2(e.target.value)}
                        value={newPassword2}
                    />
                </div>

                <div onClick={() => updatePassword()} className='mt-5 bg-red-500 py-2 text-center text-white hover:bg-red-600 cursor-pointer '>Lưu thay đổi</div>
            </Modal>
        </div>
    )
}

export default ModalPassword