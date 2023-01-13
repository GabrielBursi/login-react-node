import { useContext } from "react";
import { ModalContext } from "../context";
import { MdOutlineClose } from 'react-icons/md'

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
                <span onClick={() => setShowModal(undefined)}><MdOutlineClose/></span>
            </div>
            <div className="body-modal">
                <span>{info}</span>
                {edit && 
                    <div className="edit-info">
                        <form>
                            <label htmlFor="name">Novo Nome:</label>
                            <input type="text" name="name" id="name" />
                            <label htmlFor="email">Novo Email:</label>
                            <input type="text" name="email" id="email" />
                            <label htmlFor="senha">Nova senha:</label>
                            <input type="password" name="senha" id="senha" />
                        </form>
                    </div>
                }
                <div className="actions modalBtn">
                    <button type="button" onClick={action}>{btnText}</button>
                    <button type="button" onClick={() => setShowModal(undefined)}>Cancelar</button>
                </div>
            </div>
        </div>
    );
}

export default Modal;