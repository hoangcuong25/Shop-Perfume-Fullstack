const Pagination = (props) => {
    const { totalPosts, postPerPage, setCurrentPage, currentPage } = props;
    let pages = [];

    for (let i = 1; i <= Math.ceil(totalPosts / postPerPage); i++) {
        pages.push(i);
    }

    const prevPage = () => {
        if (currentPage > 1) {
            setCurrentPage(currentPage - 1)
            window.scrollTo(0, 500)
        }
    }

    const nextPage = () => {
        if (currentPage < pages.length) {
            setCurrentPage(currentPage + 1)
            window.scrollTo(0, 500)
        }
    }

    return (
        <div className="mt-16 flex justify-center items-center space-x-4">
            <button
                onClick={() => prevPage()}
                className="px-4 py-2 bg-gray-200 hover:bg-gray-300 rounded-md transition-all duration-300">
                ⮜ Prev
            </button>
            {pages.map((page, index) => (
                <button
                    key={index}
                    onClick={() => setCurrentPage(page)}
                    className={`px-4 py-2 rounded-md transition-all duration-300 ${currentPage === page ? 'bg-blue-500 text-white' : 'bg-gray-100 hover:bg-gray-200'}`}
                >
                    {page}
                </button>
            ))}
            <button
                onClick={() => nextPage()}
                className="px-4 py-2 bg-gray-200 hover:bg-gray-300 rounded-md transition-all duration-300">
                Next ⮞
            </button>
        </div>
    )
}

export default Pagination