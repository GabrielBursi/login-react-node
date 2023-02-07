import { Box, Paper } from "@mui/material";
import { useContext } from "react";
import { MediaQueryContext } from "../../context";
import { Children } from "../../types";

function Container({children}: Children) {

    const { mdDown } = useContext(MediaQueryContext)

    return (
        <Box
            sx={{
                width: "100%",
                height: "88vh",
                display: "flex",
                justifyContent: "center",
                alignItems: 'start',
            }}
            paddingTop={2}
        >
            <Box
                component={Paper}
                sx={{
                    width: mdDown ? "90%" : "80%",
                    height: "auto",
                    maxHeight: '100%',
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