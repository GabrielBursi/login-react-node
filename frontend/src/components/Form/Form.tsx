/* eslint-disable react-hooks/exhaustive-deps */
import { Box, TextField } from '@mui/material';
import { useEffect, useContext } from 'react';
import { useNavigate } from 'react-router-dom';

import { ErrorContext, LocalStorageContext, MediaQueryContext, ValidateContext } from '../../context';

import { FormProps } from "../../types";
import { FooterForm, Title} from '..'
import ErrorInfo from '../Temporary/ErrorInfo';

function Form({ 
    text,
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
    const { getUserLocalStorage } = useContext(LocalStorageContext)
    const { mdDown, smDown } = useContext(MediaQueryContext)

    useEffect(() => {
        getUserLocalStorage( undefined, setValidate, navigate)
    }, []);

    return (
        <Box
            sx={{
                width:"100%",
                height:"100%",
                display: "flex",
                flexDirection: "column",
                justifyContent: "center",
                alignItems:"center"
            }}
        >
            <Box
                sx={{
                    width: "100%",
                    height: "100%",
                    display:"flex",
                    flexDirection: "column",
                    justifyContent:"center",

                }}
            >
                <Box>
                    <Title text={text}/>
                </Box>
                <Box
                    sx={{
                        height:smDown ? '50%' : mdDown ? '80%' : '100%',
                    }}
                    >
                    <form action="#" onSubmit={haveAccount ? handleSubmitLogin : handleSubmitNovaConta} style={{marginTop:"2%", height:"100%"}}>

                        <Box
                            sx={{
                                display: "flex",
                                flexDirection: "column",
                                justifyContent: "center",
                                gap: 2,
                            }}
                        >

                            {showErrorInfo && <ErrorInfo error={error} haveAccount={haveAccount} modal={false}/>}
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
                    </form>
                </Box>
            </Box>
        </Box>
    );
}

export default Form;