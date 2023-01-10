import { useState, useContext } from 'react';
import { Link } from 'react-router-dom';
import { login } from '../api/ApiServices';
import { ValidateContext } from '../context/ValidateContext';

import './styles/login.css'

type DataLogin = {
    error: string,
    validate: boolean
}

function Login() {

    const {validate, setValidate} = useContext(ValidateContext)

    const [email, setEmail] = useState<string>();
    const [password, setPassword] = useState<string>();
    const [erro, setErro] = useState<string>();

    function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
        e.preventDefault()

        const user = {
            email,
            password
        }

        login(user).then((data: DataLogin)=> {
            const {error, validate} = data
            if(error){
                setErro(error)
                setValidate(false)
            }else{
                setValidate(validate)
                setErro('')
            }
        })

        console.log(erro, validate);
        
    }

    return (
        <div className="container">
            <div className="alert-error">
                {erro && <span>{erro}</span>}
            </div>
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
                        onChange={(e) => setPassword(e.target.value)}
                    />
                </div>
                <div className="field-btn">
                    <button type="submit">Entrar</button>
                    <span>Não tem conta ?</span>
                    <Link to="/criar">Crie uma conta agora</Link>
                    <span>Apenas usuários cadastrados podem acessar a página.</span>
                </div>
            </form>
        </div>
    );
}

export default Login;