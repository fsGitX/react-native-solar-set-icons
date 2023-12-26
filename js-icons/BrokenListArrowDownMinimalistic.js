import * as React from "react"
import Svg, { Path } from "react-native-svg";
    
const BrokenListArrowDownMinimalistic = ({
    size = 24,
    color = "#1f2937",
    stroke = 2,
    ...props
    }) => <Svg height={size} width={size} fill="none" viewBox="0 0 24 24" strokeWidth={stroke} xmlns="http://www.w3.org/2000/svg" {...props}>
	<Path d="M11 16L3 16" stroke="black" strokeLinecap="round" strokeWidth="1.5"/>
	<Path d="M12 11L3 11" stroke="black" strokeLinecap="round" strokeWidth="1.5"/>
	<Path d="M15 14.5L17.5 17M17.5 17L20 14.5M17.5 17V9" stroke="black" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5"/>
	<Path d="M3 6L13.5 6M20 6L17.75 6" stroke="black" strokeLinecap="round" strokeWidth="1.5"/>
</Svg>;

export default BrokenListArrowDownMinimalistic;
