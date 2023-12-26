import * as React from "react"
import Svg, { Path } from "react-native-svg";
    
const LineDuotoneKeyMinimalistic2 = ({
    size = 24,
    color = "#1f2937",
    stroke = 2,
    ...props
    }) => <Svg height={size} width={size} fill="none" viewBox="0 0 24 24" strokeWidth={stroke} xmlns="http://www.w3.org/2000/svg" {...props}>
	<circle cx="15" cy="9" r="7" stroke="black" strokeWidth="1.5"/>
	<circle cx="15" cy="9" opacity="0.5" r="2" stroke="black" strokeWidth="1.5"/>
	<Path d="M3.5 20.5L9.5 14.5" stroke="black" strokeLinecap="round" strokeWidth="1.5"/>
	<Path d="M6 21L4.5 19.5M6.5 17.5L8 19" stroke="black" strokeLinecap="round" strokeWidth="1.5"/>
</Svg>;

export default LineDuotoneKeyMinimalistic2;
