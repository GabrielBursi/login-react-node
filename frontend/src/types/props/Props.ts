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
    haveAccount: boolean
}



export type HeaderItemProps = {
    label: string;
    to: string;
}