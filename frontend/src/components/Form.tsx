/* eslint-disable react-hooks/exhaustive-deps */
import { Alert, AlertTitle, Box, TextField } from '@mui/material';
import { useEffect, useContext } from 'react';
import { useNavigate } from 'react-router-dom';

import { ValidateContext } from '../context/';

import { FormProps } from "../types";
import {ButtonComponent, FooterForm} from './'

function Form({ 
    erro, 
    name, 
    setName, 
    email, 
    setEmail, 
    password, 
    setPassword, 
    handleSubmitLogin, 
    handleSubmitNovaConta, 
    haveAccount 
}: FormProps) {

    const navigate = useNavigate()

    const { setValidate } = useContext(ValidateContext)

    useEffect(() => {
        const login = localStorage.getItem("login");
        if(login){
            setValidate(true)
            navigate('/')
        }
    }, []);

    return (
        <Box
            sx={{
                width:"100%",
                height:"100%",
            }}
        >
            <form action="#" className='login-form' onSubmit={haveAccount ? handleSubmitLogin : handleSubmitNovaConta }>
                <Box
                    sx={{
                        width: "100%",
                        height: "100%",
                        display:"flex",
                        flexDirection: "column",
                        justifyContent:"space-between"
                    }}
                >

                    <Box
                        sx={{
                            width: "100%",
                            height: "10%",
                        }}
                    >
                        {erro &&  haveAccount ? 
                            <Alert severity="error">
                                <AlertTitle>{erro}</AlertTitle>
                                Não foi possível fazer o login — <strong>cheque corretamente seus dados!</strong>
                            </Alert> 
                            : 
                            <Alert severity="warning">
                                <AlertTitle>{erro}</AlertTitle>
                                Não foi possível criar sua conta — <strong>tente outro email.</strong>
                            </Alert> 
                        }
                    </Box>
                    
                    <Box
                        sx={{
                            display:"flex",
                            flexDirection:"column",
                            justifyContent:"center",
                            flex:1,
                            gap: 2,
                        }}
                    >
                        {!haveAccount && 
                            
                            <TextField 
                                id="outlined-basic" 
                                label="Nome" 
                                variant="outlined" 
                                autoComplete="off"
                                placeholder='Seu nome'
                                required
                                fullWidth
                                value={name}
                                onChange={(e) => setName(e.target.value)} 
                            />
                            
                        }
                        
                        <TextField
                            type="email"
                            name="email"
                            id="email"
                            label="Email"
                            autoComplete="off"
                            placeholder='Digite seu email'
                            required
                            fullWidth
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                        />
                        
                        <TextField
                            type="password"
                            name="password"
                            id="password"
                            label="Senha"
                            autoComplete="off"
                            placeholder='Digite sua senha'
                            required
                            fullWidth
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                        />
                        <FooterForm 
                            text={haveAccount ? 'Não tem conta?' : 'Já possui uma conta ?'} 
                            login={haveAccount ? 'Crie uma agora' : 'Faça login'} 
                            route={haveAccount ? '/criar' : '/login'}
                            haveAccount={haveAccount}
                        />
                    </Box>
                </Box>
            </form>
        </Box>
    );
}

export default Form;