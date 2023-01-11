import { Link } from "react-router-dom";

type FooterFormProps = {
    text: string,
    login: string,
    route: string
}

function FooterForm({ text, login, route}: FooterFormProps) {
    return (
        <>
            <span>{text}</span>
            <Link to={`${route}`}>{login}</Link>
        </>
    );
}

export default FooterForm;