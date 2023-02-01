import Button from "@mui/material/Button";
import { useContext } from "react";
import { Link as RouterLink, useMatch, useResolvedPath } from "react-router-dom";
import { MediaQueryContext } from "../../context";

import { HeaderItemProps } from "../../types";

function HeaderItem({label, to}: HeaderItemProps) {

    const resolvedPath = useResolvedPath(to)
    const match = useMatch({ path: resolvedPath.pathname, end: true })

    const { lgDown } = useContext(MediaQueryContext)

    return (
        <Button component={RouterLink} to={to} size={lgDown ? 'small' : 'large'} variant={match ? 'contained' : 'text'}>{label}</Button>
    );
}   

export default HeaderItem;