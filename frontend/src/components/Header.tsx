import { Link } from 'react-router-dom';

import './styles/header.css'

function Header() {
    return (
        <header>
            <h1>My API</h1>
            <ul>
                <li><Link to='/'>Home</Link></li>
                <li><Link to='/login'>Login</Link></li>
                <li><Link to='/sobre'>Sobre o projeto</Link></li>
                <li><a href='https://github.com/GabrielBursi/login-react-node'>Repositório GitHub</a></li>
            </ul>
        </header>
    );
}

export default Header;