import { Children } from "../types/Types";
import { ValidateContextProvider, LoginContextProvider, ModalContextProvider, HeaderContextProvider } from "./";

function ContextProvider({children}: Children) {
    return (
        <ValidateContextProvider>
            <HeaderContextProvider>
                <LoginContextProvider>
                    <ModalContextProvider>
                        {children}
                    </ModalContextProvider>
                </LoginContextProvider>
            </HeaderContextProvider>
        </ValidateContextProvider>
    );
}

export default ContextProvider;