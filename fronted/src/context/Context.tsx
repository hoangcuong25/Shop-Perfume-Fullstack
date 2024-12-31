import axios from "axios";
import { createContext, useEffect, useState } from "react";
import { toast } from "react-toastify";

export const AppContext = createContext()

interface ProductData {
    name: string;
    des: string;
    brand: string;
    type: string;
    oldPrice: string;
    newPrice: string;
    image: File | null;
}

const AppContextProvider = (props) => {

    const [token, setToken] = useState(localStorage.getItem('token') ? localStorage.getItem('token') : false)

    const [navbar, setNavbar] = useState<string>('')
    const [userData, setUserData] = useState(false)
    const [productData, setProductData] = useState<ProductData>()

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

    const loadProductData = async () => {
        try {
            const { data } = await axios.get(backendUrl + '/api/user/get-product')

            if (data.success) {
                setProductData(data.dataProduct)

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
        productData, setProductData,
        loadProductData
    }

    useEffect(() => {
        if (token) {
            loadUserProfileData()
        } else {
            setUserData(false)
        }
    }, [token])

    useEffect(() => {
        loadProductData()
    }, [])

    return (
        <AppContext.Provider value={value}>
            {props.children}
        </AppContext.Provider>
    )
}

export default AppContextProvider