import { useContext } from "react";
import { LoginContext, ModalContext } from "../context";
import { MdOutlineClose } from 'react-icons/md'
import { LocalStorage } from "../types";

type ModalProps = {
    question: string, 
    info: string, 
    btnText: string,
    action: () => void,
    edit?: boolean,
    user?: LocalStorage
}

function Modal({question, info, btnText, action, edit, user}: ModalProps) {

    const { setShowModal } = useContext(ModalContext)
    const { setEmail, setPassword, setName, error, setErro } = useContext(LoginContext)

    function cancel(){
        setShowModal(undefined)
        setErro('')
    }
    
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
                        <div className="alert-error">
                            {error && <span>{error}</span>}
                        </div>
                        <form>
                            <label htmlFor="name">Nome:</label>
                            <input 
                                type="text" 
                                name="name" id="name" 
                                placeholder={user?.name} 
                                onChange={(e) => setName(e.target.value)} 
                                autoComplete='off'
                            />
                            <label htmlFor="email">Email:</label>
                            <input 
                                type="email" 
                                name="email" id="email" 
                                placeholder={user?.email} 
                                onChange={(e) => setEmail(e.target.value)} 
                                autoComplete='off'
                            />
                            <label htmlFor="senha">Senha:</label>
                            <input 
                                type="password" 
                                name="senha" 
                                id="senha" 
                                onChange={(e) => setPassword(e.target.value)} 
                                autoComplete='off'
                            />
                        </form>
                    </div>
                }
                <div className="actions modalBtn">
                    <button type="button" onClick={action}>{btnText}</button>
                    <button type="button" onClick={cancel}>Cancelar</button>
                </div>
            </div>
        </div>
    );
}

export default Modal;