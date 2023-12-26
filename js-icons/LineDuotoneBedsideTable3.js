import * as React from "react"
import Svg, { Path } from "react-native-svg";
    
const LineDuotoneBedsideTable3 = ({
    size = 24,
    color = "#1f2937",
    stroke = 2,
    ...props
    }) => <Svg height={size} width={size} fill="none" viewBox="0 0 24 24" strokeWidth={stroke} xmlns="http://www.w3.org/2000/svg" {...props}>
	<Path d="M19 22V20.5M5 22V20.5" opacity="0.5" stroke="black" strokeLinecap="round" strokeWidth="1.5"/>
	<Path d="M2 10C2 6.22876 2 4.34315 3.17157 3.17157C4.34315 2 6.22876 2 10 2H14C17.7712 2 19.6569 2 20.8284 3.17157C22 4.34315 22 6.22876 22 10V12C22 15.7712 22 17.6569 20.8284 18.8284C19.6569 20 17.7712 20 14 20H10C6.22876 20 4.34315 20 3.17157 18.8284C2 17.6569 2 15.7712 2 12V10Z" stroke="black" strokeWidth="1.5"/>
	<Path d="M9 15.5H15" stroke="black" strokeLinecap="round" strokeWidth="1.5"/>
	<Path d="M9 6.5H15" stroke="black" strokeLinecap="round" strokeWidth="1.5"/>
	<Path d="M2 11H22" opacity="0.4" stroke="black" strokeLinecap="round" strokeWidth="1.5"/>
</Svg>;

export default LineDuotoneBedsideTable3;
