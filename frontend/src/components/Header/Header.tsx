/* eslint-disable react-hooks/exhaustive-deps */
import { Box, Button, Stack, Typography } from '@mui/material';
import { useContext, useEffect } from 'react';
import { Link as RouterLink } from 'react-router-dom';

import { HeaderContext, LocalStorageContext, ValidateContext } from '../../context';

import HeaderItem from './HeaderItem';

function Header() {

    const { validate } = useContext(ValidateContext)
    const { setUpperCase, upperCase } = useContext(HeaderContext)
    const { getUserLocalStorage, userLocalStorage } = useContext(LocalStorageContext)

    useEffect(() => {

        getUserLocalStorage(setUpperCase)
        
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
                <Button href="https://github.com/GabrielBursi/login-react-node" variant="contained" size='large'>Repositório GitHub</Button>
            </Stack>
        </Box>
    );
}

export default Header;