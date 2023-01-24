import { Alert, AlertTitle, Box } from "@mui/material";
import { useContext, useEffect } from "react";
import { ErrorContext } from "../../context";
import { ErrorInfoProps } from "../../types";



function ErrorInfo({ error, haveAccount }: ErrorInfoProps) {

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
                height: "10%",
            }}
        >
            {error && haveAccount ?
                <Alert severity="error">
                    <AlertTitle>{error}</AlertTitle>
                    Não foi possível fazer o login — <strong>cheque corretamente seus dados!</strong>
                </Alert>
                :
                <Alert severity="warning">
                    <AlertTitle>{error}</AlertTitle>
                    Não foi possível criar sua conta — <strong>tente outro email.</strong>
                </Alert>
            }
        </Box>
    );
}

export default ErrorInfo;