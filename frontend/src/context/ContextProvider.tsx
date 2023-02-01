import { Children } from "../types";
import { 
    ValidateContextProvider, 
    LoginContextProvider, 
    ModalContextProvider, 
    HeaderContextProvider, 
    ErrorContextProvider, 
    MediaQueryContextProvider, 
    LocalStorageContextProvider,
    DrawerContextProvider
} from "./";

function ContextProvider({children}: Children) {
    return (
        <LocalStorageContextProvider>
            <MediaQueryContextProvider>
                <HeaderContextProvider>
                    <DrawerContextProvider>
                        <ErrorContextProvider>
                            <ValidateContextProvider>
                                <LoginContextProvider>
                                    <ModalContextProvider>
                                        {children}
                                    </ModalContextProvider>
                                </LoginContextProvider>
                            </ValidateContextProvider>
                        </ErrorContextProvider>
                    </DrawerContextProvider>
                </HeaderContextProvider>
            </MediaQueryContextProvider>
        </LocalStorageContextProvider>
    );
}

export default ContextProvider;