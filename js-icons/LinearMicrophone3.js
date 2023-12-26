import * as React from "react"
import Svg, { Path } from "react-native-svg";
    
const LinearMicrophone3 = ({
    size = 24,
    color = "#1f2937",
    stroke = 2,
    ...props
    }) => <Svg height={size} width={size} fill="none" viewBox="0 0 24 24" strokeWidth={stroke} xmlns="http://www.w3.org/2000/svg" {...props}>
	<Path d="M7 8C7 5.23858 9.23858 3 12 3C14.7614 3 17 5.23858 17 8V11C17 13.7614 14.7614 16 12 16C9.23858 16 7 13.7614 7 11V8Z" stroke="black" strokeWidth="1.5"/>
	<Path d="M11 8H13" stroke="black" strokeLinecap="round" strokeWidth="1.5"/>
	<Path d="M10 11L14 11" stroke="black" strokeLinecap="round" strokeWidth="1.5"/>
	<Path d="M20 10V11C20 15.4183 16.4183 19 12 19C7.58172 19 4 15.4183 4 11V10" stroke="black" strokeLinecap="round" strokeWidth="1.5"/>
	<Path d="M12 19V22" stroke="black" strokeLinecap="round" strokeWidth="1.5"/>
</Svg>;

export default LinearMicrophone3;
