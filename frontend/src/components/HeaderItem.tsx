import { Link, useMatch, useResolvedPath } from "react-router-dom";
import { HeaderItemProps } from "../types/Types";



function HeaderItem({label, to}: HeaderItemProps) {

    const resolvedPath = useResolvedPath(to)
    const match = useMatch({ path: resolvedPath.pathname, end: true })

    return (
        <Link to={to} className={match ? 'selected' : 'not-selected'}>{label}</Link>
    );
}   

export default HeaderItem;