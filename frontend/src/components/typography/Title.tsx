import { useContext } from "react";
import { MediaQueryContext } from "../../context";
import { TextProps } from "../../types";
import TypographyComponent from "./TypographyComponent";

function Title({text} : TextProps) {

    const { mdDown, smDown } = useContext(MediaQueryContext)

    return (
        <TypographyComponent text={text} color='primary' variant={smDown ? 'h4' : mdDown ? 'h3' : 'h2'} />
    );
}

export default Title;