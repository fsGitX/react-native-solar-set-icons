import * as React from "react"
import Svg, { Path } from "react-native-svg";
    
const LineDuotoneNetworkStructure = ({
    size = 24,
    color = "#1f2937",
    stroke = 2,
    ...props
    }) => <Svg height={size} width={size} fill="none" viewBox="0 0 24 24" strokeWidth={stroke} xmlns="http://www.w3.org/2000/svg" {...props}>
	<Path d="M8 5C8 6.65685 6.65685 8 5 8C3.34315 8 2 6.65685 2 5C2 3.34315 3.34315 2 5 2C6.65685 2 8 3.34315 8 5Z" stroke="black" strokeWidth="1.5"/>
	<Path d="M22 5C22 6.65685 20.6569 8 19 8C17.3431 8 16 6.65685 16 5C16 3.34315 17.3431 2 19 2C20.6569 2 22 3.34315 22 5Z" stroke="black" strokeWidth="1.5"/>
	<Path d="M8 19C8 20.6569 6.65685 22 5 22C3.34315 22 2 20.6569 2 19C2 17.3431 3.34315 16 5 16C6.65685 16 8 17.3431 8 19Z" stroke="black" strokeWidth="1.5"/>
	<Path d="M22 19C22 20.6569 20.6569 22 19 22C17.3431 22 16 20.6569 16 19C16 17.3431 17.3431 16 19 16C20.6569 16 22 17.3431 22 19Z" stroke="black" strokeWidth="1.5"/>
	<Path d="M8 19H16" opacity="0.5" stroke="black" strokeLinecap="round" strokeWidth="1.5"/>
	<Path d="M8 5H16" opacity="0.5" stroke="black" strokeLinecap="round" strokeWidth="1.5"/>
	<Path d="M19 16L19 8" opacity="0.5" stroke="black" strokeLinecap="round" strokeWidth="1.5"/>
	<Path d="M5 16L5 8" opacity="0.5" stroke="black" strokeLinecap="round" strokeWidth="1.5"/>
</Svg>;

export default LineDuotoneNetworkStructure;
