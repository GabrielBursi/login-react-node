/* eslint-disable react-hooks/exhaustive-deps */
import { Box, TextField } from '@mui/material';
import { useEffect, useContext } from 'react';
import { useNavigate } from 'react-router-dom';

import { ErrorContext, ValidateContext } from '../../context';

import { FormProps } from "../../types";
import { FooterForm} from '..'
import ErrorInfo from '../Temporary/ErrorInfo';

function Form({ 
    error, 
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
    const { showErrorInfo } = useContext(ErrorContext)

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
                    {showErrorInfo && <ErrorInfo error={error} haveAccount={haveAccount}/>}
                    
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