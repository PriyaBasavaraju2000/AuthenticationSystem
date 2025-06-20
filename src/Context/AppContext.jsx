import {createContext, useEffect, useState} from "react";
import {BACKEND_URL}    from "../util/constants.js";
import axios from "axios";
import {toast} from "react-toastify";

export const AppContext = createContext();
export const AppContextProvider = (props) => {
    axios.defaults.withCredentials = true;

    const [isLoggedIn, setIsLoggedIn] = useState(false);
    const [userData, setUserData] = useState(null);

    const getUserData = async () => {
        try {
            const response = await axios.get(`${BACKEND_URL}/profile`, {withCredentials: true});
            if(response.status === 200) {
                console.log("Fetched userData ", response.data);
                setUserData(response.data);
            } else {
                toast.error("Unable to retrieve the profile");
            }
        } catch (error) {
            toast.error(error.message);
        }
    };

    const getAuthState = async () => {
        try {
            const response = await axios.get(BACKEND_URL+"/is-authenticated");
            if (response.status === 200 && response.data === true) {
                setIsLoggedIn(true);
                await getUserData();
            } else {
                setIsLoggedIn(false);
            }
        } catch (error) {
            console.log(error);
        }
    }

    useEffect(() => {
        getAuthState();
    }, []);

    const contextValue = {
        isLoggedIn,setIsLoggedIn,
        userData,setUserData,
        getUserData,
    };
    return (
        <AppContext.Provider value={contextValue}>
            {props.children}
        </AppContext.Provider>
    );
};