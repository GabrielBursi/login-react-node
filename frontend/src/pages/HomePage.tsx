import { useEffect, useState, useContext } from "react";
import { ApiError, getAll } from "../api";
import { ErrorContext } from "../context";

import {ApiType} from "../types/Types";

function HomePage() {

    const [users, setUsers] = useState<ApiType[]>([]);

    const { alertError } = useContext(ErrorContext)

    useEffect(() => {
        
        getAll().then(data => {
            if(data instanceof ApiError){
                return alertError(data)
            }else if(data.users.length === 0){
                localStorage.removeItem('login');
            }else{
                setUsers(data.users);
            }
        })
    }, []);
    
    return (
        <div className="container">
            <div className="home">
                <div className="api-text">
                    <h1>URL da API: <a href="http://localhost:3333/users" target="_blank" rel="noreferrer">http://localhost:3333/users</a></h1>
                </div>
                <div className="user-container">
                    <h2>Todos usuarios cadastrados no banco de dados MongoDB:</h2>
                    <div className="user-data-container">
                        {users.length > 0 ? users.map((user, index) => (
                            <div key={user._id} className='user-data'>
                                <p>Usuario: {index + 1}</p>
                                <p>"Nome": <span>"{user.name}",</span></p>
                                <p>"Email": <span>"{user.email}",</span></p>
                                <p>"Senha criptografada": <span>"{user.password?.slice(0,10)}",</span></p>
                                <p>"Data de criação da conta": <span>"{user.createAt}"</span></p>
                            </div>
                        )) : <h1>Nenhum Usuario cadastrado :(</h1>}
                    </div>
                </div>
            </div>
        </div>
    );
}

export default HomePage;