import React, {useContext, useState} from "react";
import { Link, useNavigate } from "react-router-dom";
import { createUser } from "../api/ApiServices";
import { ValidateContext } from "../context/ValidateContext";
import { DataLogin } from "../types/Types";

function NovaConta() {

    const [name, setName] = useState<string>('');
    const [email, setEmail] = useState<string>('');
    const [password, setPassword] = useState<string>('');

    const { setValidate, setErro, erro } = useContext(ValidateContext)

    const navigate = useNavigate()

    function handleSubmit(e: React.FormEvent){
        e.preventDefault()

        const newUser = {
            name,
            email,
            password,
        }

        createUser(newUser).then((data: DataLogin)=> {
            const { error, validate } = data
            if (error) {
                setErro(error)
                setValidate(false)
            } else {
                setValidate(validate)
                setErro('')
                navigate('/')
            }
        })
    }

    return (
        <div className="container">
            <div className="alert-error">
                {erro && <span>{erro}</span>}
            </div>
            <form action="#" className='login-form' onSubmit={handleSubmit}>
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
                </div>
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
                    <button type="submit">Criar nova conta</button>
                    <span>Já tem conta?</span>
                    <Link to='/login'>Faça login</Link>
                </div>
            </form>
        </div>
    );
}

export default NovaConta;