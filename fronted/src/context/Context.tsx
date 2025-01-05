import axios from "axios";
import { createContext, useEffect, useState } from "react";
import { toast } from "react-toastify";

export const AppContext = createContext()

const AppContextProvider = (props) => {

    const [token, setToken] = useState(localStorage.getItem('token') ? localStorage.getItem('token') : false)

    const [navbar, setNavbar] = useState<string>('')
    const [sidebar, setSidebar] = useState<string>('')
    const [userData, setUserData] = useState(false)
    const [cart, setCart] = useState([])
    const [wishlist, setWishlist] = useState([])
    const [productData, setProductData] = useState()
    const [order, setOrder] = useState({})

    const backendUrl = 'http://localhost:4000'

    function formatMoney(amount: number) {
        return amount?.toString().replace(/\B(?=(\d{3})+(?!\d))/g, '.');
    }

    const loadUserProfileData = async (): Promise<void> => {
        try {
            const { data } = await axios.get(backendUrl + '/api/user/profile', { headers: { token } })

            if (data.success) {
                setUserData(data.userData)
                setCart(data.userData.cart)
                setWishlist(data.userData.wishlist)
            } else {
                toast.error(data.message)
            }

        } catch (error) {
            toast.error(error.response?.data?.message || "Something went wrong")
        }

    }

    const loadProductData = async (): Promise<void> => {
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

    const wishlistProduct = async (productId: string): Promise<void> => {
        try {
            const { data } = await axios.post(backendUrl + '/api/user/wishlist', { productId }, { headers: { token } })

            if (data.success) {
                toast.success(data.message)
                loadUserProfileData()
            }
        }
        catch (error) {
            toast.error(error.response?.data?.message || "Something went wrong")
        }
    }

    const isWishlist = (productId: string) => {
        return wishlist?.some((i) => i?._id === productId) || false
    }

    const totalPrice = (): number => {
        let totalPrice = 0

        cart.map((i) => {
            totalPrice += i?.product?.newPrice * i?.quantity
        })

        return totalPrice
    }

    const getOrder = async (): Promise<void> => {
        try {
            const { data } = await axios.get(backendUrl + '/api/user/get-order', { headers: { token } })

            if (data.success) {
                setOrder(data.orderData)
            }

        }
        catch (error) {
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
        loadProductData,
        formatMoney,
        cart, setCart,
        sidebar, setSidebar,
        wishlistProduct,
        wishlist, setWishlist,
        isWishlist,
        totalPrice,
        getOrder,
        order, setOrder
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
        getOrder()
    }, [])

    useEffect(() => {
        totalPrice()
    }, [cart])

    return (
        <AppContext.Provider value={value}>
            {props.children}
        </AppContext.Provider>
    )
}

export default AppContextProvider