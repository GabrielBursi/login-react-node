import { useContext } from "react";
import { Box } from "@mui/material";
import { Container, TypographyComponent } from "../components";
import { MediaQueryContext } from "../context";

function Sobre() {

    const { mdDown, smDown } = useContext(MediaQueryContext)
    
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
                        <TypographyComponent color="primary" text="Sobre o Projeto" variant={smDown ? 'h4' : mdDown ? 'h3' : 'h2'} />
                    </Box>
                    <Box flex={1} display="flex" gap={2} flexDirection="column">
                        <TypographyComponent 
                            text='A ideia principal do projeto é deixar a página principal, onde contém os dados da API, acessível apenas para quem estiver logado em uma conta.'
                            variant={smDown ? 'subtitle1' : mdDown ? 'h6' : 'h5'}
                        />
                        <TypographyComponent
                            text='A autenticação acontece pelo back-end que retorna para o usuário um objeto com os dados da conta com uma propriedade validate, caso o login exista ou caso ele crie uma conta. O front-end utiliza esses dados para salvar em Local Storage e validar se o usuário está logado ou não.'
                            variant={smDown ? 'subtitle1' : mdDown ? 'h6' : 'h5'}
                        />
                    </Box>
                </Box>
                <Box display="flex" gap={2} flexDirection="column">
                    <Box>
                        <TypographyComponent color="primary" text="Tecnologias usadas:" variant={smDown ? 'h5' : mdDown ? 'h4' : 'h3'} />
                    </Box>
                    <Box>
                        <TypographyComponent
                            text='React com TypeScript - Material UI - React Router Dom - Axios -NodeJS(Express) - MongoDB'
                            variant={smDown ? 'subtitle1' : mdDown ? 'h6' : 'h5'}
                        />
                    </Box>
                </Box>
            </Box>
        </Container>
    );
}

export default Sobre;