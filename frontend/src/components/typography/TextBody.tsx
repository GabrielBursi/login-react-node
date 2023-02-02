import { useContext } from "react";
import { MediaQueryContext } from "../../context";
import { TextProps } from "../../types";
import TypographyComponent from "./TypographyComponent";

function TextBody({text}: TextProps) {

    const { mdDown, smDown } = useContext(MediaQueryContext)

    return (
        <TypographyComponent text={text} variant={smDown ? 'subtitle1' : mdDown ? 'h6' : 'h5'} />
    );
}

export default TextBody;