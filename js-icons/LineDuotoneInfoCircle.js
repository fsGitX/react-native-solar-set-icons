import * as React from "react"
import Svg, { Path } from "react-native-svg";
    
const LineDuotoneInfoCircle = ({
    size = 24,
    color = "#1f2937",
    stroke = 2,
    ...props
    }) => <Svg height={size} width={size} fill="none" viewBox="0 0 24 24" strokeWidth={stroke} xmlns="http://www.w3.org/2000/svg" {...props}>
	<circle cx="12" cy="12" opacity="0.5" r="10" stroke="black" strokeWidth="1.5"/>
	<circle fill={color} r="1" transform="matrix(1 0 0 -1 12 8)"/>
	<Path d="M12 17V11" stroke="black" strokeLinecap="round" strokeWidth="1.5"/>
</Svg>;

export default LineDuotoneInfoCircle;
