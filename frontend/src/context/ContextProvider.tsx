import { Children } from "../types";
import { ValidateContextProvider, LoginContextProvider, ModalContextProvider, HeaderContextProvider, ErrorContextProvider } from "./";
import LocalStorageContextProvider from "./LocalStorageContext";

function ContextProvider({children}: Children) {
    return (
        <LocalStorageContextProvider>
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
        </LocalStorageContextProvider>
    );
}

export default ContextProvider;