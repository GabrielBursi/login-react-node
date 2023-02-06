import { Box, Button, Typography } from "@mui/material";
import { useContext } from "react";
import { useNavigate } from "react-router-dom";
import { Container } from "../components";
import { ErrorContext, LoginContext, MediaQueryContext } from "../context";

function Error() {

    const { mdDown, smDown } = useContext(MediaQueryContext)
    const { setEmail, setPassword, setName } = useContext(LoginContext)
    const { setShowErrorInfo } = useContext(ErrorContext)

    const navigate = useNavigate()

    function handleClick(){
        setEmail('')
        setName('')
        setPassword('')
        setShowErrorInfo(false)
        navigate('/login')
    }

    return (
        <Container>
            <Box
                sx={{
                    display: "flex",
                    flexDirection: "column",
                    justifyContent: "center",
                    alignItems: "center"
                }}
            >
                
                <Typography variant={smDown ? 'h2' : 'h1'} component="h1" color="primary">
                    400
                </Typography>
                <Typography variant={smDown ? 'h4' : mdDown ? 'h3' : 'h2'} component="p">
                    Network Error.
                </Typography>
                <Typography variant={smDown ? 'body2' : mdDown ? 'subtitle1' : 'body1'} component="p" align="center" maxWidth='70%' color='#616161'>
                    A conexão com a API não foi bem sucedida, há algum problema com o Back-end da aplicação.
                </Typography>
                <Button size="large" onClick={handleClick}>Voltar</Button>
            </Box>
        </Container>
    );
}

export default Error;