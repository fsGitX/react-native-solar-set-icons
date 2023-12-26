import * as React from "react"
import Svg, { Path } from "react-native-svg";
    
const BrokenListCrossMinimalistic = ({
    size = 24,
    color = "#1f2937",
    stroke = 2,
    ...props
    }) => <Svg height={size} width={size} fill="none" viewBox="0 0 24 24" strokeWidth={stroke} xmlns="http://www.w3.org/2000/svg" {...props}>
	<Path d="M3 6L13.5 6M20 6L17.75 6" stroke="black" strokeLinecap="round" strokeWidth="1.5"/>
	<Path d="M11 16H3" stroke="black" strokeLinecap="round" strokeWidth="1.5"/>
	<Path d="M15 16L20 11M20 16L15 11" stroke="black" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5"/>
	<Path d="M11 11L7 11M3 11H4.2" stroke="black" strokeLinecap="round" strokeWidth="1.5"/>
</Svg>;

export default BrokenListCrossMinimalistic;
