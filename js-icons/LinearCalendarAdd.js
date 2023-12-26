import * as React from "react"
import Svg, { Path } from "react-native-svg";
    
const LinearCalendarAdd = ({
    size = 24,
    color = "#1f2937",
    stroke = 2,
    ...props
    }) => <Svg height={size} width={size} fill="none" viewBox="0 0 24 24" strokeWidth={stroke} xmlns="http://www.w3.org/2000/svg" {...props}>
	<Path d="M2 12C2 8.22876 2 6.34315 3.17157 5.17157C4.34315 4 6.22876 4 10 4H14C17.7712 4 19.6569 4 20.8284 5.17157C22 6.34315 22 8.22876 22 12V14C22 17.7712 22 19.6569 20.8284 20.8284C19.6569 22 17.7712 22 14 22H10C6.22876 22 4.34315 22 3.17157 20.8284C2 19.6569 2 17.7712 2 14V12Z" stroke="black" strokeWidth="1.5"/>
	<Path d="M18 16L16 16M16 16L14 16M16 16L16 14M16 16L16 18" stroke="black" strokeLinecap="round" strokeWidth="1.5"/>
	<Path d="M7 4V2.5" stroke="black" strokeLinecap="round" strokeWidth="1.5"/>
	<Path d="M17 4V2.5" stroke="black" strokeLinecap="round" strokeWidth="1.5"/>
	<Path d="M2.5 9H21.5" stroke="black" strokeLinecap="round" strokeWidth="1.5"/>
</Svg>;

export default LinearCalendarAdd;
