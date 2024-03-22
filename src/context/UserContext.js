import { createContext, useEffect, useState } from "react";
import axios from 'axios';


export const UserContext = createContext({});


export const UserContextProvider = ({ children }) => {
    const [userData, setUserData] = useState(null);

    const fetchData = async () => {
        const { data } = await axios.get('https://portfolio-backend-30mp.onrender.com/api/v1/get/user/65b3a22c01d900e96c4219ae')
        setUserData(data.user)

        localStorage.setItem("userData", JSON.stringify(data.user));
    }
    useEffect(() => {
        if (localStorage.getItem("userData")) {
            const data = JSON.parse(localStorage.getItem("userData"))
            return setUserData(data)

        }

        fetchData();
    }, [])

    return (
        <UserContext.Provider value={{ userData }}>
            {children}
        </UserContext.Provider>
    )
}