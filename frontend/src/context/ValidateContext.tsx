import { createContext, useState } from "react";
import { Children } from "../types/Types";

type Context = {
    validate: boolean,
    setValidate: React.Dispatch<React.SetStateAction<boolean>>,
    erro: string | undefined,
    setErro: React.Dispatch<React.SetStateAction<string | undefined>>
}

export const ValidateContext = createContext({} as Context)

function ValidateContextProvider({children}: Children) {
    const [validate, setValidate] = useState<boolean>(false);
    const [erro, setErro] = useState<string>();


    return (
        <ValidateContext.Provider value={{validate, setValidate, erro, setErro}}>
            {children}
        </ValidateContext.Provider>
    );
}

export default ValidateContextProvider;