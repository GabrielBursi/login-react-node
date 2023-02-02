/* eslint-disable react-hooks/exhaustive-deps */
import { Box, Button, Icon, IconButton, Stack } from '@mui/material';
import { useContext, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

import { DrawerContext, HeaderContext, LocalStorageContext, MediaQueryContext, ValidateContext } from '../../context';
import TextBody from '../typography/TextBody';
import Title from '../typography/Title';

import HeaderItem from './HeaderItem';

function Header() {

    const { validate } = useContext(ValidateContext)
    const { setUpperCase, upperCase } = useContext(HeaderContext)
    const { getUserLocalStorage, userLocalStorage } = useContext(LocalStorageContext)
    const { smDown, lgDown } = useContext(MediaQueryContext)
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
                <Title text='My API' onClick={() => navigate('/')} sx={{cursor:'pointer'}} noWrap/>
                <TextBody text={upperCase ? upperCase : ''} noWrap/>
            </Box>
            {(lgDown && validate) ? 
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