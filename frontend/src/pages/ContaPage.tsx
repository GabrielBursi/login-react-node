import { useEffect, useState, useContext } from 'react';

import { deleteUserById } from '../api';

import { ValidateContext } from '../context';

import { LocalStorage } from '../types/Types';

function Conta() {

    const { validate, setValidate } = useContext(ValidateContext)

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
        deleteUserById(userLocalStorage!._id).then((res) =>{
            console.log(res);
            logout()
        }).catch(err => {
            console.log(err);
        })
    }

    return (
        <div className="container">
            <div className="minha-conta">
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
                        <button type="button" onClick={()=> {}}>Editar</button>
                        <button type="button" onClick={logout}>Sair</button>
                        <button type="button" onClick={deleteUser}>Excluir Conta</button>
                    </div>
                </section>
            </div>
        </div>
    );
}

export default Conta;