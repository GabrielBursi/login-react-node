import { createContext, useState } from "react";
import { Children, TModalContext } from "../types/Types";

export const ModalContext = createContext({} as TModalContext)

function ModalContextProvider({ children }: Children) {

    const [showModal, setShowModal] = useState<boolean>(false);

    return (
        <ModalContext.Provider value={
            {
                showModal,
                setShowModal
            }
        }>

            {children}
        </ModalContext.Provider>
    );
}

export default ModalContextProvider;