import * as React from "react"
import Svg, { Path } from "react-native-svg";
    
const LineDuotoneMoneySafeCircle = ({
    size = 24,
    color = "#1f2937",
    stroke = 2,
    ...props
    }) => <Svg height={size} width={size} fill="none" viewBox="0 0 24 24" strokeWidth={stroke} xmlns="http://www.w3.org/2000/svg" {...props}>
	<Path d="M2 12C2 6.47715 6.47715 2 12 2C17.5228 2 22 6.47715 22 12C22 17.5228 17.5228 22 12 22C6.47715 22 2 17.5228 2 12Z" stroke="black" strokeWidth="1.5"/>
	<Path d="M7 8L7 16" opacity="0.5" stroke="black" strokeLinecap="round" strokeWidth="1.5"/>
	<Path d="M12 12C12 10.8954 12.8954 10 14 10C15.1046 10 16 10.8954 16 12C16 13.1046 15.1046 14 14 14C12.8954 14 12 13.1046 12 12Z" stroke="black" strokeWidth="1.5"/>
	<Path d="M16 10L17 9" opacity="0.5" stroke="black" strokeLinecap="round" strokeWidth="1.5"/>
	<Path d="M11 15L12 14" opacity="0.5" stroke="black" strokeLinecap="round" strokeWidth="1.5"/>
	<Path d="M12 10L11 9" opacity="0.5" stroke="black" strokeLinecap="round" strokeWidth="1.5"/>
	<Path d="M17 15L16 14" opacity="0.5" stroke="black" strokeLinecap="round" strokeWidth="1.5"/>
</Svg>;

export default LineDuotoneMoneySafeCircle;
