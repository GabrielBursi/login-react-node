import { createContext, useState } from "react";
import { useNavigate } from "react-router-dom";
import { Children, Context } from "../types/Types";

export const ValidateContext = createContext({} as Context)

function ValidateContextProvider({children}: Children) {

    const [validate, setValidate] = useState<boolean>(false);
    const [erro, setErro] = useState<string>();

    const [name, setName] = useState<string>('');
    const [email, setEmail] = useState<string>('');
    const [password, setPassword] = useState<string>('');

    const navigate = useNavigate()

    return (
        <ValidateContext.Provider value={
                {
                    validate, 
                    setValidate, 
                    erro, 
                    setErro,
                    name,
                    setName,
                    email,
                    setEmail,
                    password,
                    setPassword,
                    navigate
                }
            }>

            {children}
        </ValidateContext.Provider>
    );
}

export default ValidateContextProvider;