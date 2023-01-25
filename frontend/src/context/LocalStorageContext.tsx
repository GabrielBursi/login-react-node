import { createContext, useState, useCallback } from "react";
import { Children, LocalStorage, NavigateFunction, TLocalStorageContext,  } from "../types";

export const LocalStorageContext = createContext({} as TLocalStorageContext)

function LocalStorageContextProvider({ children }: Children) {

    const [userLocalStorage, setUserLocalStorage] = useState<LocalStorage>();

    const getUserLocalStorage = useCallback((
        setUpperCase?: React.Dispatch<React.SetStateAction<string | undefined>>,
        setValidate?: React.Dispatch<React.SetStateAction<boolean>>,
        navigate?: NavigateFunction
    ) => {
        const login = localStorage.getItem("login");
        if (login) {
            const user = JSON.parse(login)
            setUserLocalStorage(user);
            setUpperCase?.(`É bom ver você novamente ${(user.name[0].toUpperCase() + user.name.substring(1).split(' ')[0])}.`)

            setValidate?.(true)
            navigate?.('/')
        } else {
            setUpperCase?.('')
        }
    }, [])

    return (
        <LocalStorageContext.Provider value={
            {
                userLocalStorage,
                setUserLocalStorage,
                getUserLocalStorage
            }
        }>

            {children}
        </LocalStorageContext.Provider>
    );
}

export default LocalStorageContextProvider;

/* 
const login = localStorage.getItem("login");
if(login){
    setValidate(true)
    navigate('/')
}


*/ 