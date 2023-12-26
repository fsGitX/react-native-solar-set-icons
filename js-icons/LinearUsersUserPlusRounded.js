import * as React from "react"
import Svg, { Path } from "react-native-svg";
    
const LinearUsersUserPlusRounded = ({
    size = 24,
    color = "#1f2937",
    stroke = 2,
    ...props
    }) => <Svg height={size} width={size} fill="none" viewBox="0 0 24 24" strokeWidth={stroke} xmlns="http://www.w3.org/2000/svg" {...props}>
	<circle cx="12" cy="6" r="4" stroke="black" strokeWidth="1.5"/>
	<circle cx="17" cy="18" r="4" stroke="black" strokeWidth="1.5"/>
	<Path d="M17 16.6665V19.3332" stroke="black" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5"/>
	<Path d="M15.6665 18L18.3332 18" stroke="black" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5"/>
	<Path d="M14 20.8344C13.3663 20.9421 12.695 21 12 21C8.13401 21 5 19.2091 5 17C5 14.7909 8.13401 13 12 13C13.7135 13 15.2832 13.3518 16.5 13.9359" stroke="black" strokeWidth="1.5"/>
</Svg>;

export default LinearUsersUserPlusRounded;
