import { Box } from '@mui/material';
import { useContext } from 'react'
import { Link } from "react-router-dom";
import { ErrorContext, LoginContext } from "../context";
import ButtonComponent from './ButtonComponent';

type FooterFormProps = {
    text: string,
    login: string,
    route: string,
    haveAccount: boolean,
}

function FooterForm({ text, login, route, haveAccount }: FooterFormProps) {

    const { setErro, setEmail, setName, setPassword } = useContext(LoginContext)
    const { setShowErrorInfo} = useContext(ErrorContext)

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
            <span>{text}</span>
            <Link to={`${route}`} onClick={clearInfos}>{login}</Link>
        </Box>
    );
}

export default FooterForm;