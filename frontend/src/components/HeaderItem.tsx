import Button from "@mui/material/Button";
import { Link as RouterLink, useMatch, useResolvedPath } from "react-router-dom";

import { HeaderItemProps } from "../types";

function HeaderItem({label, to}: HeaderItemProps) {

    const resolvedPath = useResolvedPath(to)
    const match = useMatch({ path: resolvedPath.pathname, end: true })

    return (
        <Button component={RouterLink} to={to} size="large" variant={match ? 'contained' : 'outlined'}>{label}</Button>
    );
}   

export default HeaderItem;