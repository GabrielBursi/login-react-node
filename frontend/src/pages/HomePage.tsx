import { useEffect, useState, useContext } from "react";
import { 
    Box, 
    Typography, 
    Link, 
    TableContainer, 
    Paper, 
    Table, 
    TableHead, 
    TableRow, 
    TableCell, 
    TableBody, 
    TableFooter, 
    LinearProgress, 
    } from "@mui/material";
    
import { ApiError, getAll } from "../api";
import { ErrorContext, MediaQueryContext } from "../context";

import {ApiType} from "../types";
import { Container, Title } from "../components";

function HomePage() {

    const [users, setUsers] = useState<ApiType[]>([]);
    const [isLoading, setIsLoading] = useState<boolean>(true);
    
    const { alertError } = useContext(ErrorContext)
    const { mdDown, smDown } = useContext(MediaQueryContext)

    useEffect(() => {
        setIsLoading(true)
        getAll().then(data => {
            setIsLoading(false)
            if(data instanceof ApiError){
                return alertError(data)
            }else if(data.users.length === 0){
                localStorage.removeItem('login');
            }else{
                setUsers(data.users);
            }
        })
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);
    
    return (
        <Container>
            <Box
                sx={{
                    width:'100%',
                    height:'100%'
                }}
            >
                <Title text='URL da API:'/>
                <Typography         
                        component={Link}
                        href="http://localhost:3333/users" 
                        target="_blank" 
                        rel="noreferrer"
                        underline="hover"
                        variant={smDown ? 'h6' : mdDown ? 'h4' : 'h3'}
                        color='black'
                    >
                        http://localhost:3333/users
                </Typography>
                <TableContainer component={Paper} variant="outlined" sx={{ m: 2, width: 'auto' }}>
                    <Table stickyHeader aria-label="sticky table">
                        <TableHead>
                            <TableRow>
                                <TableCell>Nome</TableCell>
                                <TableCell>Email</TableCell>
                                <TableCell>Senha com hash</TableCell>
                                <TableCell>Criado em</TableCell>
                            </TableRow>
                        </TableHead>
                        <TableBody>
                            {users.map(user => (
                                <TableRow key={user._id}>
                                    <TableCell>{`${user.name![0].toUpperCase()}${user.name?.substring(1).split(' ')[0]}`}</TableCell>
                                    <TableCell>{user.email}</TableCell>
                                    <TableCell>{user.password?.slice(0,15)}</TableCell>
                                    <TableCell>{user.createAt}</TableCell>
                                </TableRow>
                            ))}
                        </TableBody>
                        <TableFooter>
                            {isLoading && (
                                <TableRow >
                                    <TableCell colSpan={4}>
                                        <LinearProgress variant="indeterminate" />
                                    </TableCell>
                                </TableRow>
                            )}
                        </TableFooter>
                    </Table>
                </TableContainer>
            </Box>
        </Container>
    );
}

export default HomePage;