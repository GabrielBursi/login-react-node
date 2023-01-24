import { Box, Button } from "@mui/material";

type ButtonProps = {
    text: string
}

function ButtonComponent({text}: ButtonProps) {
    return (
        <Box
            sx={{
                width:"100%",
                marginBottom:2
            }}
        >
            <Button variant="contained" size="large" fullWidth type="submit">{text}</Button>
        </Box>
    );
}

export default ButtonComponent;