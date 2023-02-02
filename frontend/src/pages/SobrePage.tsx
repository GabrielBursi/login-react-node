import { Box } from "@mui/material";
import { Container, TextBody, Title } from "../components";

function Sobre() {
    return (
        <Container>
            <Box 
                sx={{
                    height: "100%",
                    display:"flex", 
                    gap:2, 
                    flexDirection:"column",
                    justifyContent:"start",
                }}
            >
                <Box display="flex" gap={2} flexDirection="column">
                    <Box>
                        <Title text="Sobre o projeto" noWrap/>
                    </Box>
                    <Box flex={1} display="flex" gap={2} flexDirection="column">
                        <TextBody text='A ideia principal do projeto é deixar a página principal, onde contém os dados da API, acessível apenas para quem estiver logado em uma conta.'/>
                        <TextBody text='A autenticação acontece pelo back-end que retorna para o usuário um objeto com os dados da conta com uma propriedade validate, caso o login exista ou caso ele crie uma conta. O front-end utiliza esses dados para salvar em Local Storage e validar se o usuário está logado ou não.' />
                    </Box>
                </Box>
                <Box display="flex" gap={2} flexDirection="column">
                    <Box>
                        <Title text="Tecnologias usadas:" noWrap/>
                    </Box>
                    <Box>
                        <TextBody text="React com TypeScript - Material UI - React Router Dom - Axios -NodeJS(Express) - MongoDB"/>
                    </Box>
                </Box>
            </Box>
        </Container>
    );
}

export default Sobre;