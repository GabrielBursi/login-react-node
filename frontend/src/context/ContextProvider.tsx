import { Children } from "../types/Types";
import { ValidateContextProvider, LoginContextProvider, ModalContextProvider } from "./";

function ContextProvider({children}: Children) {
    return (
        <ValidateContextProvider>
            <LoginContextProvider>
                <ModalContextProvider>
                    {children}
                </ModalContextProvider>
            </LoginContextProvider>
        </ValidateContextProvider>
    );
}

export default ContextProvider;