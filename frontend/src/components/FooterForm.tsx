import { useContext } from 'react'
import { Link } from "react-router-dom";
import { LoginContext } from "../context";

type FooterFormProps = {
    text: string,
    login: string,
    route: string
}

function FooterForm({ text, login, route}: FooterFormProps) {

    const { setErro, setEmail, setName, setPassword } = useContext(LoginContext)

    function clearInput(){
        setErro("")
        setEmail("")
        setName("")
        setPassword("")
    }

    return (
        <>
            <span>{text}</span>
            <Link to={`${route}`} onClick={clearInput}>{login}</Link>
        </>
    );
}

export default FooterForm;