import { useEffect, useState, useContext } from 'react';

import { deleteUserById } from '../api';
import { Modal } from '../components';

import { ModalContext, ValidateContext } from '../context';

import { LocalStorage } from '../types/Types';

function Conta() {

    const { validate, setValidate } = useContext(ValidateContext)
    const { showModal, setShowModal } = useContext(ModalContext)

    const [userLocalStorage, setUserLocalStorage] = useState<LocalStorage>();

    useEffect(() => {
        const login = localStorage.getItem("login");
        if (login) {
            const infoLogin = JSON.parse(login)
            let user = {...infoLogin};
            setUserLocalStorage(user);
        }
    }, [validate]);

    function logout(){
        localStorage.removeItem('login')
        setValidate(false)
    }

    function deleteUser(){
        deleteUserById(userLocalStorage!._id).then(() =>{
            logout()
        }).catch(err => {
            alert(err);
        })
    }

    const questionEdit = 'Edite suas informações da conta'
    const infoEdit = 'Você pode editar suas informações quando quiser, nome, email e senha.'
    const btnEdit = 'Pronto'

    const questionLogout = 'Tem certeza que deseja sair da sua conta?'
    const infoLogout = 'Isso fará com que você tenha que fazer login novamente para acessar a página.'
    const btnLogout = 'Sair'

    const questionDelete = 'Tem certeza que deseja excluir sua conta?'
    const infoDelete = 'Isso fará com que você tenha que criar outra conta para acessar a página.'
    const btnDelete = 'Apagar conta'

    return (
        <div className="container">
            <div className={`${showModal !== undefined ? 'modalOpen' : 'minha-conta'}`}>
                <div className="header-minha-conta">
                    <h1>Minha conta</h1>
                </div>
                <section className="info-container">
                    <div className='info-conta'>
                        <p>Nome: <span>{userLocalStorage?.name}</span></p>
                        <p>Email: <span>{userLocalStorage?.email}</span></p>
                        <p>Conta criada em: <span>{userLocalStorage?.createAt}</span></p>
                    </div>
                    <div className="actions">
                        <button type="button" onClick={()=> { setShowModal('editar')} }>Editar</button>
                        <button type="button" onClick={() => { setShowModal('sair') }}>Sair</button>
                        <button type="button" onClick={() => { setShowModal('apagar') }}>Apagar Conta</button>
                    </div>
                </section>
            </div>
            {showModal === 'editar' && 
                <Modal 
                    question={questionEdit} 
                    info={infoEdit} 
                    btnText={btnEdit} 
                    action={() => console.log('editou')} 
                    edit={true}
                />
            }
            {showModal === 'sair' && 
                <Modal 
                    question={questionLogout} 
                    info={infoLogout} 
                    btnText={btnLogout} 
                    action={logout}
                />
            }
            {showModal === 'apagar' && 
                <Modal 
                    question={questionDelete} 
                    info={infoDelete} 
                    btnText={btnDelete} 
                    action={deleteUser}
                />
            }
        </div>
    );
}

export default Conta;