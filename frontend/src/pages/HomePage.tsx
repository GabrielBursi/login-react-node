import { useEffect, useState } from "react";
import { ApiError } from "../api/ApiError";
import { getAll } from "../api/ApiServices";
import ApiType from "../types/ApiType";

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
        <div className="container">
            <h1>uri da API: http://localhost:3333/users</h1>
            <span>Apenas usuarios cadastrados conseguem acessar essa página</span>
            <div className="user-data">

            </div>
        </div>
    );
}

export default HomePage;