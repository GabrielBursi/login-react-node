import { useEffect, useState, useContext } from 'react';

import '../app.css'
import {ValidateContext} from '../context/ValidateContext';
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
                        <button type="button">Editar Nome</button>
                        <button type="button">Editar Email</button>
                        <button type="button">Editar Senha</button>
                        <button type="button" onClick={logout}>Sair</button>
                        <button type="button">Excluir Conta</button>
                    </div>
                </section>
            </div>
        </div>
    );
}

export default Conta;