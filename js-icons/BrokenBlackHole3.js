import * as React from "react"
import Svg, { Path } from "react-native-svg";
    
const BrokenBlackHole3 = ({
    size = 24,
    color = "#1f2937",
    stroke = 2,
    ...props
    }) => <Svg height={size} width={size} fill="none" viewBox="0 0 24 24" strokeWidth={stroke} xmlns="http://www.w3.org/2000/svg" {...props}>
	<circle cx="12" cy="12" r="2" stroke="black" strokeWidth="1.5"/>
	<Path d="M12 10C17 10 16.6 22 9 22" stroke="black" strokeLinecap="round" strokeWidth="1.5"/>
	<Path d="M12.3115 14C7.31152 14 7.71152 2 15.3115 2" stroke="black" strokeLinecap="round" strokeWidth="1.5"/>
	<Path d="M10 12.3115C10 9.53259 13.7068 8.42171 17 9.28791M22 15.3115C22 13.342 21.1941 11.856 20 10.8222" stroke="black" strokeLinecap="round" strokeWidth="1.5"/>
	<Path d="M14 12C14 14.7789 10.2932 15.8898 7 15.0236M2 9C2 10.6801 2.58643 12.0083 3.5 13.0041" stroke="black" strokeLinecap="round" strokeWidth="1.5"/>
</Svg>;

export default BrokenBlackHole3;