import * as React from "react"
import Svg, { Path } from "react-native-svg";
    
const LinearFerrisWheel = ({
    size = 24,
    color = "#1f2937",
    stroke = 2,
    ...props
    }) => <Svg height={size} width={size} fill="none" viewBox="0 0 24 24" strokeWidth={stroke} xmlns="http://www.w3.org/2000/svg" {...props}>
	<circle cx="12" cy="11" r="2" stroke="black" strokeWidth="1.5"/>
	<Path d="M20.5 7.5C20.5 8.05228 20.0523 8.5 19.5 8.5C18.9477 8.5 18.5 8.05228 18.5 7.5C18.5 6.94772 18.9477 6.5 19.5 6.5C20.0523 6.5 20.5 6.94772 20.5 7.5Z" stroke="black" strokeWidth="1.5"/>
	<Path d="M20.5 16C20.5 16.5523 20.0523 17 19.5 17C18.9477 17 18.5 16.5523 18.5 16C18.5 15.4477 18.9477 15 19.5 15C20.0523 15 20.5 15.4477 20.5 16Z" stroke="black" strokeWidth="1.5"/>
	<Path d="M5.5 7.5C5.5 8.05228 5.05228 8.5 4.5 8.5C3.94772 8.5 3.5 8.05228 3.5 7.5C3.5 6.94772 3.94772 6.5 4.5 6.5C5.05228 6.5 5.5 6.94772 5.5 7.5Z" stroke="black" strokeWidth="1.5"/>
	<Path d="M5.5 16C5.5 16.5523 5.05228 17 4.5 17C3.94772 17 3.5 16.5523 3.5 16C3.5 15.4477 3.94772 15 4.5 15C5.05228 15 5.5 15.4477 5.5 16Z" stroke="black" strokeWidth="1.5"/>
	<Path d="M12 2.5C12.5523 2.5 13 2.94772 13 3.5C13 4.05228 12.5523 4.5 12 4.5C11.4477 4.5 11 4.05228 11 3.5C11 2.94772 11.4477 2.5 12 2.5Z" stroke="black" strokeWidth="1.5"/>
	<Path d="M12 18.5C12.5523 18.5 13 18.9477 13 19.5C13 20.0523 12.5523 20.5 12 20.5C11.4477 20.5 11 20.0523 11 19.5C11 18.9477 11.4477 18.5 12 18.5Z" stroke="black" strokeWidth="1.5"/>
	<Path d="M13.5 13L18.5 22" stroke="black" strokeLinecap="round" strokeWidth="1.5"/>
	<Path d="M10.5 13L5.5 22" stroke="black" strokeLinecap="round" strokeWidth="1.5"/>
	<Path d="M10.5638 3.78311C11.4591 3.29495 12.541 3.29495 13.4362 3.78311L18.2304 6.39728C19.1944 6.92292 19.7942 7.93319 19.7942 9.03117V13.9688C19.7942 15.0668 19.1944 16.0771 18.2304 16.6027L13.4362 19.2169C12.541 19.705 11.4591 19.705 10.5638 19.2169L5.76959 16.6027C4.8056 16.0771 4.20578 15.0668 4.20578 13.9688V9.03117C4.20578 7.93318 4.8056 6.92292 5.76959 6.39728L10.5638 3.78311Z" stroke="black" strokeWidth="1.5"/>
</Svg>;

export default LinearFerrisWheel;