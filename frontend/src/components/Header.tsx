import { Link } from 'react-router-dom';
import { useContext, useEffect, useState } from 'react';
import { ValidateContext } from '../context/ValidateContext';

import '../app.css'
import { LocalStorage } from '../types/Types';

function Header() {

    const { validate } = useContext(ValidateContext)

    const [userLocalStorage, setUserLocalStorage] = useState<LocalStorage>();

    useEffect(() => {
        const login = localStorage.getItem("login");
        if (login) {
            const infoLogin = JSON.parse(login)
            let user = { ...infoLogin };
            setUserLocalStorage(user);
        }
    }, [validate]);

    return (
        <header>
            <h1>My API</h1>
            <ul>
                {validate && <li><Link to='/'>Home</Link></li>}
                {validate ? <li><Link to={`/conta/${userLocalStorage?._id}`}>Minha Conta</Link></li> : <li><Link to='/login'>Login</Link></li>}
                <li><Link to='/sobre'>Sobre o projeto</Link></li>
                <li><a href='https://github.com/GabrielBursi/login-react-node'>Repositório GitHub</a></li>
            </ul>
        </header>
    );
}

export default Header;