import axios from "axios";
import { createContext, useEffect, useState } from "react";
import { toast } from "react-toastify";

export const AppContext = createContext()

const AppContextProvider = (props) => {

    const backendUrl = 'http://localhost:4000'

    const [users, setUsers] = useState()

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

    const value = {
        backendUrl,
        getAllUser,
        users, setUsers
    }

    useEffect(() => {
        getAllUser()
    }, [])


    return (
        <AppContext.Provider value={value}>
            {props.children}
        </AppContext.Provider>
    )
}

export default AppContextProvider