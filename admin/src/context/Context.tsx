/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable @typescript-eslint/no-explicit-any */
import axios from "axios";
import { createContext, ReactNode, useEffect, useState } from "react";
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
    users: UserData | false
    products: ProductData[]
    order: OrderData[]
    getAllUser: () => Promise<void>
    getAllProduct: () => Promise<void>
    formatMoney: (amount: number) => string
}


export const AppContext = createContext<AppContextType | any>({})

interface AppContextProviderProps {
    children: ReactNode
}

const AppContextProvider: React.FC<AppContextProviderProps> = ({ children }) => {

    const [token, setToken] = useState<string | false>(
        localStorage.getItem("atoken") || false
    )

    const backendUrl = 'https://shop-perfume-fullstack.onrender.com'

    const [users, setUsers] = useState([])
    const [products, setProducts] = useState([])
    const [orders, setOrders] = useState([])

    function formatMoney(amount: number) {
        return amount?.toString().replace(/\B(?=(\d{3})+(?!\d))/g, '.');
    }

    const getAllUser = async (): Promise<void> => {
        try {
            const { data } = await axios.get(backendUrl + '/api/admin/get-all-user')

            if (data.success) {
                setUsers(data.users)
            }

        } catch (error: any) {
            toast.error(
                error.response?.data?.message || "Something went wrong"
            )
        }
    }

    const getAllProduct = async (): Promise<void> => {
        try {
            const { data } = await axios.get(backendUrl + '/api/admin/get-all-product')

            if (data.success) {
                setProducts(data.products)
            }

        } catch (error: any) {
            toast.error(
                error.response?.data?.message || "Something went wrong"
            )
        }
    }

    const getAllOrder = async (): Promise<void> => {
        try {
            const { data } = await axios.get(backendUrl + '/api/admin/get-all-order')

            if (data.success) {
                setOrders(data.orders)
            }

        } catch (error: any) {
            toast.error(
                error.response?.data?.message || "Something went wrong"
            )
        }
    }

    const value = {
        backendUrl,
        getAllUser,
        users,
        getAllProduct,
        products,
        orders,
        formatMoney,
        token, setToken
    }

    useEffect(() => {
        getAllUser()
        getAllProduct()
        getAllOrder()
    }, [])


    return (
        <AppContext.Provider value={value}>
            {children}
        </AppContext.Provider>
    )
}

export default AppContextProvider
