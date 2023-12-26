import * as React from "react"
import Svg, { Path } from "react-native-svg";
    
const LineDuotoneFoodDonut = ({
    size = 24,
    color = "#1f2937",
    stroke = 2,
    ...props
    }) => <Svg height={size} width={size} fill="none" viewBox="0 0 24 24" strokeWidth={stroke} xmlns="http://www.w3.org/2000/svg" {...props}>
	<circle cx="12" cy="12" r="10" stroke="black" strokeWidth="1.5"/>
	<circle cx="12" cy="12" r="3" stroke="black" strokeWidth="1.5"/>
	<Path d="M2 13C2 13 4.20085 15 6 15C7.21199 15 8.60628 14.0924 9.38725 13.5" opacity="0.5" stroke="black" strokeWidth="1.5"/>
	<Path d="M14 14.2236C14.4713 14.6389 15.0875 15 15.8053 15C17.4948 15 17.4948 13 19.1842 13C20.2618 13 21.1102 13.8136 21.5835 14.4029" opacity="0.5" stroke="black" strokeWidth="1.5"/>
	<Path d="M14.5 7L16 5" stroke="black" strokeLinecap="round" strokeWidth="1.5"/>
	<Path d="M19 7L20 6" opacity="0.5" stroke="black" strokeLinecap="round" strokeWidth="1.5"/>
	<Path d="M12 5L11 4" stroke="black" strokeLinecap="round" strokeWidth="1.5"/>
	<Path d="M10.5 7L9.13397 7.36603" opacity="0.5" stroke="black" strokeLinecap="round" strokeWidth="1.5"/>
	<Path d="M16.6499 8.9766L16.7162 10.3893" opacity="0.5" stroke="black" strokeLinecap="round" strokeWidth="1.5"/>
	<Path d="M20.6777 10.085L18.9996 11.5629" stroke="black" strokeLinecap="round" strokeWidth="1.5"/>
	<Path d="M7 5L6 4" opacity="0.5" stroke="black" strokeLinecap="round" strokeWidth="1.5"/>
	<Path d="M6.79245 9.14385L6.20722 7.85641" stroke="black" strokeLinecap="round" strokeWidth="1.5"/>
	<Path d="M5.66489 12.6412L6.50012 11.5" stroke="black" strokeLinecap="round" strokeWidth="1.5"/>
	<Path d="M3.68268 10.3498L3.60402 8.93781" opacity="0.5" stroke="black" strokeLinecap="round" strokeWidth="1.5"/>
</Svg>;

export default LineDuotoneFoodDonut;
