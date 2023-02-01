/* eslint-disable react-hooks/exhaustive-deps */
import { Box, Button, Icon, IconButton, Stack, Typography } from '@mui/material';
import { useContext, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

import { DrawerContext, HeaderContext, LocalStorageContext, MediaQueryContext, ValidateContext } from '../../context';

import HeaderItem from './HeaderItem';

function Header() {

    const { validate } = useContext(ValidateContext)
    const { setUpperCase, upperCase } = useContext(HeaderContext)
    const { getUserLocalStorage, userLocalStorage } = useContext(LocalStorageContext)
    const { smDown, lgDown, mdDown } = useContext(MediaQueryContext)
    const { toggleDrawer } = useContext(DrawerContext)

    const navigate = useNavigate()

    useEffect(() => {

        getUserLocalStorage(setUpperCase)
        
    }, [validate]);


    return (
        <Box 
            sx={{
                width: "100wh", 
                height: "12vh", 
                display: "flex", 
                justifyContent:"space-between", 
                alignItems:"center", 
                padding:"0 4%",
            }}
        >
            <Box 
                sx={{
                    minWidth: "30%",
                    height:"100%",
                    display: "flex",
                    justifyContent:"center",
                    flexDirection:"column",
                }}
            >
                <Typography variant={smDown ? 'h5' : mdDown ? 'h4' : 'h2'} color="primary" onClick={() => navigate('/')} noWrap>
                    My API
                </Typography>
                <Typography variant={smDown ? 'caption' : 'subtitle1'} component="span" noWrap>
                    <span>{upperCase}</span>
                </Typography>
            </Box>
            {(mdDown && validate) ? 
                <IconButton onClick={toggleDrawer}>
                    <Icon>menu</Icon>
                </IconButton>
                :
                <Stack
                    sx={{
                        minWidth: "40%",
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
                    {!smDown && <Button href="https://github.com/GabrielBursi/login-react-node" variant="contained" size={lgDown ? 'small' : 'large'}>Repositório GitHub</Button>}
                </Stack>
            }
        </Box>
    );
}

export default Header;