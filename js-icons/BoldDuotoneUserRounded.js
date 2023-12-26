import * as React from "react"
import Svg, { Path } from "react-native-svg";
    
const BoldDuotoneUserRounded = ({
    size = 24,
    color = "#1f2937",
    stroke = 2,
    ...props
    }) => <Svg height={size} width={size} fill="none" viewBox="0 0 24 24" strokeWidth={stroke} xmlns="http://www.w3.org/2000/svg" {...props}>
	<circle cx="12" cy="6" fill={color} r="4"/>
	<ellipse cx="12" cy="17" fill={color} opacity="0.5" rx="7" ry="4"/>
</Svg>;

export default BoldDuotoneUserRounded;
