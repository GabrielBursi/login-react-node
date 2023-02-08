import { useContext, useEffect } from "react";
import { Box } from "@mui/material";
import { MdDelete, MdEdit, MdLogout } from 'react-icons/md'
import { useNavigate } from "react-router-dom";
import * as yup from 'yup'

import { ApiError, deleteUserById, editUserById } from "../../api";

import { Container, Modal } from "../../components";

import { ErrorContext, HeaderContext, LocalStorageContext, LoginContext, ModalContext, ValidateContext } from "../../context";
import { SchemaCreateAndEditAccount } from "../../types";

import '../../TraducoesYup';

const editAccountSchema: yup.SchemaOf<SchemaCreateAndEditAccount> = yup.object().shape({
    name: yup.string().required().min(2),
    email: yup.string().required().email(),
    password: yup.string().required().min(6),
});

function ModalPage() {

    const { validate, setValidate } = useContext(ValidateContext)
    const { showModal, setShowModal } = useContext(ModalContext)
    const { email, password, name, setErro, setEmail, setName, setPassword, setIsLoading } = useContext(LoginContext)
    const { setUpperCase } = useContext(HeaderContext)
    const { alertError, setShowErrorInfo, setErrorName, setErrorEmail, setErrorPassword } = useContext(ErrorContext)
    const { getUserLocalStorage, userLocalStorage, setUserLocalStorage } = useContext(LocalStorageContext)
    
    const navigate = useNavigate()

    useEffect(() => {
        getUserLocalStorage()

    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [validate]);

    function editUser() {

        const editedUser = {
            name,
            email,
            password
        }
        setIsLoading(true)

        editAccountSchema.validate(editedUser, {abortEarly: false})
            .then(valid => {
                editUserById(userLocalStorage!._id, valid)
                    .then((data) => {
                        setIsLoading(false)
                        if (data instanceof ApiError) {
                            return alertError(data)
                        }
            
                        const { error, validate, name, _id, createAt } = data
            
                        if (error) {
                            setErro(error)
                            setShowErrorInfo(true)
                            setValidate(!validate)
                        } else {
                            setValidate(validate)
                            setErro('')
            
                            const userLocalStorage = {
                                name,
                                email,
                                _id,
                                createAt
                            }
            
                            localStorage.setItem('login', JSON.stringify(userLocalStorage))
                            setUserLocalStorage(userLocalStorage)
                            setUpperCase(`É bom ver você novamente ${name[0].toUpperCase() + name.substring(1)}.`)
                            setShowModal(undefined)
                            navigate('/')
                        }
            
                    }).catch(err => {
                        alert(err);
                    })
            }).catch((errors: yup.ValidationError) => {
                setIsLoading(false)
                errors.inner.forEach(error => {
                    switch (error.path) {
                        case 'name':
                            setErrorName(error.message);

                            break
                        case 'email':
                            setErrorEmail(error.message);

                            break
                        case 'password':
                            setErrorPassword(error.message);

                            break
                        default:
                            console.log('nenhum erro')
                            break
                    }
                });
            })

        setTimeout(() => {
            setErrorName('')
            setErrorEmail('')
            setErrorPassword('')
        }, 1000 * 3)

    }
    

    function logout() {
        localStorage.removeItem('login')
        setValidate(!validate)
        setShowModal(undefined)
        setEmail('')
        setName('')
        setPassword('')
    }

    function deleteUser() {
        setIsLoading(true)
        deleteUserById(userLocalStorage!._id).then(() => {
            setIsLoading(false)
            logout()
        })
    }


    const questionEdit = 'Edite sua conta'
    const infoEdit = 'Você pode editar suas informações quando quiser, nome, email e senha.'
    const btnEdit = 'Pronto'

    const questionLogout = 'Tem certeza que deseja sair da sua conta?'
    const infoLogout = 'Isso fará com que você tenha que fazer login novamente para acessar a página.'
    const btnLogout = 'Sair'

    const questionDelete = 'Tem certeza que deseja apagar sua conta?'
    const infoDelete = 'Isso fará com que você tenha que criar outra conta para acessar a página.'
    const btnDelete = 'Apagar'

    return (
        <Box
            sx={{
                width: "100%",
                height: "90vh",
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
            }}
        >   
            {showModal === 'editar' &&
                <Container>
                    <Modal
                        question={questionEdit}
                        info={infoEdit}
                        btnText={btnEdit}
                        action={editUser}
                        edit={true}
                        user={userLocalStorage}
                        actionIcon={<MdEdit/>}
                    />
                </Container>
            }
            {showModal === 'sair' &&
                <Container>
                    <Modal
                        question={questionLogout}
                        info={infoLogout}
                        btnText={btnLogout}
                        action={logout}
                        actionIcon={<MdLogout/>}
                    />
                </Container>
            }
            {showModal === 'apagar' &&
                <Container>
                    <Modal
                        question={questionDelete}
                        info={infoDelete}
                        btnText={btnDelete}
                        action={deleteUser}
                        actionIcon={<MdDelete/>}
                    />
                </Container>
            }
        </Box>
    );
}

export default ModalPage;