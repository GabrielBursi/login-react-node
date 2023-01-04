import { useState } from 'react';
import { Link } from 'react-router-dom';

import './styles/login.css'

function Login() {

    const [email, setEmail] = useState<string>();
    const [senha, setSenha] = useState<string>();

    function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
        e.preventDefault()

        console.log('Submit!', { email, senha });
    }

    return (
        <div className="container-form">
            <form action="" method="post" className='login-form' onSubmit={handleSubmit}>
                <div className="field">
                    <label htmlFor="email">Email:</label>
                    <input 
                        type="email" 
                        name="email" 
                        id="email" 
                        autoComplete="off" 
                        placeholder='Digite seu email' 
                        value={email} 
                        onChange={(e) => setEmail(e.target.value)}
                    />
                </div>
                <div className="field">
                    <label htmlFor="password">Senha:</label>
                    <input 
                        type="password" 
                        name="password" 
                        id="password" 
                        autoComplete="off" 
                        placeholder='Digite sua senha'
                        onChange={(e) => setSenha(e.target.value)}
                    />
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