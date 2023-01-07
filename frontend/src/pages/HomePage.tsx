import { useEffect, useState } from "react";
import { ApiError } from "../api/ApiError";
import { getAll } from "../api/ApiServices";
import ApiType from "../types/ApiType";

import './styles/home.css'

function HomePage() {

    const [users, setUsers] = useState<ApiType[]>([]);

    useEffect(() => {
        getAll().then(users => {
            if(users instanceof ApiError){
                alert(users.message)
            }else{
                setUsers(users);
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
                <span>Todos usuarios cadastrados no banco de dados MongoDB:</span>
                <code className="user-data">
                    {users.map((user) => {
                        return (
                            <span key={user._id}>
                                Nome: {user.name} Email: {user.email} Senha: {user.password}
                            </span>
                        )
                    })}
                </code>
            </div>
        </div>
    );
}

export default HomePage;