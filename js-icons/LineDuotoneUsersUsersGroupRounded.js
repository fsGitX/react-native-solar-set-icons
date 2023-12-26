import * as React from "react"
import Svg, { Path } from "react-native-svg";
    
const LineDuotoneUsersUsersGroupRounded = ({
    size = 24,
    color = "#1f2937",
    stroke = 2,
    ...props
    }) => <Svg height={size} width={size} fill="none" viewBox="0 0 24 24" strokeWidth={stroke} xmlns="http://www.w3.org/2000/svg" {...props}>
	<circle cx="9" cy="6" r="4" stroke="black" strokeWidth="1.5"/>
	<Path d="M12.5 4.3411C13.0375 3.53275 13.9565 3 15 3C16.6569 3 18 4.34315 18 6C18 7.65685 16.6569 9 15 9C13.9565 9 13.0375 8.46725 12.5 7.6589" opacity="0.5" stroke="black" strokeWidth="1.5"/>
	<Path d="M18 14C19.7542 14.3847 21 15.3589 21 16.5C21 17.5293 19.9863 18.4229 18.5 18.8704" opacity="0.5" stroke="black" strokeLinecap="round" strokeWidth="1.5"/>
	<ellipse cx="9" cy="17" rx="7" ry="4" stroke="black" strokeWidth="1.5"/>
</Svg>;

export default LineDuotoneUsersUsersGroupRounded;
