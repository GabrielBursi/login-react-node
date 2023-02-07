import React, { useContext } from "react";
import { useNavigate } from "react-router-dom";
import * as yup from 'yup';

import { ApiError, createUser } from "../../api";

import {Container, Form} from "../../components";

import { ErrorContext, HeaderContext, LoginContext, ValidateContext } from '../../context';
import { SchemaCreateAndEditAccount } from "../../types";

const createAccountSchema: yup.SchemaOf<SchemaCreateAndEditAccount> = yup.object().shape({
    name: yup.string().required().min(2),
    email: yup.string().required().email(),
    password: yup.string().required().min(6),
});

function NovaConta() {

    const { setValidate } = useContext(ValidateContext)
    const { setErro, error, email, setEmail, password, setPassword, name, setName, setIsLoading } = useContext(LoginContext)
    const { setUpperCase } = useContext(HeaderContext)
    const { alertError, setShowErrorInfo, setErrorName, setErrorEmail, setErrorPassword } = useContext(ErrorContext)

    const navigate = useNavigate()

    function handleSubmitNovaConta(e: React.FormEvent<HTMLFormElement>){
        e.preventDefault()

        const newUser = {
            name,
            email,
            password,
        }
    
        setIsLoading(true)

        createAccountSchema.validate(newUser, { abortEarly: false })
            .then(valid => {
                createUser(valid).then((data)=> {
                    setIsLoading(false)
                    if(data instanceof ApiError){
                        return alertError(data)
                    }
        
                    const { error, validate, _id, createAt } = data
                    if (error) {
                        setErro(error)
                        setShowErrorInfo(true)
                        setValidate(false)
                    } else {
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
            }).catch((errors: yup.ValidationError) => {
                setIsLoading(false)
                errors.inner.forEach(error => {
                    switch(error.path){
                        case 'name':
                            setErrorName(error.message);

                            break
                        case 'email':
                            setErrorEmail(error.message);

                            break
                        case 'password':
                            setErrorPassword(error.message);

                            break
                        default:
                            console.log('nenhum erro')
                            break
                    }
                });
            })

        setTimeout(() => {
            setErrorName('')
            setErrorEmail('')
            setErrorPassword('')
        }, 1000 * 3)

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