

const Sorting = ({ setSelectedOption }) => {

    return (
        <div className="relative group">
            <div className='py-1.5 px-3.5 bg-gray-100 rounded-md shadow-md cursor-pointer'>Sắp xếp theo</div>

            <div className='absolute z-50 top-0 right-0 pt-11 hidden group-hover:block'>
                <div className='bg-gray-100 rounded-md w-fit h-fit flex flex-col gap-3.5 py-3 px-5 text-nowrap'>
                    <div
                        className='hover:text-rose-500 cursor-pointer'
                        onClick={() => setSelectedOption('Giá thấp đến cao')}
                    >
                        Giá thấp đến cao
                    </div>

                    <hr />

                    <div
                        className='hover:text-rose-500 cursor-pointer'
                        onClick={() => setSelectedOption('Giá cao đến thấp')}
                    >
                        Giá cao đến thấp
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Sorting
