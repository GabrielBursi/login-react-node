import { createContext, useState } from "react";
import { Children, THeaderContext } from "../types/Types";

export const HeaderContext = createContext({} as THeaderContext)

function HeaderContextProvider({ children }: Children) {

    const [upperCase, setUpperCase] = useState<string>();

    return (
        <HeaderContext.Provider value={
            {
                upperCase,
                setUpperCase
            }
        }>

            {children}
        </HeaderContext.Provider>
    );
}

export default HeaderContextProvider;