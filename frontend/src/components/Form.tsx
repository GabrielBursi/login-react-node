/* eslint-disable react-hooks/exhaustive-deps */
import { useEffect, useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import { ValidateContext } from '../context/ValidateContext';
import { FormProps } from "../types/Types";
import Button from "./Button";
import FooterForm from "./FooterForm";

function Form({ 
    erro, 
    name, 
    setName, 
    email, 
    setEmail, 
    password, 
    setPassword, 
    handleSubmitLogin, 
    handleSubmitNovaConta, 
    haveAccount 
}: FormProps) {

    const {setValidate} = useContext(ValidateContext)

    const navigate = useNavigate()

    useEffect(() => {
        const login = localStorage.getItem("login");
        if(login){
            setValidate(true)
            navigate('/')
        }
    }, []);

    return (
        <div className="container">
            <div className="alert-error">
                {erro && <span>{erro}</span>}
            </div>
            <form action="#" className='login-form' onSubmit={haveAccount ? handleSubmitLogin : handleSubmitNovaConta }>
                {!haveAccount && 
                    <div className="field">
                        <label htmlFor="name">Nome:</label>
                        <input
                            type="text"
                            name="name"
                            id="name"
                            autoComplete="off"
                            placeholder='Seu nome'
                            value={name}
                            onChange={(e) => setName(e.target.value)}
                        />
                    </div>}
                
                <div className="field">
                    <label htmlFor="email">Email:</label>
                    <input
                        type="email"
                        name="email"
                        id="email"
                        autoComplete="off"
                        placeholder='Seu melhor email'
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
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                    />
                </div>
                <div className="field-btn">
                    <Button text={haveAccount ? 'Entrar' : 'Criar conta'}/>
                    <FooterForm 
                        text={haveAccount ? 'Não tem conta?' : 'Já possui uma conta ?'} 
                        login={haveAccount ? 'Crie uma agora' : 'Faça login'} 
                        route={haveAccount ? '/criar' : '/login'}
                    />
                </div>
            </form>
        </div>
    );
}

export default Form;