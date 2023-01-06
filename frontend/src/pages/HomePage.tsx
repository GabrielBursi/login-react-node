import { useEffect } from "react";

function HomePage() {

    useEffect(() => {
        getApi()
    }, []);

    async function getApi(){
        const api = await fetch('http://localhost:3333/api')
        const res = await api.json()
        console.log(res.users);
    }

    return (
        <div>
            <h1>Home</h1>
        </div>
    );
}

export default HomePage;