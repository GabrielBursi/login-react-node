/* eslint-disable react-hooks/exhaustive-deps */
import { useEffect, useContext } from 'react';
import { MdDelete, MdEdit, MdLogout } from 'react-icons/md'
import { Box, Button, ButtonGroup } from '@mui/material';
import { useNavigate } from 'react-router-dom';

import { LocalStorageContext, MediaQueryContext, ModalContext, ValidateContext } from '../../context';
import { ModalOptions } from '../../types/Types';
import { Container, TextBody, Title } from '../../components';

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
                <Title text='Minha Conta'/>
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
                        <TextBody
                            text={` Nome: 
                                    Email: 
                                    Conta criada em:`
                                }
                            sx={{
                                width: "30%",
                                height: "100%",
                                display: "flex",
                                flexDirection:"column",
                                justifyContent: "space-evenly",
                                alignItems: "center",
                            }}
                        />
                        <TextBody
                            text=
                                {
                                    `${userLocalStorage?.name} 
                                    ${userLocalStorage?.email}
                                    ${userLocalStorage?.createAt}`
                                }
                            sx={{
                                width: "30%",
                                height: "100%",
                                display: "flex",
                                flexDirection: "column",
                                justifyContent: "space-evenly",
                                alignItems: "center",
                            }}
                        />
                        
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
                        <ButtonGroup size={smDown ? 'small' : mdDown ? 'medium' : 'large'} aria-label="large button group">
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