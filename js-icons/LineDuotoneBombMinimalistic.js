import * as React from "react"
import Svg, { Path } from "react-native-svg";
    
const LineDuotoneBombMinimalistic = ({
    size = 24,
    color = "#1f2937",
    stroke = 2,
    ...props
    }) => <Svg height={size} width={size} fill="none" viewBox="0 0 24 24" strokeWidth={stroke} xmlns="http://www.w3.org/2000/svg" {...props}>
	<circle cx="9.5" cy="14.5" r="7.5" stroke="black" strokeWidth="1.5"/>
	<Path d="M17 7L15 9" opacity="0.5" stroke="black" strokeLinecap="round" strokeWidth="1.5"/>
	<Path d="M19.5 7.5L20.5 8" stroke="black" strokeLinecap="round" strokeWidth="1.5"/>
	<Path d="M16 3.5L16.5 4.5" stroke="black" strokeLinecap="round" strokeWidth="1.5"/>
	<Path d="M19 5L20 4" stroke="black" strokeLinecap="round" strokeWidth="1.5"/>
</Svg>;

export default LineDuotoneBombMinimalistic;
