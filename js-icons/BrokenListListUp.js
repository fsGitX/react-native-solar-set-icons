import * as React from "react"
import Svg, { Path } from "react-native-svg";
    
const BrokenListListUp = ({
    size = 24,
    color = "#1f2937",
    stroke = 2,
    ...props
    }) => <Svg height={size} width={size} fill="none" viewBox="0 0 24 24" strokeWidth={stroke} xmlns="http://www.w3.org/2000/svg" {...props}>
	<Path d="M14 18L17.5 15L21 18" stroke="black" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5"/>
	<Path d="M11 14L3 14" stroke="black" strokeLinecap="round" strokeWidth="1.5"/>
	<Path d="M11 18H3" stroke="black" strokeLinecap="round" strokeWidth="1.5"/>
	<Path d="M3 6L13.5 6M20 6L17.75 6" stroke="black" strokeLinecap="round" strokeWidth="1.5"/>
	<Path d="M20 10L9.5 10M3 10H5.25" stroke="black" strokeLinecap="round" strokeWidth="1.5"/>
</Svg>;

export default BrokenListListUp;
