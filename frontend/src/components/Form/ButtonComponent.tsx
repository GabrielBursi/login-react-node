import { useContext } from 'react'
import { Box, Button } from "@mui/material";
import { LoginContext } from "../../context";

import { ButtonProps } from '../../types'

function ButtonComponent({text}: ButtonProps) {

    const { isLoading } = useContext(LoginContext)

    return (
        <Box
            sx={{
                width:"100%",
                marginBottom:2
            }}
        >
            <Button variant="contained" size="large" fullWidth type="submit" disabled={isLoading}>{text}</Button>
        </Box>
    );
}

export default ButtonComponent;