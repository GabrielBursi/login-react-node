import { Box, Paper } from "@mui/material";
import { useContext } from "react";
import { MediaQueryContext } from "../../context";
import { Children } from "../../types";

function Container({children}: Children) {

    const { mdDown, smDown } = useContext(MediaQueryContext)

    return (
        <Box
            sx={{
                width: "100%",
                height: "88vh",
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
            }}
            paddingTop={2}
        >
            <Box
                component={Paper}
                sx={{
                    width: mdDown ? "90%" : "80%",
                    height: smDown ? "100%" : mdDown ? "90%" : "80%",
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                }}
                padding={2}
            >
                {children}
            </Box>
        </Box>
    );
}

export default Container;