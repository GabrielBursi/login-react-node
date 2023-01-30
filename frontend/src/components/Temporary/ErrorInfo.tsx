import { Alert, AlertTitle, Box } from "@mui/material";
import { useContext, useEffect } from "react";
import { ErrorContext } from "../../context";
import { ErrorInfoProps } from "../../types";

function ErrorInfo({ error, haveAccount, modal }: ErrorInfoProps) {

    const {setShowErrorInfo} = useContext(ErrorContext)

    useEffect(() => {
        setTimeout(() => {
            setShowErrorInfo(false)
        }, 1000 * 5)
    }, []);

    return (
        <Box
            sx={{
                width: "100%",
            }}
            marginBottom={1}
        >
            {(haveAccount === true && modal === false) && 
                <Alert severity="error">
                    <AlertTitle>{error}</AlertTitle>
                    Não foi possível fazer o login — <strong>cheque corretamente seus dados!</strong>
                </Alert>
                
            }
            {(haveAccount === false && modal === false) && 
                <Alert severity="warning">
                    <AlertTitle>{error}</AlertTitle>
                    Não foi possível criar sua conta — <strong>tente outro email.</strong>
                </Alert>
            }
            {(modal && haveAccount === false) &&
                <Alert severity={error === 'Informações inválidas.' ? 'error' : 'warning'}>
                    <AlertTitle>{error}</AlertTitle>
                    Não foi possível editar sua conta — <strong>{error === 'Informações inválidas.' ? 'preencha todos os campos.' : 'tente outro email.'}</strong>
                </Alert>
            }
        </Box>
    );
}

export default ErrorInfo;