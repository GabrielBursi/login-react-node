import { useContext } from 'react'
import { Box, LinearProgress, Typography, Link } from '@mui/material';
import { ErrorContext, LoginContext } from "../../context";
import { FooterFormProps } from '../../types';
import ButtonComponent from './ButtonComponent';
import { useNavigate } from 'react-router-dom';


function FooterForm({ text, login, route, haveAccount }: FooterFormProps) {

    const { setErro, setEmail, setName, setPassword, isLoading } = useContext(LoginContext)
    const { setShowErrorInfo } = useContext(ErrorContext)

    const navigate = useNavigate()

    function clearInfos(){
        setErro("")
        setEmail("")
        setName("")
        setPassword("")
        setShowErrorInfo(false)
        navigate(`${route}`)
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
            {!isLoading && 
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
                    <Link onClick={clearInfos} underline='none' sx={{cursor:'pointer'}}>{login}</Link>
                </Typography>
            }
        </Box>
    );
}

export default FooterForm;