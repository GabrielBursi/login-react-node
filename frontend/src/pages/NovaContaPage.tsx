import React, {useContext} from "react";
import { useNavigate } from "react-router-dom";

import { ApiError, createUser } from "../api/";

import {Form} from "../components";

import { LoginContext, ValidateContext } from '../context';

function NovaConta() {

    const { setValidate } = useContext(ValidateContext)
    const { setErro, erro, email, setEmail, password, setPassword, name, setName } = useContext(LoginContext)

    const navigate = useNavigate()

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

            const { error, validate, password, _id, createAt } = data
            if (error) {
                setErro(error)
                setValidate(!validate)
            } else {
                setValidate(validate)
                setErro('')
                navigate('/')

                const userLocalStorage = {
                    name, 
                    email, 
                    password, 
                    _id, 
                    createAt 
                }
    
                localStorage.setItem("login", JSON.stringify(userLocalStorage));
                setName('')
                setEmail('')
                setPassword('')
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