import { useContext } from "react";
import { useNavigate } from "react-router-dom";
import { Box, Button, Paper, Typography, TextField, ButtonGroup  } from "@mui/material";
import { MdOutlineClose } from 'react-icons/md'

import { ErrorContext, LocalStorageContext, LoginContext, ModalContext } from "../../context";

import { ModalProps } from "../../types";
import ErrorInfo from "./ErrorInfo";

function Modal({question, info, btnText, action, edit, user, actionIcon}: ModalProps) {

    const { setShowModal } = useContext(ModalContext)
    const { setEmail, setPassword, setName, error, setErro } = useContext(LoginContext)
    const { userLocalStorage } = useContext(LocalStorageContext)
    const { showErrorInfo } = useContext(ErrorContext)

    const navigate = useNavigate()

    function cancel(){
        setShowModal(undefined)
        setErro('')
        navigate(`/conta/${userLocalStorage?._id}`)
    }
    
    return (
        <Box
            sx={{
                width: "100%",
                height: "100%",
                display: "flex",
                flexDirection: "column",
                justifyContent: "center",
                alignItems: "center"
            }}
        >
            <Box
                sx={{
                    width: "100%",
                    height: "100%",
                    display: "flex",
                    flexDirection: "column",
                    justifyContent: "space-between",
                }}
            >

                <Box
                    sx={{
                        border:"1px solid black",
                        height:"20%"
                    }}
                >
                    <Typography variant='h2' component="h1" align='center' color="primary" noWrap>
                        {question}
                        <Button onClick={cancel} size="large"><MdOutlineClose /></Button>
                    </Typography>
                </Box>
                <Box
                    sx={{
                        border: "1px solid black",
                        flex:1
                    }}
                >
                    <Typography variant='subtitle1' component="span">
                        {info}
                    </Typography>
                    {edit && 
                        <Box>
                            {showErrorInfo && <ErrorInfo error={error} modal={true} />}
                            <form>
                                <TextField 
                                    label="Nome"
                                    variant="outlined"
                                    autoComplete="off"
                                    type="text" 
                                    name="name" 
                                    id="name"
                                    fullWidth 
                                    placeholder={user?.name} 
                                    onChange={(e) => setName(e.target.value)} 
                                />
                                <TextField
                                    label='Email' 
                                    type="email" 
                                    name="email" 
                                    id="email" 
                                    fullWidth
                                    placeholder={user?.email} 
                                    onChange={(e) => setEmail(e.target.value)} 
                                    autoComplete='off'
                                />
                                <TextField
                                    label='Senha' 
                                    type="password" 
                                    name="senha" 
                                    id="senha"
                                    fullWidth 
                                    onChange={(e) => setPassword(e.target.value)} 
                                    autoComplete='off'
                                />
                            </form>
                        </Box>
                    }
                    <Box>
                        <ButtonGroup>

                        </ButtonGroup>
                        <Button type="button" onClick={action} endIcon={actionIcon}>{btnText}</Button>
                        <Button type="button" onClick={cancel} endIcon={<MdOutlineClose/>}>Cancelar</Button>
                    </Box>
                </Box>
            </Box>
        </Box>
    );
}

export default Modal;