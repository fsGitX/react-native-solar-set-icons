import * as React from "react"
import Svg, { Path } from "react-native-svg";
    
const BrokenArrowsSortHorizontal = ({
    size = 24,
    color = "#1f2937",
    stroke = 2,
    ...props
    }) => <Svg height={size} width={size} fill="none" viewBox="0 0 24 24" strokeWidth={stroke} xmlns="http://www.w3.org/2000/svg" {...props}>
	<Path d="M6 8L10.125 4M6 8L10.125 12M6 8L13 8M18 8H16" stroke="black" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5"/>
	<Path d="M18 16L13.875 12M18 16L13.875 20M18 16L11 16M6 16H8" stroke="black" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5"/>
</Svg>;

export default BrokenArrowsSortHorizontal;
