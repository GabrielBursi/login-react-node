import { LocalStorage } from "../Types";

export type FormProps = {
    error: string | undefined,
    name?: string,
    setName: React.Dispatch<React.SetStateAction<string>>,
    email: string,
    setEmail: React.Dispatch<React.SetStateAction<string>>,
    password: string,
    setPassword: React.Dispatch<React.SetStateAction<string>>,
    handleSubmitLogin?: (e: React.FormEvent<HTMLFormElement>) => void,
    handleSubmitNovaConta?: (e: React.FormEvent<HTMLFormElement>) => void,
    haveAccount: boolean,
    text: string
}

export type HeaderItemProps = {
    label: string;
    to: string;
}

export type ButtonProps = {
    text: string
}

export type FooterFormProps = {
    text: string,
    login: string,
    route: string,
    haveAccount: boolean,
}

export type ErrorInfoProps = {
    error?: string,
    haveAccount?: boolean,
    modal?: boolean
}

export type ModalProps = {
    question: string,
    info: string,
    btnText: string,
    action: () => void,
    edit?: boolean,
    user?: LocalStorage,
    actionIcon: JSX.Element
}

export type ListItemProps = {
    to: string,
    label: string,
    icon: string,
    onClick?: () => void
}

export type TypographyComponentProps = {
    text: string,
    variant: 'h1' | 'h2' | "h3" | 'h4' | 'h5' | 'h6' | 'subtitle1' | 'subtitle2'
    color?: 'primary' | 'black'
}

export type TextProps = {
    text: string,
}