import * as React from "react"
import Svg, { Path } from "react-native-svg";
    
const BrokenListListArrowUpMinimalistic = ({
    size = 24,
    color = "#1f2937",
    stroke = 2,
    ...props
    }) => <Svg height={size} width={size} fill="none" viewBox="0 0 24 24" strokeWidth={stroke} xmlns="http://www.w3.org/2000/svg" {...props}>
	<Path d="M11 11L3 11" stroke="black" strokeLinecap="round" strokeWidth="1.5"/>
	<Path d="M12 16H3" stroke="black" strokeLinecap="round" strokeWidth="1.5"/>
	<Path d="M15 11.5L17.5 9M17.5 9L20 11.5M17.5 9V17" stroke="black" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5"/>
	<Path d="M20 6L9.5 6M3 6L5.25 6" stroke="black" strokeLinecap="round" strokeWidth="1.5"/>
</Svg>;

export default BrokenListListArrowUpMinimalistic;
