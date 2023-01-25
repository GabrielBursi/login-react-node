/* eslint-disable react-hooks/exhaustive-deps */
import { useEffect, useState, useContext } from 'react';
import { MdDelete, MdEdit, MdLogout } from 'react-icons/md'
import { Box, ButtonGroup } from '@mui/material';

import { deleteUserById, editUserById, ApiError } from '../api';
import { Modal } from '../components';

import { ErrorContext, HeaderContext, LoginContext, ModalContext, ValidateContext } from '../context';

import { LocalStorage } from '../types/Types';
import Typography from '@mui/material/Typography';
import Paper from '@mui/material/Paper';
import Button from '@mui/material/Button';

function Conta() {

    const { validate, setValidate } = useContext(ValidateContext)
    const { showModal, setShowModal } = useContext(ModalContext)
    const { email, password, name, setErro, setEmail, setName, setPassword } = useContext(LoginContext)
    const { setUpperCase } = useContext(HeaderContext)
    const { alertError } = useContext(ErrorContext)

    const [userLocalStorage, setUserLocalStorage] = useState<LocalStorage>();

    useEffect(() => {
        const login = localStorage.getItem("login");
        if (login) {
            const infoLogin = JSON.parse(login)
            let user = {...infoLogin};
            setUserLocalStorage(user);
        }

        return () => setShowModal(undefined)
    }, [validate]);

    function editUser(){

        const editedUser = {
            name,
            email,
            password
        }

        editUserById(userLocalStorage!._id, editedUser)
            .then((data) => {
                if (data instanceof ApiError) {
                    return alertError(data)
                }

                const { error, validate, name, password, _id, createAt } = data
                
                if (error) {
                    setErro(error)
                    setValidate(!validate)
                }else{
                    setValidate(validate)
                    setErro('')

                    const userLocalStorage = {
                        name,
                        email,
                        password,
                        _id,
                        createAt
                    }

                    localStorage.setItem('login', JSON.stringify(userLocalStorage))
                    setUserLocalStorage(userLocalStorage)
                    setUpperCase(`É bom ver você novamente ${name[0].toUpperCase() + name.substring(1)}.`)
                    setShowModal(undefined)
                }

            }).catch(err => {
                alert(err);
            })
        
    }

    function logout(){
        localStorage.removeItem('login')
        setValidate(!validate)
        setShowModal(undefined)
        setEmail('')
        setName('')
        setPassword('')
    }

    function deleteUser(){
        deleteUserById(userLocalStorage!._id).then(() =>{
            logout()
        }).catch(err => {
            alert(err);
        })
        setShowModal(undefined)
        setEmail('')
        setName('')
        setPassword('')
    }

    const questionEdit = 'Edite suas informações da conta'
    const infoEdit = 'Você pode editar suas informações quando quiser, nome, email e senha.'
    const btnEdit = 'Pronto'

    const questionLogout = 'Tem certeza que deseja sair da sua conta?'
    const infoLogout = 'Isso fará com que você tenha que fazer login novamente para acessar a página.'
    const btnLogout = 'Sair da conta'

    const questionDelete = 'Tem certeza que deseja apagar sua conta?'
    const infoDelete = 'Isso fará com que você tenha que criar outra conta para acessar a página.'
    const btnDelete = 'Apagar conta'

    return (
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
                                <Button type="button" onClick={() => { setShowModal('editar') }} endIcon={<MdEdit/>}>Editar</Button>
                                <Button type="button" onClick={() => { setShowModal('sair') }} endIcon={<MdLogout/>}>Sair</Button>
                                <Button type="button" onClick={() => { setShowModal('apagar') }} endIcon={<MdDelete/>}>Apagar Conta</Button>
                            </ButtonGroup>
                        </Box>
                    </Box>
                </Box>
                <Box>
                    {showModal === 'editar' && 
                        <Modal 
                            question={questionEdit} 
                            info={infoEdit} 
                            btnText={btnEdit} 
                            action={editUser} 
                            edit={true}
                            user={userLocalStorage}
                        />
                    }
                    {showModal === 'sair' && 
                        <Modal 
                            question={questionLogout} 
                            info={infoLogout} 
                            btnText={btnLogout} 
                            action={logout}
                        />
                    }
                    {showModal === 'apagar' && 
                        <Modal 
                            question={questionDelete} 
                            info={infoDelete} 
                            btnText={btnDelete} 
                            action={deleteUser}
                        />
                    }
                </Box>
        </Box>
    );
}

export default Conta;