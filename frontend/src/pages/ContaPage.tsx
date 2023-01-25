/* eslint-disable react-hooks/exhaustive-deps */
import { useEffect, useContext } from 'react';
import { MdDelete, MdEdit, MdLogout } from 'react-icons/md'
import { Box, ButtonGroup } from '@mui/material';
import { useNavigate } from 'react-router-dom';

import { LocalStorageContext, ModalContext, ValidateContext } from '../context';

import { ModalOptions } from '../types/Types';
import Typography from '@mui/material/Typography';
import Paper from '@mui/material/Paper';
import Button from '@mui/material/Button';

function Conta() {

    const { validate } = useContext(ValidateContext)
    const { setShowModal } = useContext(ModalContext)
    const { getUserLocalStorage, userLocalStorage } = useContext(LocalStorageContext)
    

    const navigate = useNavigate()

    useEffect(() => {
        getUserLocalStorage()
    }, [validate]);


    function toggleModal(action: ModalOptions){
        setShowModal(action)
        navigate(`/conta/${userLocalStorage?._id}/modal`)
    }

    return (
        <Box
            sx={{
                width:"100%",
                height:"90vh",
                display:"flex",
                justifyContent:"center",
                alignItems:"center",
            }}
        >

            <Box
                component={Paper}
                sx={{
                    width:"40%",
                    height:"70%",
                    display:"flex",
                    justifyContent:"center",
                    alignItems:"center",
                }}
                paddingTop={2}
            >
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
                        <Typography variant='h2' component="h1" align='center' color="primary">
                            Minha conta
                        </Typography>
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
            </Box>
        </Box>
    );
}

export default Conta;