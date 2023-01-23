/* eslint-disable react-hooks/exhaustive-deps */
import { Box, Button, Stack, Typography, useMediaQuery, useTheme } from '@mui/material';
import { useContext, useEffect, useState } from 'react';
import { Link as RouterLink } from 'react-router-dom';

import { HeaderContext, ValidateContext } from '../context';

import { LocalStorage } from '../types/Types';
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
            setUpperCase(`É bom ver você novamente ${user.name[0].toUpperCase() + user.name.substring(1)}.`)
        }else{
            setUpperCase('')
        }
    }, [validate]);

    const theme = useTheme();
    const smDown = useMediaQuery(theme.breakpoints.down('sm'));
    const mdDown = useMediaQuery(theme.breakpoints.down('md'));
    const lgDown = useMediaQuery(theme.breakpoints.down('lg'));

    return (
        <Box 
            sx={{
                width: "100wh", 
                height: "10vh", 
                display: "flex", 
                justifyContent:"space-between", 
                alignItems:"center", 
                padding:"0 4%",
                border: '1px solid red',
            }}
        >
            <Box 
                sx={{
                    width: "20%",
                    height:"100%",
                    border: '1px solid red'

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
                    border: '1px solid red',
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