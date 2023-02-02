import { Typography } from "@mui/material";
import { TypographyComponentProps } from "../types";

function TypographyComponent({ text, variant, color }: TypographyComponentProps) {
    return (
        <Typography color={color} variant={variant}>
            {text}
        </Typography>
    )
}

export default TypographyComponent;