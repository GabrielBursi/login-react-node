import { createContext, useState } from "react";
import { Children, TLoginContext } from "../types";

export const LoginContext = createContext({} as TLoginContext)

function LoginContextProvider({ children }: Children) {

    const [error, setErro] = useState<string>();

    const [name, setName] = useState<string>('');
    const [email, setEmail] = useState<string>('');
    const [password, setPassword] = useState<string>('');

    return (
        <LoginContext.Provider value={
            {
                error,
                setErro,
                name,
                setName,
                email,
                setEmail,
                password,
                setPassword,
            }
        }>

            {children}
        </LoginContext.Provider>
    );
}

export default LoginContextProvider;