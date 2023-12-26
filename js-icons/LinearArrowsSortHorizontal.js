import * as React from "react"
import Svg, { Path } from "react-native-svg";
    
const LinearArrowsSortHorizontal = ({
    size = 24,
    color = "#1f2937",
    stroke = 2,
    ...props
    }) => <Svg height={size} width={size} fill="none" viewBox="0 0 24 24" strokeWidth={stroke} xmlns="http://www.w3.org/2000/svg" {...props}>
	<Path d="M18 8L6 8M6 8L10.125 4M6 8L10.125 12" stroke="black" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5"/>
	<Path d="M6 16L18 16M18 16L13.875 12M18 16L13.875 20" stroke="black" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5"/>
</Svg>;

export default LinearArrowsSortHorizontal;
