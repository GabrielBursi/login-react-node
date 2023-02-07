import { useContext } from "react";
import { useNavigate } from "react-router-dom";
import { Box, Button, TextField, Divider, Grid, LinearProgress  } from "@mui/material";
import { MdOutlineClose } from 'react-icons/md'

import { ErrorContext, LocalStorageContext, LoginContext, MediaQueryContext, ModalContext } from "../../context";

import { ModalProps } from "../../types";
import ErrorInfo from "./ErrorInfo";
import Title from "../typography/Title";
import TextBody from "../typography/TextBody";

function Modal({question, info, btnText, action, edit, user, actionIcon}: ModalProps) {

    const { setShowModal } = useContext(ModalContext)
    const { setEmail, setPassword, setName, error, setErro, isLoading } = useContext(LoginContext)
    const { userLocalStorage } = useContext(LocalStorageContext)
    const { showErrorInfo, errorName, errorEmail, errorPassword } = useContext(ErrorContext)
    const { smDown, mdDown } = useContext(MediaQueryContext)

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
                        height: question === 'Edite sua conta' ? "10%" :"20%",
                        display:"flex",
                        justifyContent:"space-between",
                        alignItems:"center",

                    }}
                >
                    <Title text={question}/>
                    <Button
                        onClick={cancel} 
                        size={smDown ? 'small' : mdDown ? 'medium' : 'large'} 
                        sx={{ fontSize: smDown ? '20px' : mdDown ? '30px' : '40px' }}
                    >
                        <MdOutlineClose/>
                    </Button>
                </Box>
                <Divider color="black" />
                <Box
                    sx={{
                        mt:2,
                        flex:1
                    }}
                >
                    <TextBody text={showErrorInfo ? <ErrorInfo error={error} modal={true} haveAccount={false} /> : info} />
                    {edit && 
                        <Box
                            sx={{
                                height:mdDown ? '35%' : '45%',
                                marginTop:2,
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
                                    error={!!errorName}
                                    helperText={errorName} 
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
                                    error={!!errorEmail}
                                    helperText={errorEmail}
                                    sx={{mt:2}} 
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
                                    error={!!errorPassword}
                                    helperText={errorPassword}
                                    sx={{mt:2}}
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
                        <Grid container spacing={2}>
                            <Grid item xs={6} sm={6} md={4} >
                                <Button size={smDown ? 'medium' : 'large'} endIcon={actionIcon} variant='outlined' fullWidth onClick={action}>{btnText}</Button>
                            </Grid>
                            <Grid item xs={6} sm={6} md={4} >
                                <Button size={smDown ? 'medium' : 'large'} endIcon={<MdOutlineClose/>} variant='outlined' fullWidth onClick={cancel}>cancelar</Button>
                            </Grid>
                        </Grid>
                        {isLoading &&
                            <Box sx={{ width: '100%', mt: 2 }}>
                                <LinearProgress />
                            </Box>
                        }
                    </Box>
                </Box>
            </Box>
        </Box>
    );
}

export default Modal;