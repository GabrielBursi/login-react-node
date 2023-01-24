import { Box, Typography, Link, List, ListItem, ListItemText, Divider } from "@mui/material";
import { useEffect, useState, useContext } from "react";
import { ApiError, getAll } from "../api";
import { ErrorContext } from "../context";

import {ApiType} from "../types";

function HomePage() {

    const [users, setUsers] = useState<ApiType[]>([]);

    const { alertError } = useContext(ErrorContext)

    useEffect(() => {
        
        getAll().then(data => {
            if(data instanceof ApiError){
                return alertError(data)
            }else if(data.users.length === 0){
                localStorage.removeItem('login');
            }else{
                setUsers(data.users);
            }
        })
    }, []);
    
    return (
        <Box 
            sx={{
                height:"90vh", 
                width:"100%",
                display:"flex",
                flexDirection: "column",
                alignItems:"center",
                justifyContent:"center"
            }}
        >
            <Typography variant="h5" component="h2" marginBottom={2}>
                <h2>URL da API:
                    <Link 
                        href="http://localhost:3333/users" 
                        target="_blank" 
                        rel="noreferrer"
                        underline="hover"
                    >
                        http://localhost:3333/users
                    </Link>
                </h2>
            </Typography>
            <Box
                sx={{
                    backgroundColor: "#262636",
                    width: "50%",
                    height: "80%",
                    borderRadius: "10px",
                    display: "flex",
                    flexDirection:"column",
                }}
            >   
                <Box
                    sx={{
                        height:"10%",
                        width:"100%",
                        borderRadius: "10px 10px 0 0",
                        display:"flex",
                        justifyContent:"center",
                        alignItems:"center",
                        padding:"4% 0"
                    }}
                >
                    <Typography variant="h5" component="h3" color="#fff">
                        Todos usuarios cadastrados no banco de dados MongoDB:
                    </Typography>
                </Box>
                <Box
                    sx={{
                        width:"100%",
                        height:"100%",
                        overflowY: "scroll",
                        padding: "0 2%"
                    }}
                >
                    <List>
                        {users.length > 0 ? users.map((user, index) => (
                            <ListItem key={user._id} component="div"
                                sx={{
                                    display:"flex",
                                    flexDirection:"column",
                                    justifyContent:"flex-start",
                                    alignItems:"start"
                                }}
                            >
                                <Typography variant="subtitle1" component="span" color="#fff">
                                    <ListItemText primary={`Usuario: ${index + 1}`} />
                                </Typography>
                                <Box sx={{
                                    display:"flex",
                                    width:"50%",
                                    justifyContent:"space-between"
                                }}>
                                    <Typography variant="h4" component="p" color="#75ba24">
                                        <ListItemText primary={`"Nome":`} />
                                        <ListItemText primary={`"Email":`} />
                                        <ListItemText primary={`"Senha criptografada":`} />
                                        <ListItemText primary={`"Data de criação da conta":`} />
                                    </Typography>
                                    <Typography variant="h4" component="p" color="#f0e137">
                                        <ListItemText primary={`"${user.name}"`} />
                                        <ListItemText primary={`"${user.email}"`} />
                                        <ListItemText primary={`"${user.password?.slice(0, 10)}"`} />
                                        <ListItemText primary={`"${user.createAt}"`} />
                                    </Typography>
                                </Box>
                                <Divider flexItem color="#fff"/>
                            </ListItem>
                        )) : <h1>Nenhum Usuario cadastrado :(</h1>}
                    </List>
                </Box>
            </Box>
        </Box>
    );
}

export default HomePage;