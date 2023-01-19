import { ApiError } from "../api"

export type ApiType = {
    _id?: string,
    name?: string,
    email: string | undefined,
    password: string | undefined,
    createAt?: string,
}
export type Users = {
    users: ApiType[],
    error: string
}

export type Response = {
    error: string,
    validate: boolean,
    password: string,
    email: string,
    _id: string,
    createAt: string,
    name: string
}

export type LocalStorage = Omit<Response, 'error'| 'validate'>

export type Children = {
    children: JSX.Element | JSX.Element[]
}

export type ChildrenRoute = {
    children: JSX.Element
}

export type TValidateContext = {
    validate: boolean,
    setValidate: React.Dispatch<React.SetStateAction<boolean>>,
    
}

export type TLoginContext = {
    erro: string | undefined,
    setErro: React.Dispatch<React.SetStateAction<string | undefined>>,
    name: string,
    setName: React.Dispatch<React.SetStateAction<string>>,
    email: string,
    setEmail: React.Dispatch<React.SetStateAction<string>>,
    password: string,
    setPassword: React.Dispatch<React.SetStateAction<string>>,
}

export type TModalContext = {
    showModal: ModalOptions ,
    setShowModal: React.Dispatch<React.SetStateAction<ModalOptions>>,
}

export type THeaderContext = {
    upperCase: string | undefined
    setUpperCase: React.Dispatch<React.SetStateAction<string | undefined>>
}

export type ModalOptions = 'editar' | 'sair' | 'apagar' | undefined

export type FormProps = {
    erro: string | undefined,
    name?: string,
    setName: React.Dispatch<React.SetStateAction<string>>,
    email: string,
    setEmail: React.Dispatch<React.SetStateAction<string>>,
    password: string,
    setPassword: React.Dispatch<React.SetStateAction<string>>,
    handleSubmitLogin?: (e: React.FormEvent<HTMLFormElement>) => void,
    handleSubmitNovaConta?: (e: React.FormEvent<HTMLFormElement>) => void,
    haveAccount: boolean
}

export type TErrorContext = {
    alertError: (data: ApiError) => void
}