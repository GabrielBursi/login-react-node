import { useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import * as yup from 'yup';

import { ApiError, login } from '../../api';

import {Container, Form} from '../../components';

import { ErrorContext, HeaderContext, LoginContext, ValidateContext } from '../../context';
import { SchemaLogin } from '../../types';

import '../../TraducoesYup';

const loginSchema: yup.SchemaOf<SchemaLogin> = yup.object().shape({
    email: yup.string().required().email(),
    password: yup.string().required().min(6),
});

function Login() {

    const { setValidate } = useContext(ValidateContext)
    const { setErro, error, email, setEmail, password, setPassword, setName, setIsLoading } = useContext(LoginContext)
    const { setUpperCase } = useContext(HeaderContext)
    const { alertError, setShowErrorInfo, setErrorEmail, setErrorPassword } = useContext(ErrorContext)

    const navigate = useNavigate()

    function handleSubmitLogin(e: React.FormEvent<HTMLFormElement>) {
        e.preventDefault()

        const user = {
            email,
            password
        }

        setIsLoading(true)

        loginSchema.validate(user, { abortEarly: false })
            .then(valid => {
                login(valid).then((data)=> {
                    setIsLoading(false)
                    if(data instanceof ApiError){
                        return alertError(data)
                    }
                    
                    const { error, validate, name, _id, createAt } = data
                    if(error){
                        setErro(error)
                        setShowErrorInfo(true)
                        setValidate(false)
                    }else{
                        setValidate(validate)
                        setErro('')
                        navigate('/')
        
                        const userLocalStorage = {
                            name,
                            email,
                            _id,
                            createAt
                        }
                        localStorage.setItem("login", JSON.stringify(userLocalStorage));
                        setUpperCase(`É bom ver você novamente ${name[0].toUpperCase() + name.substring(1)}.`)
                        setEmail('')
                        setPassword('')
                    }
        
                })
            }).catch((errors: yup.ValidationError) => {
                setIsLoading(false)
                errors.inner.forEach(error => {
                    switch (error.path) {
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
            setErrorEmail('')
            setErrorPassword('')
        }, 1000 * 3)
    }
        
    return (
        <Container>
            <Form 
                text='Fazer Login'
                setName={setName}
                error={error} 
                email={email} 
                setEmail={setEmail} 
                password={password} 
                setPassword={setPassword} 
                handleSubmitLogin={handleSubmitLogin} 
                haveAccount={true}
            />
        </Container>
    );
}

export default Login;