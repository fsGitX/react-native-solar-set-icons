import * as React from "react"
import Svg, { Path } from "react-native-svg";
    
const BrokenListListDown = ({
    size = 24,
    color = "#1f2937",
    stroke = 2,
    ...props
    }) => <Svg height={size} width={size} fill="none" viewBox="0 0 24 24" strokeWidth={stroke} xmlns="http://www.w3.org/2000/svg" {...props}>
	<Path d="M10 14H3" stroke="black" strokeLinecap="round" strokeWidth="1.5"/>
	<Path d="M10 18H3" stroke="black" strokeLinecap="round" strokeWidth="1.5"/>
	<Path d="M14 15L17.5 18L21 15" stroke="black" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5"/>
	<Path d="M3 6L13.5 6M20 6L17.75 6" stroke="black" strokeLinecap="round" strokeWidth="1.5"/>
	<Path d="M20 10L9.5 10M3 10H5.25" stroke="black" strokeLinecap="round" strokeWidth="1.5"/>
</Svg>;

export default BrokenListListDown;
