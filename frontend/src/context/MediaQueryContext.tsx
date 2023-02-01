import { useMediaQuery, useTheme } from "@mui/material";
import { createContext } from "react";
import { Children, TMediaQueryContext } from "../types";

export const MediaQueryContext = createContext({} as TMediaQueryContext)


function MediaQueryContextProvider({ children }: Children) {

    const theme = useTheme();
    const xsDown = useMediaQuery(theme.breakpoints.down('xs'));
    const smDown = useMediaQuery(theme.breakpoints.down('sm'));
    const mdDown = useMediaQuery(theme.breakpoints.down('md'));
    const lgDown = useMediaQuery(theme.breakpoints.down('lg'));
    const xlDown = useMediaQuery(theme.breakpoints.down('xl'));

    return (
        <MediaQueryContext.Provider value={{ xsDown, lgDown, mdDown, smDown, xlDown }}>
            {children}
        </MediaQueryContext.Provider>
    );
}

export default MediaQueryContextProvider;