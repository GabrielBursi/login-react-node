import { Box, Typography, Link, TableContainer, Paper, Table, TableHead, TableRow, TableCell, TableBody, TableFooter, LinearProgress, Pagination } from "@mui/material";
import { useEffect, useState, useContext } from "react";
import { ApiError, getAll } from "../api";
import { ErrorContext } from "../context";

import {ApiType} from "../types";

function HomePage() {

    const [users, setUsers] = useState<ApiType[]>([]);
    const [isLoading, setIsLoading] = useState<boolean>(true);

    const { alertError } = useContext(ErrorContext)

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
            <TableContainer component={Paper} variant="outlined" sx={{ m: 2, width: 'auto' }}>
                <Table>
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
                        {(users.length > 0 && users.length > 7) && (
                            <TableRow>
                                <TableCell colSpan={4}>
                                    <Pagination
                                        page={1}
                                        color="primary"
                                        count={Math.ceil(users.length / 7)}
                                    />
                                </TableCell>
                            </TableRow>
                        )}
                    </TableFooter>
                </Table>
            </TableContainer>
        </Box>
    );
}

export default HomePage;