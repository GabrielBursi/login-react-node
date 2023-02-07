import React, { useContext } from "react";
import { useNavigate } from "react-router-dom";

import { ApiError, createUser } from "../../api";

import {Container, Form} from "../../components";

import { ErrorContext, HeaderContext, LoginContext, ValidateContext } from '../../context';

function NovaConta() {

    const { setValidate } = useContext(ValidateContext)
    const { setErro, error, email, setEmail, password, setPassword, name, setName, setIsLoading } = useContext(LoginContext)
    const { setUpperCase } = useContext(HeaderContext)
    const { alertError, setShowErrorInfo } = useContext(ErrorContext)

    const navigate = useNavigate()

    function handleSubmitNovaConta(e: React.FormEvent<HTMLFormElement>){
        e.preventDefault()

        const newUser = {
            name,
            email,
            password,
        }

        setIsLoading(true)
        createUser(newUser).then((data)=> {
            if(data instanceof ApiError){
                setIsLoading(false)
                return alertError(data)
            }

            const { error, validate, _id, createAt } = data
            if (error) {
                setIsLoading(false)
                setErro(error)
                setShowErrorInfo(true)
                setValidate(false)
            } else {
                setIsLoading(false)
                setValidate(validate)
                setErro('')
                navigate('/')

                const userLocalStorage = {
                    name, 
                    email, 
                    _id, 
                    createAt 
                }
    
                localStorage.setItem("login", JSON.stringify(userLocalStorage));
                setUpperCase(`Seja bem-vindo(a) ${name[0].toUpperCase() + name.substring(1)}.`)
                setName('')
                setEmail('')
                setPassword('')
            }

        })
    }

    return (
        <Container>
            <Form
                text="Criar conta"
                error={error}
                email={email}
                name={name}
                setName={setName}
                setEmail={setEmail}
                password={password}
                setPassword={setPassword}
                handleSubmitNovaConta={handleSubmitNovaConta}
                haveAccount={false}
            />
        </Container>
    );
}

export default NovaConta;