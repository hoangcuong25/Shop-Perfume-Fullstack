/* eslint-disable @typescript-eslint/no-explicit-any */
import axios from "axios";
import React, { createContext, ReactNode, useEffect, useState } from "react";
import { toast } from "react-toastify";

export type CartItem = {
    product: ProductData
    quantity: number
}

export type ProductData = {
    _id: string
    name: string
    des: string
    brand: string
    type: string
    oldPrice: number
    newPrice: number
    image: string | null
    comments: []
}

export type UserData = {
    _id: string
    firstName: string
    lastName: string
    email: string
    phone: string
    password: string
    dob: string
    image: string | null
    address: string
    gender: string
    cart: CartItem[]
    wishlist: ProductData[]
}

export type OrderData = {
    _id: string
    userId: string
    status: string
    productList: []
    date: string
    price: number
    optionShip: string
    optionPayment: string
}

interface AppContextType {
    backendUrl: string
    token: string | false
    setToken: React.Dispatch<React.SetStateAction<string | false>>
    userData: UserData | false
    loadUserProfileData: () => Promise<void>
    productData: ProductData[]
    loadProductData: () => Promise<void>
    formatMoney: (amount: number) => string
    cart: CartItem[]
    sidebar: string
    setSidebar: React.Dispatch<React.SetStateAction<string>>
    wishlistProduct: (productId: string) => Promise<void>
    wishlist: ProductData[]
    isWishlist: (productId: string) => boolean
    totalPrice: () => number
    getOrder: () => Promise<void>
    order: OrderData[]
}

export const AppContext = createContext<AppContextType | any>({});

interface AppContextProviderProps {
    children: ReactNode
}

const AppContextProvider: React.FC<AppContextProviderProps> = ({ children }) => {

    const [token, setToken] = useState<string | false>(
        localStorage.getItem("token") || false
    )

    const [sidebar, setSidebar] = useState<string>('')
    const [userData, setUserData] = useState<UserData | false>(false)
    const [cart, setCart] = useState<CartItem[]>([])
    const [wishlist, setWishlist] = useState<ProductData[]>([])
    const [productData, setProductData] = useState<ProductData[]>([])
    const [order, setOrder] = useState<OrderData[]>([])

    const backendUrl = 'http://localhost:4000'

    function formatMoney(amount: number): string {
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

        } catch (error: any) {
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

        } catch (error: any) {
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
        catch (error: any) {
            toast.error(error.response?.data?.message || "Something went wrong")
        }
    }

    const isWishlist = (productId: string): boolean => {
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
        catch (error: any) {
            toast.error(error.response?.data?.message || "Something went wrong")
        }
    }

    const value = {
        backendUrl,
        token, setToken,
        userData,
        loadUserProfileData,
        productData,
        loadProductData,
        formatMoney,
        cart,
        sidebar, setSidebar,
        wishlistProduct,
        wishlist,
        isWishlist,
        totalPrice,
        getOrder,
        order,
    }

    useEffect(() => {
        loadProductData()
        getOrder()
    }, [])

    useEffect(() => {
        if (token) {
            loadUserProfileData()
        } else {
            setUserData(false)
        }
    }, [token])

    useEffect(() => {
        totalPrice()
    }, [cart])

    return (
        <AppContext.Provider value={value}>
            {children}
        </AppContext.Provider>
    )
}

export default AppContextProvider