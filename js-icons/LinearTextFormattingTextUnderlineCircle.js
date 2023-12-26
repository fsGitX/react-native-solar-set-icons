import * as React from "react"
import Svg, { Path } from "react-native-svg";
    
const LinearTextFormattingTextUnderlineCircle = ({
    size = 24,
    color = "#1f2937",
    stroke = 2,
    ...props
    }) => <Svg height={size} width={size} fill="none" viewBox="0 0 24 24" strokeWidth={stroke} xmlns="http://www.w3.org/2000/svg" {...props}>
	<Path d="M2 12C2 6.47715 6.47715 2 12 2C17.5228 2 22 6.47715 22 12C22 17.5228 17.5228 22 12 22C6.47715 22 2 17.5228 2 12Z" stroke="black" strokeWidth="1.5"/>
	<Path d="M8 17H16" stroke="black" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5"/>
	<Path d="M8 7V10C8 12.2091 9.79086 14 12 14C14.2091 14 16 12.2091 16 10V7" stroke="black" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5"/>
</Svg>;

export default LinearTextFormattingTextUnderlineCircle;
