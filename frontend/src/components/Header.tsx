/* eslint-disable react-hooks/exhaustive-deps */
import { useContext, useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

import { HeaderContext, ValidateContext } from '../context';

import { LocalStorage } from '../types/Types';
import HeaderItem from './HeaderItem';

function Header() {

    const { validate } = useContext(ValidateContext)
    const { setUpperCase, upperCase } = useContext(HeaderContext)

    const [userLocalStorage, setUserLocalStorage] = useState<LocalStorage>();

    useEffect(() => {
        const login = localStorage.getItem("login");
        if (login) {
            const infoLogin = JSON.parse(login)
            let user = { ...infoLogin };
            setUserLocalStorage(user);
            setUpperCase(`É bom ver você novamente ${user.name[0].toUpperCase() + user.name.substring(1)}.`)
        }else{
            setUpperCase('')
        }
    }, [validate]);

    
    return (
        <header>
            <div className='header-logo'>
                <Link to='/'><h1>My API </h1></Link>
                <span>{upperCase}</span>
            </div>
            <nav>
                {validate && <HeaderItem label='Home' to='/'/>}
                {validate ? <HeaderItem label='Minha conta' to={`/conta/${userLocalStorage?._id}`} /> : <HeaderItem label='Login' to='/login' />}
                <HeaderItem label='Sobre o projeto' to='/sobre' />
                <a href='https://github.com/GabrielBursi/login-react-node'>Repositório GitHub</a>
            </nav>
        </header>
    );
}

export default Header;