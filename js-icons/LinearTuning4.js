import * as React from "react"
import Svg, { Path } from "react-native-svg";
    
const LinearTuning4 = ({
    size = 24,
    color = "#1f2937",
    stroke = 2,
    ...props
    }) => <Svg height={size} width={size} fill="none" viewBox="0 0 24 24" strokeWidth={stroke} xmlns="http://www.w3.org/2000/svg" {...props}>
	<circle cx="12" cy="12" r="2" stroke="black" strokeWidth="1.5" transform="rotate(-90 12 12)"/>
	<circle cx="10" cy="20" r="2" stroke="black" strokeWidth="1.5" transform="rotate(-90 10 20)"/>
	<circle r="2" stroke="black" strokeWidth="1.5" transform="matrix(-4.37114e-08 -1 -1 4.37114e-08 14 4)"/>
	<Path d="M16 12L19 12" stroke="black" strokeLinecap="round" strokeWidth="1.5"/>
	<Path d="M14 20L19 20" stroke="black" strokeLinecap="round" strokeWidth="1.5"/>
	<Path d="M10 4L5 4" stroke="black" strokeLinecap="round" strokeWidth="1.5"/>
	<Path d="M5 12L8 12" stroke="black" strokeLinecap="round" strokeWidth="1.5"/>
	<Path d="M5 20L6 20" stroke="black" strokeLinecap="round" strokeWidth="1.5"/>
	<Path d="M19 4L18 4" stroke="black" strokeLinecap="round" strokeWidth="1.5"/>
</Svg>;

export default LinearTuning4;
