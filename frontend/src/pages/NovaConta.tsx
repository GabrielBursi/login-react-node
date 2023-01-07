import React, {useState} from "react";
import { createUser } from "../api/ApiServices";

function NovaConta() {

    const [name, setName] = useState<string>('');
    const [email, setEmail] = useState<string>('');
    const [password, setPassword] = useState<string>('');

    function handleSubmit(e: React.FormEvent){
        e.preventDefault()

        const newUser = {
            name,
            email,
            password,
        }

        if (
            !name || 
            !email || 
            !password
        ){
            return
        }
        
        createUser(newUser)
    }

    return (
        <div className="container-form">
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
                </div>
            </form>
        </div>
    );
}

export default NovaConta;