/* eslint-disable react-hooks/exhaustive-deps */
import { useEffect, useContext } from 'react';
import { MdDelete, MdEdit, MdLogout } from 'react-icons/md'
import { Box, Button, ButtonGroup, Typography } from '@mui/material';
import { useNavigate } from 'react-router-dom';

import { LocalStorageContext, MediaQueryContext, ModalContext, ValidateContext } from '../../context';
import { ModalOptions } from '../../types/Types';
import { Container, TypographyComponent } from '../../components';

function Conta() {

    const { validate } = useContext(ValidateContext)
    const { setShowModal } = useContext(ModalContext)
    const { getUserLocalStorage, userLocalStorage } = useContext(LocalStorageContext)
    const { mdDown, smDown } = useContext(MediaQueryContext)

    const navigate = useNavigate()

    useEffect(() => {
        getUserLocalStorage()
    }, [validate]);


    function toggleModal(action: ModalOptions){
        setShowModal(action)
        navigate(`/conta/modal/${userLocalStorage?._id}`)
    }

    return (
        <Container>

            <Box
                sx={{
                    width: "100%",
                    height: "100%",
                    display: "flex",
                    flexDirection:"column",
                    justifyContent: "space-between",
                    alignItems: "center",
                }}
            >
                <TypographyComponent text='Minha Conta' variant={smDown ? 'h4' : mdDown ? 'h3' : 'h2'}/>
                <Box
                    sx={{
                        width: "100%",
                        height: "80%",
                        display: "flex",
                        flexDirection: "column",
                        justifyContent: "space-between",
                        alignItems: "center",
                    }}
                >
                    <Box
                        sx={{
                            width: "100%",
                            height: "80%",
                            display:"flex",
                            justifyContent:"center"
                        }}
                    >
                        <Typography
                            variant='h5'
                            component='p'
                            sx={{
                                width: "30%",
                                height: "100%",
                                display: "flex",
                                flexDirection:"column",
                                justifyContent: "space-evenly",
                                alignItems: "center",
                            }}
                        >
                            <p><strong>Nome:</strong></p>  
                            <p><strong>Email:</strong></p>
                            <p><strong>Conta criada em:</strong></p>
                        </Typography>
                        <Typography
                            variant='h5'
                            component='p'
                            sx={{
                                width: "30%",
                                height: "100%",
                                display: "flex",
                                flexDirection: "column",
                                justifyContent: "space-evenly",
                                alignItems: "center",
                            }}
                        >
                            <p><strong>{userLocalStorage?.name}</strong></p>
                            <p><strong>{userLocalStorage?.email}</strong></p>
                            <p><strong>{userLocalStorage?.createAt}</strong></p>
                        </Typography>
                    </Box>
                    <Box
                        sx={{
                            width: "100%",
                            height: "20%",
                            display: "flex",
                            justifyContent:"center",
                            alignItems:"center"
                        }}
                    >
                        <ButtonGroup size="large" aria-label="large button group">
                            <Button type="button" onClick={() => { toggleModal('editar') }} endIcon={<MdEdit/>}>Editar</Button>
                            <Button type="button" onClick={() => { toggleModal('sair') }} endIcon={<MdLogout/>}>Sair</Button>
                            <Button type="button" onClick={() => { toggleModal('apagar') }} endIcon={<MdDelete/>}>Apagar Conta</Button>
                        </ButtonGroup>
                    </Box>
                </Box>
            </Box>
        </Container>
    );
}

export default Conta;