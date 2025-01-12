import axios from "axios";
import { createContext, useEffect, useState } from "react";
import { toast } from "react-toastify";

export const AppContext = createContext()

const AppContextProvider = (props) => {

    const [token, setToken] = useState(localStorage.getItem('atoken') ? localStorage.getItem('atoken') : false)

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

        } catch (error) {
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

        } catch (error) {
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

        } catch (error) {
            toast.error(
                error.response?.data?.message || "Something went wrong"
            )
        }
    }

    const value = {
        backendUrl,
        getAllUser,
        users, setUsers,
        getAllProduct,
        products, setProducts,
        getAllOrder,
        orders, setOrders,
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
            {props.children}
        </AppContext.Provider>
    )
}

export default AppContextProvider
