import { createContext, useCallback, useContext, useState } from "react";
import { useNavigate } from 'react-router-dom';
import { ApiError } from "../api";
import { Children, TErrorContext } from "../types";
import { HeaderContext } from "./HeaderContext";

export const ErrorContext = createContext({} as TErrorContext)


function ErrorContextProvider({children} : Children) {

    const navigate = useNavigate()
    const [showErrorInfo, setShowErrorInfo] = useState<boolean>(false);

    const [errorName, setErrorName] = useState<string>('');
    const [errorEmail, setErrorEmail] = useState<string>('');
    const [errorPassword, setErrorPassword] = useState<string>('');

    const {setUpperCase} = useContext(HeaderContext)

    const alertError = useCallback((data: ApiError) => {
        alert(`Ops! Aconteceu um erro: ${data.message}`)
        localStorage.removeItem('login')
        setUpperCase('')
        setShowErrorInfo(true)
        navigate('/error')
    },[])

    return (
        <ErrorContext.Provider value={{ 
            alertError, 
            showErrorInfo, 
            setShowErrorInfo, 
            errorName, 
            setErrorName, 
            errorEmail, 
            setErrorEmail, 
            errorPassword, 
            setErrorPassword 
        }}>
            {children}
        </ErrorContext.Provider>
    );
}

export default ErrorContextProvider;