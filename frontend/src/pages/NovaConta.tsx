import React, {useContext} from "react";
import { ApiError } from "../api/ApiError";
import { createUser } from "../api/ApiServices";
import Form from "../components/Form";
import { ValidateContext } from "../context/ValidateContext";

import '../app.css'

function NovaConta() {

    const { setValidate, setErro, erro, name, setName, email, setEmail, password, setPassword, navigate } = useContext(ValidateContext)

    function handleSubmitNovaConta(e: React.FormEvent<HTMLFormElement>){
        e.preventDefault()

        const newUser = {
            name,
            email,
            password,
        }

        createUser(newUser).then((data)=> {
            if(data instanceof ApiError){
                return
            }

            const { error, validate, passwordHash } = data
            if (error) {
                setErro(error)
                setValidate(false)
            } else {
                setValidate(validate)
                setErro('')
                navigate('/')

                newUser.password = passwordHash
                const {email, password} = newUser
                const userLocalStorage = { email, password }
    
                localStorage.setItem("login", JSON.stringify(userLocalStorage));
            }

        })
    }

    return (
        <div className="container">
            <Form
                erro={erro}
                email={email}
                name={name}
                setName={setName}
                setEmail={setEmail}
                password={password}
                setPassword={setPassword}
                handleSubmitNovaConta={handleSubmitNovaConta}
                haveAccount={false}
            />
        </div>
    );
}

export default NovaConta;