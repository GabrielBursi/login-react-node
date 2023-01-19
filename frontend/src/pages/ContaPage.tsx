/* eslint-disable react-hooks/exhaustive-deps */
import { useEffect, useState, useContext } from 'react';
import { MdDelete, MdEdit, MdLogout } from 'react-icons/md'

import { deleteUserById, editUserById, ApiError } from '../api';
import { Modal } from '../components';

import { ErrorContext, HeaderContext, LoginContext, ModalContext, ValidateContext } from '../context';

import { LocalStorage } from '../types/Types';

function Conta() {

    const { validate, setValidate } = useContext(ValidateContext)
    const { showModal, setShowModal } = useContext(ModalContext)
    const { email, password, name, setErro, setEmail, setName, setPassword } = useContext(LoginContext)
    const { setUpperCase } = useContext(HeaderContext)
    const { alertError } = useContext(ErrorContext)

    const [userLocalStorage, setUserLocalStorage] = useState<LocalStorage>();

    useEffect(() => {
        const login = localStorage.getItem("login");
        if (login) {
            const infoLogin = JSON.parse(login)
            let user = {...infoLogin};
            setUserLocalStorage(user);
        }

        return () => setShowModal(undefined)
    }, [validate]);

    function editUser(){

        const editedUser = {
            name,
            email,
            password
        }

        editUserById(userLocalStorage!._id, editedUser)
            .then((data) => {
                if (data instanceof ApiError) {
                    return alertError(data)
                }

                const { error, validate, name, password, _id, createAt } = data
                
                if (error) {
                    setErro(error)
                    setValidate(!validate)
                }else{
                    setValidate(validate)
                    setErro('')

                    const userLocalStorage = {
                        name,
                        email,
                        password,
                        _id,
                        createAt
                    }

                    localStorage.setItem('login', JSON.stringify(userLocalStorage))
                    setUserLocalStorage(userLocalStorage)
                    setUpperCase(`É bom ver você novamente ${name[0].toUpperCase() + name.substring(1)}.`)
                    setShowModal(undefined)
                }

            }).catch(err => {
                alert(err);
            })
        
    }

    function logout(){
        localStorage.removeItem('login')
        setValidate(!validate)
        setShowModal(undefined)
        setEmail('')
        setName('')
        setPassword('')
    }

    function deleteUser(){
        deleteUserById(userLocalStorage!._id).then(() =>{
            logout()
        }).catch(err => {
            alert(err);
        })
        setShowModal(undefined)
        setEmail('')
        setName('')
        setPassword('')
    }

    const questionEdit = 'Edite suas informações da conta'
    const infoEdit = 'Você pode editar suas informações quando quiser, nome, email e senha.'
    const btnEdit = 'Pronto'

    const questionLogout = 'Tem certeza que deseja sair da sua conta?'
    const infoLogout = 'Isso fará com que você tenha que fazer login novamente para acessar a página.'
    const btnLogout = 'Sair da conta'

    const questionDelete = 'Tem certeza que deseja apagar sua conta?'
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
                        <button type="button" onClick={() => { setShowModal('editar') }}>Editar<MdEdit /></button>
                        <button type="button" onClick={() => { setShowModal('sair') }}>Sair<MdLogout /></button>
                        <button type="button" onClick={() => { setShowModal('apagar') }}>Apagar Conta<MdDelete/> </button>
                    </div>
                </section>
            </div>
            {showModal === 'editar' && 
                <Modal 
                    question={questionEdit} 
                    info={infoEdit} 
                    btnText={btnEdit} 
                    action={editUser} 
                    edit={true}
                    user={userLocalStorage}
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