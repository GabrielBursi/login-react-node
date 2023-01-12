import { RelativeRoutingType, To } from "react-router-dom"

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
    children: JSX.Element[]
}

export type ChildrenRoute = {
    children: JSX.Element
}

export type Context = {
    validate: boolean,
    setValidate: React.Dispatch<React.SetStateAction<boolean>>,
    erro: string | undefined,
    setErro: React.Dispatch<React.SetStateAction<string | undefined>>,
    name: string,
    setName: React.Dispatch<React.SetStateAction<string>>,
    email: string,
    setEmail: React.Dispatch<React.SetStateAction<string>>,
    password: string,
    setPassword: React.Dispatch<React.SetStateAction<string>>,
    navigate: NavigateFunction
}

type NavigateFunction = {
    (
        to: To,
        options?: {
            replace?: boolean;
            state?: any;
            relative?: RelativeRoutingType;
        }
    ): void;
    (delta: number): void;
}

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

