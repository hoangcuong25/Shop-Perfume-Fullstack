import axios from "axios";
import { createContext, useEffect, useState } from "react";
import { toast } from "react-toastify";

export const AppContext = createContext()

const AppContextProvider = (props) => {

    const backendUrl = 'http://localhost:4000'

    const [users, setUsers] = useState<any[]>([])
    const [products, setProducts] = useState<any[]>([])
    const [orders, setOrders] = useState<any[]>([])

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
        orders, setOrders
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