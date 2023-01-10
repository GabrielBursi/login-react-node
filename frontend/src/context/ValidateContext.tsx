import { createContext, useState } from "react";
import { Children } from "../types/Types";

type Context = {
    validate: boolean,
    setValidate: React.Dispatch<React.SetStateAction<boolean>>
}

export const ValidateContext = createContext({} as Context)

function ValidateContextProvider({children}: Children) {
    const [validate, setValidate] = useState<boolean>(false);

    return (
        <ValidateContext.Provider value={{validate, setValidate}}>
            {children}
        </ValidateContext.Provider>
    );
}

export default ValidateContextProvider;