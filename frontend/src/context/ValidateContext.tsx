import { createContext, useState } from "react";
import { Children, TValidateContext } from "../types/Types";

export const ValidateContext = createContext({} as TValidateContext)

function ValidateContextProvider({children}: Children) {

    const [validate, setValidate] = useState<boolean>(false);

    return (
        <ValidateContext.Provider value={
                {
                    validate, 
                    setValidate, 
                }
            }>

            {children}
        </ValidateContext.Provider>
    );
}

export default ValidateContextProvider;