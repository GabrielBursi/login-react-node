/* eslint-disable react-hooks/exhaustive-deps */
import { Box, Button, Stack, Typography } from '@mui/material';
import { useContext, useEffect, useState } from 'react';
import { Link as RouterLink } from 'react-router-dom';

import { HeaderContext, ValidateContext } from '../../context';

import { LocalStorage } from '../../types';
import HeaderItem from './HeaderItem';

function Header() {

    const { validate } = useContext(ValidateContext)
    const { setUpperCase, upperCase } = useContext(HeaderContext)

    const [userLocalStorage, setUserLocalStorage] = useState<LocalStorage>();

    useEffect(() => {
        const login = localStorage.getItem("login");
        if (login) {
            const infoLogin = JSON.parse(login)
            let user = { ...infoLogin };
            setUserLocalStorage(user);
            setUpperCase(`É bom ver você novamente ${(user.name[0].toUpperCase() + user.name.substring(1).split(' ')[0])}.`)
        }else{
            setUpperCase('')
        }
    }, [validate]);


    return (
        <Box 
            sx={{
                width: "100wh", 
                height: "10vh", 
                display: "flex", 
                justifyContent:"space-between", 
                alignItems:"center", 
                padding:"0 4%",
            }}
        >
            <Box 
                sx={{
                    width: "20%",
                    height:"100%",
                    display: "flex",
                    justifyContent:"center",
                    alignItems:"center",
                    flexDirection:"column",
                }}
            >
                <Typography variant="h5" component="h2">
                    <RouterLink to='/'><h1>My API </h1></RouterLink>
                </Typography>
                <Typography variant='subtitle1' component="span">
                    <span>{upperCase}</span>
                </Typography>
            </Box>
            <Stack
                sx={{
                    width: "40%",
                    height: "100%",
                    display:"flex",
                    alignItems: "center",
                    justifyContent:"center",
                }}
                direction="row"
                spacing={2}
            >
                {validate && <HeaderItem label='Home' to='/' />}
                {validate ? <HeaderItem label='Minha conta' to={`/conta/${userLocalStorage?._id}`} /> : <HeaderItem label='Login' to='/login' />}
                <HeaderItem label='Sobre o projeto' to='/sobre' />
                <Button href="https://github.com/GabrielBursi/login-react-node" variant="contained">Repositório GitHub</Button>
            </Stack>
        </Box>
    );
}

export default Header;