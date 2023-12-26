import * as React from "react"
import Svg, { Path } from "react-native-svg";
    
const LineDuotoneElectronicServerPath = ({
    size = 24,
    color = "#1f2937",
    stroke = 2,
    ...props
    }) => <Svg height={size} width={size} fill="none" viewBox="0 0 24 24" strokeWidth={stroke} xmlns="http://www.w3.org/2000/svg" {...props}>
	<Path d="M22 19H14M2 19H10" opacity="0.5" stroke="black" strokeLinecap="round" strokeWidth="1.5"/>
	<Path d="M12 17V14" opacity="0.5" stroke="black" strokeLinecap="round" strokeWidth="1.5"/>
	<Path d="M2 11C2 9.34315 3.34315 8 5 8H19C20.6569 8 22 9.34315 22 11C22 12.6569 20.6569 14 19 14H5C3.34315 14 2 12.6569 2 11Z" stroke="black" strokeWidth="1.5"/>
	<Path d="M2 5C2 3.34315 3.34315 2 5 2H19C20.6569 2 22 3.34315 22 5C22 6.65685 20.6569 8 19 8H5C3.34315 8 2 6.65685 2 5Z" stroke="black" strokeWidth="1.5"/>
	<Path d="M13 5L19 5" opacity="0.5" stroke="black" strokeLinecap="round" strokeWidth="1.5"/>
	<Path d="M13 11L19 11" opacity="0.5" stroke="black" strokeLinecap="round" strokeWidth="1.5"/>
	<circle cx="12" cy="19" r="2" stroke="black" strokeWidth="1.5"/>
	<circle cx="6" cy="5" fill={color} opacity="0.5" r="1"/>
	<circle cx="6" cy="11" fill={color} opacity="0.5" r="1"/>
</Svg>;

export default LineDuotoneElectronicServerPath;
