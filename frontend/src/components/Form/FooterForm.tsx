import { Box, LinearProgress, Typography } from '@mui/material';
import { useContext } from 'react'
import { Link } from "react-router-dom";
import { ErrorContext, LoginContext } from "../../context";
import { FooterFormProps } from '../../types';
import ButtonComponent from './ButtonComponent';


function FooterForm({ text, login, route, haveAccount }: FooterFormProps) {

    const { setErro, setEmail, setName, setPassword, isLoading } = useContext(LoginContext)
    const { setShowErrorInfo } = useContext(ErrorContext)

    function clearInfos(){
        setErro("")
        setEmail("")
        setName("")
        setPassword("")
        setShowErrorInfo(false)
    }
    
    return (
        <Box
            sx={{
                width:"100%",
                height:"20%",
                display:"flex",
                flexDirection:"column",
                justifyContent:"center",
                alignItems:"center",
                marginTop:2
            }}
        >
            <ButtonComponent text={haveAccount ? 'Entrar' : 'Criar conta'} />
            {isLoading && 
                <Box sx={{ width: '100%', mb:2 }}>
                    <LinearProgress />
                </Box> 
            }
            <Typography
                variant='subtitle1'
                component='span'
                sx={{
                    display: "flex",
                    flexDirection: "column",
                    justifyContent: "center",
                    alignItems: "center",
                }}
            >
                <span>{text}</span>
                <Link to={`${route}`} onClick={clearInfos}>{login}</Link>
            </Typography>
        </Box>
    );
}

export default FooterForm;