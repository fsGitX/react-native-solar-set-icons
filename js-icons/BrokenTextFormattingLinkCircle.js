import * as React from "react"
import Svg, { Path } from "react-native-svg";
    
const BrokenTextFormattingLinkCircle = ({
    size = 24,
    color = "#1f2937",
    stroke = 2,
    ...props
    }) => <Svg height={size} width={size} fill="none" viewBox="0 0 24 24" strokeWidth={stroke} xmlns="http://www.w3.org/2000/svg" {...props}>
	<Path d="M14 12C14 15.3137 11.3137 18 8 18C4.68629 18 2 15.3137 2 12C2 8.68629 4.68629 6 8 6" stroke="black" strokeLinecap="round" strokeWidth="1.5"/>
	<Path d="M10 12C10 8.68629 12.6863 6 16 6M16 18C19.3137 18 22 15.3137 22 12C22 10.7733 21.6318 9.63251 21 8.68221" stroke="black" strokeLinecap="round" strokeWidth="1.5"/>
</Svg>;

export default BrokenTextFormattingLinkCircle;
