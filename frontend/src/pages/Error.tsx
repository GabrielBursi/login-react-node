import { Box, Button, Typography } from "@mui/material";
import { Link } from "react-router-dom";
import { Container } from "../components";

function Error() {
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
                
                <Typography variant='h2' component="h1" color="primary">
                    400
                </Typography>
                <Typography variant='h3' component="p">
                    Network Error.
                </Typography>
                <Typography variant='subtitle1' component="p">
                    A conexão com a API não foi bem sucedida, há algum problema com o Back-end da aplicação.
                </Typography>
                <Button component={Link} to='/login'>Voltar</Button>
            </Box>
        </Container>
    );
}

export default Error;