import * as React from "react"
import Svg, { Path } from "react-native-svg";
    
const LinearListListCross = ({
    size = 24,
    color = "#1f2937",
    stroke = 2,
    ...props
    }) => <Svg height={size} width={size} fill="none" viewBox="0 0 24 24" strokeWidth={stroke} xmlns="http://www.w3.org/2000/svg" {...props}>
	<Path d="M15 18.5L20 13.5M20 18.5L15 13.5" stroke="black" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5"/>
	<Path d="M21 6L3 6" stroke="black" strokeLinecap="round" strokeWidth="1.5"/>
	<Path d="M21 10L3 10" stroke="black" strokeLinecap="round" strokeWidth="1.5"/>
	<Path d="M11 14L3 14" stroke="black" strokeLinecap="round" strokeWidth="1.5"/>
	<Path d="M11 18H3" stroke="black" strokeLinecap="round" strokeWidth="1.5"/>
</Svg>;

export default LinearListListCross;
