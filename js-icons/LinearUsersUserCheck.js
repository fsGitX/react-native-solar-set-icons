import * as React from "react"
import Svg, { Path } from "react-native-svg";
    
const LinearUsersUserCheck = ({
    size = 24,
    color = "#1f2937",
    stroke = 2,
    ...props
    }) => <Svg height={size} width={size} fill="none" viewBox="0 0 24 24" strokeWidth={stroke} xmlns="http://www.w3.org/2000/svg" {...props}>
	<circle cx="12" cy="6" r="4" stroke="black" strokeWidth="1.5"/>
	<circle cx="18" cy="16" r="4" stroke="black" strokeWidth="1.5"/>
	<Path d="M16.6665 16.0002L17.5 17.0002L19.3332 15.1113" stroke="black" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5"/>
	<Path d="M15 13.3271C14.0736 13.1162 13.0609 13 12 13C7.58172 13 4 15.0147 4 17.5C4 19.9853 4 22 12 22C17.6874 22 19.3315 20.9817 19.8068 19.5" stroke="black" strokeWidth="1.5"/>
</Svg>;

export default LinearUsersUserCheck;
