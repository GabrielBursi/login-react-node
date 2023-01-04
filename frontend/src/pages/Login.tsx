import { Link } from 'react-router-dom';
import './styles/login.css'

function Login() {
    return (
        <div className="container-form">
            <form action="" method="post" className='login-form'>
                <div className="field">
                    <label htmlFor="email">Email:</label>
                    <input type="email" name="email" id="email" autoComplete="off" placeholder='Seu melhor email'/>
                </div>
                <div className="field">
                    <label htmlFor="password">Senha:</label>
                    <input type="password" name="password" id="password" autoComplete="off" placeholder='Digite sua senha'/>
                </div>
                <div className="field-btn">
                    <button type="submit">Entrar</button>
                    <Link to="/criar">Crie uma conta</Link>
                    <span>Apenas usuários cadastrados podem acessar.</span>
                </div>
            </form>
        </div>
    );
}

export default Login;