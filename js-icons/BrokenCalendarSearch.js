import * as React from "react"
import Svg, { Path } from "react-native-svg";
    
const BrokenCalendarSearch = ({
    size = 24,
    color = "#1f2937",
    stroke = 2,
    ...props
    }) => <Svg height={size} width={size} fill="none" viewBox="0 0 24 24" strokeWidth={stroke} xmlns="http://www.w3.org/2000/svg" {...props}>
	<Path d="M22 14V12C22 8.22876 22 6.34315 20.8284 5.17157C19.6569 4 17.7712 4 14 4M14 22H10C6.22876 22 4.34315 22 3.17157 20.8284C2 19.6569 2 17.7712 2 14V12C2 8.22876 2 6.34315 3.17157 5.17157C4.34315 4 6.22876 4 10 4" stroke="black" strokeLinecap="round" strokeWidth="1.5"/>
	<Path d="M7 4V2.5" stroke="black" strokeLinecap="round" strokeWidth="1.5"/>
	<Path d="M17 4V2.5" stroke="black" strokeLinecap="round" strokeWidth="1.5"/>
	<Path d="M20.5 20.5L22 22" stroke="black" strokeLinecap="round" strokeWidth="1.5"/>
	<Path d="M21.5 9H16.625H10.75M2 9H5.875" stroke="black" strokeLinecap="round" strokeWidth="1.5"/>
	<circle cx="18" cy="18" r="3" stroke="black" strokeWidth="1.5"/>
</Svg>;

export default BrokenCalendarSearch;
