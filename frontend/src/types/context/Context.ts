import { LocalStorage, NavigateFunction } from './../Types';
import { ApiError } from "../../api"
import { ModalOptions } from "../Types"

export type TValidateContext = {
    validate: boolean,
    setValidate: React.Dispatch<React.SetStateAction<boolean>>,

}

export type TLoginContext = {
    error?: string,
    setErro: React.Dispatch<React.SetStateAction<string | undefined>>,
    name: string,
    setName: React.Dispatch<React.SetStateAction<string>>,
    email: string,
    setEmail: React.Dispatch<React.SetStateAction<string>>,
    password: string,
    setPassword: React.Dispatch<React.SetStateAction<string>>,
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
    setShowErrorInfo: React.Dispatch<React.SetStateAction<boolean>>
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