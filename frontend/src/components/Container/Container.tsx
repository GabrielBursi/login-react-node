import { Box, Paper } from "@mui/material";
import { Children } from "../../types";

function Container({children}: Children) {
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
                    width: "40%",
                    height: "70%",
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