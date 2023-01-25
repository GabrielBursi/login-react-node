import { createContext, useState } from "react";
import { Children, LocalStorage, TLocalStorageContext,  } from "../types";

export const LocalStorageContext = createContext({} as TLocalStorageContext)

function LocalStorageContextProvider({ children }: Children) {

    const [userLocalStorage, setUserLocalStorage] = useState<LocalStorage>();

    return (
        <LocalStorageContext.Provider value={
            {
                userLocalStorage,
                setUserLocalStorage
            }
        }>

            {children}
        </LocalStorageContext.Provider>
    );
}

export default LocalStorageContextProvider;