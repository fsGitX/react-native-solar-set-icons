import * as React from "react"
import Svg, { Path } from "react-native-svg";
    
const LinearSun2 = ({
    size = 24,
    color = "#1f2937",
    stroke = 2,
    ...props
    }) => <Svg height={size} width={size} fill="none" viewBox="0 0 24 24" strokeWidth={stroke} xmlns="http://www.w3.org/2000/svg" {...props}>
	<circle cx="12" cy="12" r="5" stroke="black" strokeWidth="1.5"/>
	<Path d="M12 2V4" stroke="black" strokeLinecap="round" strokeWidth="1.5"/>
	<Path d="M12 20V22" stroke="black" strokeLinecap="round" strokeWidth="1.5"/>
	<Path d="M4 12L2 12" stroke="black" strokeLinecap="round" strokeWidth="1.5"/>
	<Path d="M22 12L20 12" stroke="black" strokeLinecap="round" strokeWidth="1.5"/>
	<Path d="M19.7778 4.22217L17.5558 6.25375" stroke="black" strokeLinecap="round" strokeWidth="1.5"/>
	<Path d="M4.22217 4.22217L6.44418 6.25375" stroke="black" strokeLinecap="round" strokeWidth="1.5"/>
	<Path d="M6.44434 17.5557L4.22211 19.7779" stroke="black" strokeLinecap="round" strokeWidth="1.5"/>
	<Path d="M19.7778 19.7778L17.5558 17.5555" stroke="black" strokeLinecap="round" strokeWidth="1.5"/>
</Svg>;

export default LinearSun2;
