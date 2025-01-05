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
    image: string;
}

const AppContextProvider = (props) => {

    const [token, setToken] = useState(localStorage.getItem('token') ? localStorage.getItem('token') : false)

    const [navbar, setNavbar] = useState<string>('')
    const [sidebar, setSidebar] = useState<string>('')
    const [userData, setUserData] = useState(false)
    const [cart, setCart] = useState([])
    const [wishlist, setWishlist] = useState([])
    const [productData, setProductData] = useState<ProductData>()
    const [order, setOrder] = useState({})

    const backendUrl = 'http://localhost:4000'

    function formatMoney(amount) {
        return amount?.toString().replace(/\B(?=(\d{3})+(?!\d))/g, '.');
    }

    const loadUserProfileData = async () => {
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

    const wishlistProduct = async (productId) => {
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

    const isWishlist = (productId) => {
        return wishlist?.some((i) => i?._id === productId) || false
    }

    const totalPrice = () => {
        let totalPrice = 0

        cart.map((i) => {
            totalPrice += i?.product?.newPrice * i?.quantity
        })

        return totalPrice
    }

    const getOrder = async () => {
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