import * as React from "react"
import Svg, { Path } from "react-native-svg";
    
const BrokenTextFormattingTextItalic = ({
    size = 24,
    color = "#1f2937",
    stroke = 2,
    ...props
    }) => <Svg height={size} width={size} fill="none" viewBox="0 0 24 24" strokeWidth={stroke} xmlns="http://www.w3.org/2000/svg" {...props}>
	<Path d="M3 22H15M9 2H21M9 22L11.4 14M15 2L12.6 10" stroke="black" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5"/>
</Svg>;

export default BrokenTextFormattingTextItalic;
