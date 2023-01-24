import { Box } from "@mui/material";
import React, {useContext} from "react";
import { useNavigate } from "react-router-dom";

import { ApiError, createUser } from "../api/";

import {Form} from "../components";

import { ErrorContext, HeaderContext, LoginContext, ValidateContext } from '../context';

function NovaConta() {

    const { setValidate } = useContext(ValidateContext)
    const { setErro, erro, email, setEmail, password, setPassword, name, setName } = useContext(LoginContext)
    const { setUpperCase } = useContext(HeaderContext)
    const { alertError } = useContext(ErrorContext)

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
                return alertError(data)
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
                setUpperCase(`Seja bem-vindo(a) ${name[0].toUpperCase() + name.substring(1)}.`)
                setName('')
                setEmail('')
                setPassword('')
            }

        })
    }

    return (
        <Box
            sx={{
                width: "40%",
                height: "70%",
                display: "flex",
                justifyContent: "center",
                alignItems: "center"
            }}
            padding={4}
        >
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
        </Box>
    );
}

export default NovaConta;