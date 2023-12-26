import * as React from "react"
import Svg, { Path } from "react-native-svg";
    
const BrokenMoneyCardRecive = ({
    size = 24,
    color = "#1f2937",
    stroke = 2,
    ...props
    }) => <Svg height={size} width={size} fill="none" viewBox="0 0 24 24" strokeWidth={stroke} xmlns="http://www.w3.org/2000/svg" {...props}>
	<Path d="M19 14V20M19 20L21 18M19 20L17 18" stroke="black" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5"/>
	<Path d="M22 12C22 8.22876 22 6.34315 20.8284 5.17157C19.6569 4 17.7712 4 14 4M14 20H10C6.22876 20 4.34315 20 3.17157 18.8284C2 17.6569 2 15.7712 2 12C2 8.22876 2 6.34315 3.17157 5.17157C4.34315 4 6.22876 4 10 4" stroke="black" strokeLinecap="round" strokeWidth="1.5"/>
	<Path d="M10 16H6" stroke="black" strokeLinecap="round" strokeWidth="1.5"/>
	<Path d="M13 16H12.5" stroke="black" strokeLinecap="round" strokeWidth="1.5"/>
	<Path d="M2 10L7 10M22 10L11 10" stroke="black" strokeLinecap="round" strokeWidth="1.5"/>
</Svg>;

export default BrokenMoneyCardRecive;
