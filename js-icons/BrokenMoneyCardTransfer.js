import * as React from "react"
import Svg, { Path } from "react-native-svg";
    
const BrokenMoneyCardTransfer = ({
    size = 24,
    color = "#1f2937",
    stroke = 2,
    ...props
    }) => <Svg height={size} width={size} fill="none" viewBox="0 0 24 24" strokeWidth={stroke} xmlns="http://www.w3.org/2000/svg" {...props}>
	<Path d="M10 4C6.22876 4 4.34315 4 3.17157 5.17157C2 6.34315 2 8.22876 2 12C2 15.7712 2 17.6569 3.17157 18.8284C4.34315 20 6.22876 20 10 20H11.5M14 4C17.7712 4 19.6569 4 20.8284 5.17157C21.8915 6.23467 21.99 7.8857 21.9991 11" stroke="black" strokeLinecap="round" strokeWidth="1.5"/>
	<Path d="M15.5 14V20M15.5 20L17.5 18M15.5 20L13.5 18M20 20V14M20 14L22 16M20 14L18 16" stroke="black" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5"/>
	<Path d="M10 16H6" stroke="black" strokeLinecap="round" strokeWidth="1.5"/>
	<Path d="M2 10L7 10M22 10L11 10" stroke="black" strokeLinecap="round" strokeWidth="1.5"/>
</Svg>;

export default BrokenMoneyCardTransfer;
