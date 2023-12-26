import * as React from "react"
import Svg, { Path } from "react-native-svg";
    
const BrokenSecurityScanner = ({
    size = 24,
    color = "#1f2937",
    stroke = 2,
    ...props
    }) => <Svg height={size} width={size} fill="none" viewBox="0 0 24 24" strokeWidth={stroke} xmlns="http://www.w3.org/2000/svg" {...props}>
	<Path d="M10 22C9.65081 22 9.31779 22 9 21.9991M2 15C2 18.7712 2 19.6569 3.17157 20.8284C3.82475 21.4816 4.69989 21.7706 6 21.8985" stroke="black" strokeLinecap="round" strokeWidth="1.5"/>
	<Path d="M22 15C22 18.7712 22 19.6569 20.8284 20.8284C19.6569 22 17.7712 22 14 22" stroke="black" strokeLinecap="round" strokeWidth="1.5"/>
	<Path d="M14 2C14.3492 2 14.6822 2 15 2.00093M22 9C22 5.22876 22 4.34315 20.8284 3.17157C20.1752 2.51839 19.3001 2.22937 18 2.10149" stroke="black" strokeLinecap="round" strokeWidth="1.5"/>
	<Path d="M10 2C6.22876 2 4.34315 2 3.17157 3.17157C2 4.34315 2 5.22876 2 9" stroke="black" strokeLinecap="round" strokeWidth="1.5"/>
	<Path d="M2 12H8M22 12H12" stroke="black" strokeLinecap="round" strokeWidth="1.5"/>
</Svg>;

export default BrokenSecurityScanner;
