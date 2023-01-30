import { useContext } from "react";
import { useNavigate } from "react-router-dom";
import { Box, Button, Typography, TextField, ButtonGroup, Divider  } from "@mui/material";
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
                        height:"30%",
                        display:"flex",
                        justifyContent:"space-between",
                        alignItems:"center"

                    }}
                >
                    <Typography variant='h2' component="h1" color="primary">
                        {question}
                    </Typography>
                    <Button onClick={cancel} size="large" sx={{fontSize:'2rem'}}><MdOutlineClose/></Button>
                </Box>
                <Divider color="black"/>
                <Box
                    sx={{
                        mt:2,
                        flex:1
                    }}
                >
                    <Typography variant='h5' component="span">
                        {showErrorInfo ? <ErrorInfo error={error} modal={true} haveAccount={false} /> : info}
                    </Typography>
                    {edit && 
                        <Box
                            sx={{
                                height:"60%",
                                marginTop:2
                            }}
                        >
                            <form style={{ height:'100%' ,display: 'flex', flexDirection:'column', justifyContent:'space-between', marginTop:'1%'}}>
                                <TextField 
                                    label="Nome"
                                    variant="outlined"
                                    autoComplete="off"
                                    type="text" 
                                    name="name" 
                                    id="name"
                                    fullWidth
                                    required 
                                    placeholder={user?.name} 
                                    onChange={(e) => setName(e.target.value)} 
                                />
                                <TextField
                                    label='Email' 
                                    type="email" 
                                    name="email" 
                                    id="email" 
                                    fullWidth
                                    required
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
                                    required 
                                    onChange={(e) => setPassword(e.target.value)} 
                                    autoComplete='off'
                                />
                            </form>
                        </Box>
                    }
                    <Box
                        sx={{
                            flex:2,
                            mt:2
                        }}
                    >
                        <ButtonGroup>
                            <Button type="button" onClick={action} endIcon={actionIcon}>{btnText}</Button>
                            <Button type="button" onClick={cancel} endIcon={<MdOutlineClose/>}>Cancelar</Button>
                        </ButtonGroup>
                    </Box>
                </Box>
            </Box>
        </Box>
    );
}

export default Modal;