import { Children } from "../types";
import { ValidateContextProvider, LoginContextProvider, ModalContextProvider, HeaderContextProvider, ErrorContextProvider } from "./";

function ContextProvider({children}: Children) {
    return (
        <ErrorContextProvider>
            <ValidateContextProvider>
                <HeaderContextProvider>
                    <LoginContextProvider>
                        <ModalContextProvider>
                            {children}
                        </ModalContextProvider>
                    </LoginContextProvider>
                </HeaderContextProvider>
            </ValidateContextProvider>
        </ErrorContextProvider>
    );
}

export default ContextProvider;