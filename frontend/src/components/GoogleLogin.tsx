import { GoogleAuthProvider, signInWithPopup, getAuth } from 'firebase/auth';
import app from "../firebase.js"
import { useNavigate } from 'react-router-dom';
import { FcGoogle } from "react-icons/fc"
import axios from 'axios';
import { useContext } from 'react';
import { AppContext } from '../context/Context.js';
import { toast } from 'react-toastify';

const GoogleLogin = () => {

    const { backendUrl, setToken } = useContext(AppContext)

    const navigate = useNavigate()
    const handleGoogleClick = async () => {
        try {
            const provider = new GoogleAuthProvider();
            const auth = getAuth(app);

            const result = await signInWithPopup(auth, provider);

            console.log(result)

            const lastName = result.user.displayName?.split(" ")[0]
            const firstName = result.user.displayName?.split(" ")[1]
            const email = result.user.email
            const image = result.user.photoURL

            const { data } = await axios.post(backendUrl + "/api/user/login-google", { lastName, firstName, email, image })

            if (data.success) {
                toast.success("Đăng Nhập Thành Công")
                localStorage.setItem('token', data.token)
                setToken(data.token)
                navigate('/')
                scrollTo(0, 0)
            } else {
                toast.error(data.message)
            }


        } catch (error: any) {
            toast.error(error.response?.data?.message || "Something went wrong")
        }
    }

    return (
        <div
            onClick={handleGoogleClick}
            className="flex items-center justify-center w-full cursor-pointer group">
            <div
                className="flex items-center justify-center bg-white border border-gray-300 rounded-md shadow-md hover:shadow-lg transform transition-transform hover:scale-105 group-hover:border-red-500">
                <div className="flex items-center justify-center p-3">
                    <FcGoogle className="text-3xl " />
                </div>
                <div className="flex items-center justify-center w-full px-4 py-2 text-sm font-medium text-gray-600 group-hover:text-red-500">
                    Đăng Nhập Với Google
                </div>
            </div>
        </div>

    )
}

export default GoogleLogin
