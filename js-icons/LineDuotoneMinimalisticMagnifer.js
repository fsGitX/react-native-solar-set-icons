import * as React from "react"
import Svg, { Path } from "react-native-svg";
    
const LineDuotoneMinimalisticMagnifer = ({
    size = 24,
    color = "#1f2937",
    stroke = 2,
    ...props
    }) => <Svg height={size} width={size} fill="none" viewBox="0 0 24 24" strokeWidth={stroke} xmlns="http://www.w3.org/2000/svg" {...props}>
	<circle cx="11.5" cy="11.5" r="9.5" stroke="#8E93A6" strokeWidth="1.5"/>
	<Path d="M20 20L22 22" stroke="black" strokeLinecap="round" strokeWidth="1.5"/>
</Svg>;

export default LineDuotoneMinimalisticMagnifer;
