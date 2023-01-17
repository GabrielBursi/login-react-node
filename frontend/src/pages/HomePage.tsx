import { useEffect, useState } from "react";
import { ApiError, getAll } from "../api";

import {ApiType} from "../types/Types";

function HomePage() {

    const [users, setUsers] = useState<ApiType[]>([]);

    useEffect(() => {
        
        getAll().then(data => {
            if(data instanceof ApiError){
                localStorage.removeItem('login')
                alert(data.message) //!pagina de erro aqui
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
                                <p>"Senha": <span>"{user.password}",</span></p>
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