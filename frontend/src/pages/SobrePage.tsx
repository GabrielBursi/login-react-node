import { Box } from "@mui/material";
import Typography from "@mui/material/Typography";
import { Container } from "../components";

function Sobre() {
    return (
        <Container>
            <Box display="flex" gap={2} flexDirection="column">
                <Box display="flex" gap={2} flexDirection="column">
                    <Box>
                        <Typography color='primary' variant='h2'>
                            Sobre o projeto
                        </Typography>
                    </Box>
                    <Box flex={1} display="flex" gap={2} flexDirection="column">
                        <Typography variant='h5'>
                            A ideia principal do projeto é deixar a página principal, onde contém os dados da API, acessível apenas para quem estiver logado em uma conta.
                        </Typography>
                        <Typography variant='h5'>
                            A autenticação acontece pelo back-end que retorna para o usuário um objeto com os dados da conta com uma propriedade <i>validate</i>, caso o login exista ou caso ele crie uma conta. O front-end utiliza esses dados para salvar em Local Storage e validar se o usuário está logado ou não.
                        </Typography>
                    </Box>
                </Box>
                <Box display="flex" gap={2} flexDirection="column">
                    <Box>
                        <Typography color='primary' variant='h3'>
                            Tecnologias:
                        </Typography>
                    </Box>
                    <Box>
                        <Typography variant='h5'>
                            React com TypeScript - Material UI - React Router Dom - Axios -NodeJS(Express) - MongoDB
                        </Typography>
                    </Box>
                </Box>
            </Box>
        </Container>
    );
}

export default Sobre;