import * as React from "react"
import Svg, { Path } from "react-native-svg";
    
const BrokenEssentionalMenuDots = ({
    size = 24,
    color = "#1f2937",
    stroke = 2,
    ...props
    }) => <Svg height={size} width={size} fill="none" viewBox="0 0 24 24" strokeWidth={stroke} xmlns="http://www.w3.org/2000/svg" {...props}>
	<Path d="M5 14C6.10457 14 7 13.1046 7 12C7 10.8954 6.10457 10 5 10C3.89543 10 3 10.8954 3 12" stroke="black" strokeLinecap="round" strokeWidth="1.5"/>
	<Path d="M21 12C21 13.1046 20.1046 14 19 14C17.8954 14 17 13.1046 17 12C17 10.8954 17.8954 10 19 10" stroke="black" strokeLinecap="round" strokeWidth="1.5"/>
	<circle cx="12" cy="12" r="2" stroke="black" strokeWidth="1.5"/>
</Svg>;

export default BrokenEssentionalMenuDots;
