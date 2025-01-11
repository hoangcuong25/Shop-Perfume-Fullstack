import axios from 'axios';
import React, { useContext, useState } from 'react'
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
};

const CommentModal = ({ productInfo }) => {

    const { backendUrl, token, loadProductData } = useContext(AppContext)

    const [comment, setComment] = useState<string>('')

    const [modalIsOpen, setIsOpen] = React.useState(false);
    let subtitle

    function afterOpenModal() {
        subtitle.style.color = '#f00';
    }

    function openModal() {
        setIsOpen(true);
    }

    function closeModal() {
        setIsOpen(false);
    }

    const productId = productInfo?._id

    const userComment = async () => {
        try {
            const { data } = await axios.post(backendUrl + '/api/user/comment', { comment, productId }, { headers: { token } })

            if (data.success) {
                toast.success('Đánh giá thành công')
                closeModal()
                loadProductData()
            } else {
                toast.error(data.message)
            }

        } catch (error) {
            toast.error(error.response?.data?.message || "Something went wrong")
        }
    }

    return (
        <div>
            <div
                onClick={openModal}
                className='bg-black rounded-md text-white md:px-3.5 px-1.5 md:py-3 py-1 md:text-base text-xs cursor-pointer'
            >
                Đánh giá ngay
            </div>
            <Modal
                isOpen={modalIsOpen}
                onAfterOpen={afterOpenModal}
                onRequestClose={closeModal}
                style={customStyles}
                contentLabel="Example Modal"
            >
                <div className='flex justify-between items-start mb-7'>
                    <div>
                        <h2 className='text-red-500' ref={(_subtitle) => (subtitle = _subtitle)}>Đánh giá sản phẩm</h2>
                        <p>{productInfo?.name}</p>
                    </div>
                    <button onClick={closeModal}>X</button>
                </div>

                <div>
                    <textarea
                        className='border border-gray-300 w-60 sm:w-96 h-80 sm:h-36 px-1.5 py-1'
                        placeholder='Mời bạn chia sẻ một vài cảm nhận'
                        value={comment}
                        onChange={(e) => setComment(e.target.value)}
                    />
                </div>

                <div onClick={() => userComment()} className='bg-red-500 py-2 mt-3.5 text-white text-center cursor-pointer'>
                    Đánh giá
                </div>
            </Modal>
        </div>
    )
}

export default CommentModal