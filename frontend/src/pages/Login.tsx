import { useContext } from 'react';
import { ApiError } from '../api/ApiError';
import { login } from '../api/ApiServices';
import Form from '../components/Form';
import { ValidateContext } from '../context/ValidateContext';

import '../styles/login.css'


function Login() {

    const { setValidate, setErro, erro, email, setEmail, password, setPassword, navigate, setName } = useContext(ValidateContext)

    function handleSubmitLogin(e: React.FormEvent<HTMLFormElement>) {
        e.preventDefault()

        const user = {
            email,
            password
        }

        login(user).then((data)=> {
            if(data instanceof ApiError){
                return
            }
            
            const {error, validate, passwordHash} = data
            if(error){
                setErro(error)
                setValidate(false)
            }else{
                setValidate(validate)
                setErro('')
                navigate('/')

                user.password = passwordHash
                localStorage.setItem("login", JSON.stringify(user));
            }

        })
    }

    return (
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
    );
}

export default Login;