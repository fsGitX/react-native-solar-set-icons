import * as React from "react"
import Svg, { Path } from "react-native-svg";
    
const LinearScanner = ({
    size = 24,
    color = "#1f2937",
    stroke = 2,
    ...props
    }) => <Svg height={size} width={size} fill="none" viewBox="0 0 24 24" strokeWidth={stroke} xmlns="http://www.w3.org/2000/svg" {...props}>
	<Path d="M10 22C6.22876 22 4.34315 22 3.17157 20.8284C2 19.6569 2 18.7712 2 15" stroke="black" strokeLinecap="round" strokeWidth="1.5"/>
	<Path d="M22 15C22 18.7712 22 19.6569 20.8284 20.8284C19.6569 22 17.7712 22 14 22" stroke="black" strokeLinecap="round" strokeWidth="1.5"/>
	<Path d="M14 2C17.7712 2 19.6569 2 20.8284 3.17157C22 4.34315 22 5.22876 22 9" stroke="black" strokeLinecap="round" strokeWidth="1.5"/>
	<Path d="M10 2C6.22876 2 4.34315 2 3.17157 3.17157C2 4.34315 2 5.22876 2 9" stroke="black" strokeLinecap="round" strokeWidth="1.5"/>
	<Path d="M2 12H22" stroke="black" strokeLinecap="round" strokeWidth="1.5"/>
</Svg>;

export default LinearScanner;
