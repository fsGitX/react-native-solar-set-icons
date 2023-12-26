import * as React from "react"
import Svg, { Path } from "react-native-svg";
    
const BoldDuotoneUsersUser = ({
    size = 24,
    color = "#1f2937",
    stroke = 2,
    ...props
    }) => <Svg height={size} width={size} fill="none" viewBox="0 0 24 24" strokeWidth={stroke} xmlns="http://www.w3.org/2000/svg" {...props}>
	<circle cx="12" cy="6" fill={color} r="4"/>
	<Path d="M20 17.5C20 19.9853 20 22 12 22C4 22 4 19.9853 4 17.5C4 15.0147 7.58172 13 12 13C16.4183 13 20 15.0147 20 17.5Z" fill={color} opacity="0.5"/>
</Svg>;

export default BoldDuotoneUsersUser;
