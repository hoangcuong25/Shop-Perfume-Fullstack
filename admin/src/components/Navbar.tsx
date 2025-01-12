import { useContext } from 'react'
import { useNavigate } from 'react-router-dom'
import { AppContext } from '../context/Context'

const Navbar = () => {

    const { setToken } = useContext(AppContext)

    const navigate = useNavigate()

    const logout = () => {
        navigate('/')
        setToken(false)
        localStorage.removeItem('atoken')
    }

    return (
        <div className='flex justify-between items-center px-4 sm:px-10 py-3 border-b bg-white'>
            <div className='flex items-center gap-2 text-xs'>
                <p className='text-red-500 text-2xl md:text-3xl font-medium cursor-pointer'>namperfume</p>
                <p className='border px-2.5 py-0.5 rounded-full border-gray-600'>Admin</p>
            </div>
            <button onClick={() => logout()} className='bg-red-500 text-white text-sm px-10 py-2 rounded-full'>Logout</button>
        </div>
    )
}

export default Navbar
