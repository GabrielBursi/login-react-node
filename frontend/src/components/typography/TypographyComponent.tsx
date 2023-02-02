import { Typography } from "@mui/material";
import { TypographyComponentProps } from "../../types";

function TypographyComponent({ text, variant, color, sx, onClick, noWrap}: TypographyComponentProps) {
    return (
        <Typography color={color} variant={variant} sx={sx} onClick={onClick} noWrap={noWrap}>
            {text}
        </Typography>
    )
}

export default TypographyComponent;