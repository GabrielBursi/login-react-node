import { useContext } from 'react';
import { useNavigate } from 'react-router-dom';

import { ApiError, login } from '../api';

import {Form} from '../components';

import { ErrorContext, HeaderContext, LoginContext, ValidateContext } from '../context';

function Login() {

    const { setValidate } = useContext(ValidateContext)
    const { setErro, erro, email, setEmail, password, setPassword, setName } = useContext(LoginContext)
    const { setUpperCase } = useContext(HeaderContext)
    const { alertError } = useContext(ErrorContext)

    const navigate = useNavigate()

    function handleSubmitLogin(e: React.FormEvent<HTMLFormElement>) {
        e.preventDefault()

        const user = {
            email,
            password
        }

        login(user).then((data)=> {
            if(data instanceof ApiError){
                return alertError(data)
            }
            
            const { error, validate, name, password, _id, createAt } = data
            if(error){
                setErro(error)
                setValidate(!validate)
            }else{
                setValidate(validate)
                setErro('')
                navigate('/')

                const userLocalStorage = {
                    name,
                    email,
                    password,
                    _id,
                    createAt
                }
                localStorage.setItem("login", JSON.stringify(userLocalStorage));
                setUpperCase(`É bom ver você novamente ${name[0].toUpperCase() + name.substring(1)}.`)
                setEmail('')
                setPassword('')
            }

        })
    }

    return (
        <div className="container">
            <Form 
                setName={setName}
                erro={erro} 
                email={email} 
                setEmail={setEmail} 
                password={password} 
                setPassword={setPassword} 
                handleSubmitLogin={handleSubmitLogin} 
                haveAccount={true}
            />
        </div>
    );
}

export default Login;