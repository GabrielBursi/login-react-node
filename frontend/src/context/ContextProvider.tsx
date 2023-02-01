import { Children } from "../types";
import { 
    ValidateContextProvider, 
    LoginContextProvider, 
    ModalContextProvider, 
    HeaderContextProvider, 
    ErrorContextProvider, 
    MediaQueryContextProvider, 
    LocalStorageContextProvider
} from "./";

function ContextProvider({children}: Children) {
    return (
        <LocalStorageContextProvider>
            <MediaQueryContextProvider>
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
            </MediaQueryContextProvider>
        </LocalStorageContextProvider>
    );
}

export default ContextProvider;