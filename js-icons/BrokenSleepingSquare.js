import * as React from "react"
import Svg, { Path } from "react-native-svg";
    
const BrokenSleepingSquare = ({
    size = 24,
    color = "#1f2937",
    stroke = 2,
    ...props
    }) => <Svg height={size} width={size} fill="none" viewBox="0 0 24 24" strokeWidth={stroke} xmlns="http://www.w3.org/2000/svg" {...props}>
	<Path d="M6.5 11C7.06692 11.6303 7.75638 12 8.5 12C9.24362 12 9.93308 11.6303 10.5 11" stroke="black" strokeLinecap="round" strokeWidth="1.5"/>
	<Path d="M13.5 11C14.0669 11.6303 14.7564 12 15.5 12C16.2436 12 16.9331 11.6303 17.5 11" stroke="black" strokeLinecap="round" strokeWidth="1.5"/>
	<Path d="M13 16C13 16.5523 12.5523 17 12 17C11.4477 17 11 16.5523 11 16C11 15.4477 11.4477 15 12 15C12.5523 15 13 15.4477 13 16Z" fill={color}/>
	<Path d="M2 12C2 7.28595 2 4.92893 3.46447 3.46447C4.92893 2 7.28595 2 12 2M22 12C22 16.714 22 19.0711 20.5355 20.5355C19.0711 22 16.714 22 12 22C7.28595 22 4.92893 22 3.46447 20.5355C2.49073 19.5618 2.16444 18.1934 2.0551 16" stroke="black" strokeLinecap="round" strokeWidth="1.5"/>
	<Path d="M17 4L20.4641 2L19 7.4641L22.4641 5.4641" stroke="black" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5"/>
	<Path d="M14.0481 5.5L15.7801 6.5L13.0481 7.23205L14.7801 8.23205" stroke="black" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5"/>
</Svg>;

export default BrokenSleepingSquare;
