import { createContext, useCallback } from "react";
import { useNavigate } from 'react-router-dom';
import { ApiError } from "../api";
import { Children, TErrorContext } from "../types/Types";

export const ErrorContext = createContext({} as TErrorContext)


function ErrorContextProvider({children} : Children) {

    const navigate = useNavigate()

    const alertError = useCallback((data: ApiError) => {
        localStorage.removeItem('login')
        navigate('/error')
        alert(data.message)
    },[])

    return (
        <ErrorContext.Provider value={{alertError}}>
            {children}
        </ErrorContext.Provider>
    );
}

export default ErrorContextProvider;