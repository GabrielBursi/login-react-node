import { Children } from "../types";
import { ValidateContextProvider, LoginContextProvider, ModalContextProvider, HeaderContextProvider, ErrorContextProvider } from "./";
import LocalStorageContextProvider from "./LocalStorageContext";

function ContextProvider({children}: Children) {
    return (
        <LocalStorageContextProvider>
            <HeaderContextProvider>
                <ErrorContextProvider>
                    <ValidateContextProvider>
                        <LoginContextProvider>
                            <ModalContextProvider>
                                {children}
                            </ModalContextProvider>
                        </LoginContextProvider>
                    </ValidateContextProvider>
                </ErrorContextProvider>
            </HeaderContextProvider>
        </LocalStorageContextProvider>
    );
}

export default ContextProvider;