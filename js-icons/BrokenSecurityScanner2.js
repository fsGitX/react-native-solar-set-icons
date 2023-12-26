import * as React from "react"
import Svg, { Path } from "react-native-svg";
    
const BrokenSecurityScanner2 = ({
    size = 24,
    color = "#1f2937",
    stroke = 2,
    ...props
    }) => <Svg height={size} width={size} fill="none" viewBox="0 0 24 24" strokeWidth={stroke} xmlns="http://www.w3.org/2000/svg" {...props}>
	<Path d="M6 13C6 13 7.8 11 12 11C16.2 11 18 13 18 13" stroke="black" strokeLinecap="round" strokeWidth="1.5"/>
	<Path d="M10 22C6.22876 22 4.34315 22 3.17157 20.8284C2 19.6569 2 17.7712 2 14" stroke="black" strokeLinecap="round" strokeWidth="1.5"/>
	<Path d="M14 2C17.7712 2 19.6569 2 20.8284 3.17157C22 4.34315 22 6.22876 22 10" stroke="black" strokeLinecap="round" strokeWidth="1.5"/>
	<Path d="M22 14C22 14.3492 22 14.6822 21.9991 15M14 22C17.7712 22 19.6569 22 20.8284 20.8284C21.4816 20.1752 21.7706 19.3001 21.8985 18" stroke="black" strokeLinecap="round" strokeWidth="1.5"/>
	<Path d="M2 10C2 9.65081 2 9.31779 2.00093 9M10 2C6.22876 2 4.34315 2 3.17157 3.17157C2.51839 3.82476 2.22938 4.69989 2.10149 6" stroke="black" strokeLinecap="round" strokeWidth="1.5"/>
</Svg>;

export default BrokenSecurityScanner2;
