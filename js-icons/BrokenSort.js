import * as React from "react"
import Svg, { Path } from "react-native-svg";
    
const BrokenSort = ({
    size = 24,
    color = "#1f2937",
    stroke = 2,
    ...props
    }) => <Svg height={size} width={size} fill="none" viewBox="0 0 24 24" strokeWidth={stroke} xmlns="http://www.w3.org/2000/svg" {...props}>
	<Path d="M22 7L9 7M2 7L5 7" stroke="black" strokeLinecap="round" strokeWidth="1.5"/>
	<Path d="M19 12H16M5 12L12 12" stroke="black" strokeLinecap="round" strokeWidth="1.5"/>
	<Path d="M16 17H8" stroke="black" strokeLinecap="round" strokeWidth="1.5"/>
</Svg>;

export default BrokenSort;
