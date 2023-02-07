import { useContext } from "react";
import { MediaQueryContext } from "../../context";
import { TextProps } from "../../types";
import TypographyComponent from "./TypographyComponent";

function Title({ text, onClick, sx, noWrap = false } : TextProps) {

    const { mdDown, smDown } = useContext(MediaQueryContext)

    return (
        <TypographyComponent text={text} color='primary' variant={smDown ? 'h5' : mdDown ? 'h4' : 'h3'} onClick={onClick} sx={sx} noWrap={noWrap}/>
    );
}

export default Title;