import * as React from "react"
import Svg, { Path } from "react-native-svg";
    
const LinearTransportTram = ({
    size = 24,
    color = "#1f2937",
    stroke = 2,
    ...props
    }) => <Svg height={size} width={size} fill="none" viewBox="0 0 24 24" strokeWidth={stroke} xmlns="http://www.w3.org/2000/svg" {...props}>
	<Path d="M4 10C4 6.22876 4 4.34315 5.17157 3.17157C6.34315 2 8.22876 2 12 2C15.7712 2 17.6569 2 18.8284 3.17157C20 4.34315 20 6.22876 20 10V12C20 15.7712 20 17.6569 18.8284 18.8284C17.6569 20 15.7712 20 12 20C8.22876 20 6.34315 20 5.17157 18.8284C4 17.6569 4 15.7712 4 12V10Z" stroke="#1C274C" strokeWidth="1.5"/>
	<Path d="M4 13H20" stroke="#1C274C" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5"/>
	<Path d="M15.5 16H17" stroke="#1C274C" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5"/>
	<Path d="M7 16H8.5" stroke="#1C274C" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5"/>
	<Path d="M7 20L6 22" stroke="#1C274C" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5"/>
	<Path d="M17 20L18 22" stroke="#1C274C" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5"/>
	<Path d="M10 2V2.5C10 3.60457 10.8954 4.5 12 4.5C13.1046 4.5 14 3.60457 14 2.5V2" stroke="#1C274C" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5"/>
</Svg>;

export default LinearTransportTram;