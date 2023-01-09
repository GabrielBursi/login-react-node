import { useEffect, useState } from "react";
import { ApiError } from "../api/ApiError";
import { getAll } from "../api/ApiServices";
import {ApiType} from "../types/ApiType";

import './styles/home.css'

function HomePage() {

    const [users, setUsers] = useState<ApiType[]>([]);

    useEffect(() => {
        getAll().then(data => {
            if(data instanceof ApiError){
                alert(data.message)
            }else{
                setUsers(data.users);
            }
        })
    }, []);
    
    return (
        
        <div className="container home">
            <div className="api-text">
                <h1>uri da API: <a href="http://localhost:3333/users" target="_blank" rel="noreferrer">http://localhost:3333/users</a></h1>
                <span>Apenas usuarios cadastrados conseguem acessar essa página.</span>
            </div>
            <div className="user-container">
                <h2>Todos usuarios cadastrados no banco de dados MongoDB:</h2>
                <div className="user-data-container">
                    {users.map((user, index) => (
                        <div key={user._id} className='user-data'>
                            <p>Usuario: {index + 1}</p>
                            <p>"Nome": <span>"{user.name}",</span></p>
                            <p>"Email": <span>"{user.name}",</span></p>
                            <p>"Senha": <span>"{user.password}",</span></p>
                            <p>"Data de criação da conta": <span>"{user.createAt}"</span></p>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
}

export default HomePage;