import React, { useRef } from 'react'
import Modal from 'react-modal';
import Search from './Search';
import { IoIosSearch } from 'react-icons/io';

const customStyles = {
    content: {
        top: '30%',
        left: '50%',
        right: '30px',
        bottom: '30%',
        marginRight: '-50%',
        transform: 'translate(-50%, -50%)',
    },
};

const SearchModal = () => {

    const subtitle = useRef<HTMLHeadingElement | null>(null)
    const [modalIsOpen, setIsOpen] = React.useState(false);

    function openModal() {
        setIsOpen(true);
    }

    const afterOpenModal = () => {
        if (subtitle.current) {
            subtitle.current.style.color = '#f00'
        }
    }

    function closeModal() {
        setIsOpen(false);
    }

    return (
        <div>
            <div onClick={openModal}>
                <IoIosSearch className='text-xl text-gray-600 cursor-pointer' />
            </div>
            <Modal
                isOpen={modalIsOpen}
                onAfterOpen={afterOpenModal}
                onRequestClose={closeModal}
                style={customStyles}
                contentLabel="Example Modal"
            >
                <div className='flex justify-between items-center'>
                    <Search modalIsOpen={modalIsOpen} />
                    <button onClick={closeModal}>X</button>
                </div>
            </Modal>
        </div>
    )
}

export default SearchModal