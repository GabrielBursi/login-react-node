import { useContext } from "react";
import { MediaQueryContext } from "../../context";
import { TextProps } from "../../types";
import TypographyComponent from "./TypographyComponent";

function TextBody({text, sx, noWrap = false}: TextProps) {

    const { mdDown, smDown } = useContext(MediaQueryContext)

    return (
        <TypographyComponent text={text} variant={smDown ? 'subtitle1' : mdDown ? 'h6' : 'h5'} sx={sx} noWrap={noWrap}/>
    );
}

export default TextBody;