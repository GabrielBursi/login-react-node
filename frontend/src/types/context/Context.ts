import { LocalStorage, NavigateFunction } from './../Types';
import { ApiError } from "../../api"
import { ModalOptions } from "../Types"
import { Theme } from '@mui/material';

export type TValidateContext = {
    validate: boolean,
    setValidate: React.Dispatch<React.SetStateAction<boolean>>,

}

export type TLoginContext = {
    error?:string,
    setErro: React.Dispatch<React.SetStateAction<string | undefined>>,
    name: string,
    setName: React.Dispatch<React.SetStateAction<string>>,
    email: string,
    setEmail: React.Dispatch<React.SetStateAction<string>>,
    password: string,
    setPassword: React.Dispatch<React.SetStateAction<string>>,
    isLoading: boolean,
    setIsLoading: React.Dispatch<React.SetStateAction<boolean>>,
}

export type TModalContext = {
    showModal: ModalOptions,
    setShowModal: React.Dispatch<React.SetStateAction<ModalOptions>>,
}

export type THeaderContext = {
    upperCase?: string,
    setUpperCase: React.Dispatch<React.SetStateAction<string | undefined>>
}

export type TErrorContext = {
    alertError: (data: ApiError) => void,
    showErrorInfo: boolean,
    setShowErrorInfo: React.Dispatch<React.SetStateAction<boolean>>,
    errorName: string,
    setErrorName: React.Dispatch<React.SetStateAction<string>>,
    errorEmail: string,
    setErrorEmail: React.Dispatch<React.SetStateAction<string>>,
    errorPassword: string,
    setErrorPassword: React.Dispatch<React.SetStateAction<string>>,
}

export type TLocalStorageContext = {
    userLocalStorage?: LocalStorage,
    setUserLocalStorage: React.Dispatch<React.SetStateAction<LocalStorage | undefined>>,
    getUserLocalStorage: (
        setUpperCase?: React.Dispatch<React.SetStateAction<string | undefined>>,
        setValidate?: React.Dispatch<React.SetStateAction<boolean>>,
        navigate?: NavigateFunction
    ) => void
}

export type TMediaQueryContext = {
    xsDown: boolean,
    smDown: boolean,
    mdDown: boolean,
    lgDown: boolean,
    xlDown: boolean,
    theme: Theme
}

export type DrawerOptions = {
    icon: string,
    path: string,
    label: string
}

export type TDrawerContext = {
    isDrawerOpen: boolean,
    toggleDrawer: () => void,
    drawerOptions: DrawerOptions[],
    toggleDrawerOptions: (newDrawerOptions: DrawerOptions[]) => void
}