import * as React from "react"
import Svg, { Path } from "react-native-svg";
    
const BoldDuotoneUsersGroupRounded = ({
    size = 24,
    color = "#1f2937",
    stroke = 2,
    ...props
    }) => <Svg height={size} width={size} fill="none" viewBox="0 0 24 24" strokeWidth={stroke} xmlns="http://www.w3.org/2000/svg" {...props}>
	<circle cx="15" cy="6" fill={color} opacity="0.4" r="3"/>
	<circle cx="9.00098" cy="6" fill={color} r="4"/>
	<ellipse cx="16" cy="17" fill={color} opacity="0.4" rx="5" ry="3"/>
	<ellipse cx="9.00098" cy="17.001" fill={color} rx="7" ry="4"/>
</Svg>;

export default BoldDuotoneUsersGroupRounded;
