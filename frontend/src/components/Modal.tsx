import { useContext } from "react";
import { ModalContext } from "../context";

type ModalProps = {
    question: string, 
    info: string, 
    btnText: string,
    action: () => void,
    edit?: boolean,
}

function Modal({question, info, btnText, action, edit}: ModalProps) {

    const { setShowModal } = useContext(ModalContext)

    return (
        <div className="modal">
            <div className="header-modal">
                <h2>{question}</h2>
                <span onClick={() => setShowModal(undefined)}>X</span>
            </div>
            <hr></hr>
            <div className="body-modal">
                <span>{info}</span>
                {edit && 
                    <div>
                        <h1>teste</h1>
                    </div>
                }
                <div className="actions">
                    <button type="button" onClick={action}>{btnText}</button>
                    <button type="button" onClick={() => setShowModal(undefined)}>Cancelar</button>
                </div>
            </div>
        </div>
    );
}

export default Modal;