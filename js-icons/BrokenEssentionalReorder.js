import * as React from "react"
import Svg, { Path } from "react-native-svg";
    
const BrokenEssentionalReorder = ({
    size = 24,
    color = "#1f2937",
    stroke = 2,
    ...props
    }) => <Svg height={size} width={size} fill="none" viewBox="0 0 24 24" strokeWidth={stroke} xmlns="http://www.w3.org/2000/svg" {...props}>
	<Path d="M19 10L11 10M5 10H7" stroke="black" strokeLinecap="round" strokeWidth="1.5"/>
	<Path d="M5 18H13M19 18H17" stroke="black" strokeLinecap="round" strokeWidth="1.5"/>
	<Path d="M19 14L5 14" stroke="black" strokeLinecap="round" strokeWidth="1.5"/>
	<Path d="M19 6L5 6" stroke="black" strokeLinecap="round" strokeWidth="1.5"/>
</Svg>;

export default BrokenEssentionalReorder;
