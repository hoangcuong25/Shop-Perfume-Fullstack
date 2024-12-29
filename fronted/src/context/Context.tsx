import axios from "axios";
import { createContext, useEffect, useState } from "react";
import { toast } from "react-toastify";

export const AppContext = createContext()

const AppContextProvider = (props) => {

    const [token, setToken] = useState(localStorage.getItem('token') ? localStorage.getItem('token') : false)

    const [navbar, setNavbar] = useState<string>('')
    const [userData, setUserData] = useState(false)

    const backendUrl = 'http://localhost:4000'

    const loadUserProfileData = async () => {
        try {
            const { data } = await axios.get(backendUrl + '/api/user/profile', { headers: { token } })

            if (data.success) {
                setUserData(data.userData)

            } else {
                toast.error(data.message)
            }

        } catch (error) {
            toast.error(error.response?.data?.message || "Something went wrong")
        }

    }

    const value = {
        navbar, setNavbar,
        backendUrl,
        token, setToken,
        userData, setUserData,
        loadUserProfileData,
    }

    useEffect(() => {
        if (token) {
            loadUserProfileData()
        } else {
            setUserData(false)
        }
    }, [token])

    return (
        <AppContext.Provider value={value}>
            {props.children}
        </AppContext.Provider>
    )
}

export default AppContextProvider