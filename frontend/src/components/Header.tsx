import { Link } from 'react-router-dom';
import { useContext } from 'react';
import { ValidateContext } from '../context/ValidateContext';


import './styles/header.css'

function Header() {

    const { validate } = useContext(ValidateContext)

    return (
        <header>
            <h1>My API</h1>
            <ul>
                {validate && <li><Link to='/'>Home</Link></li>}
                {validate ? <li><Link to='/conta'>Minha Conta</Link></li> : <li><Link to='/login'>Login</Link></li>}
                <li><Link to='/sobre'>Sobre o projeto</Link></li>
                <li><a href='https://github.com/GabrielBursi/login-react-node'>Repositório GitHub</a></li>
            </ul>
        </header>
    );
}

export default Header;