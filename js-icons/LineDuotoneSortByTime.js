import * as React from "react"
import Svg, { Path } from "react-native-svg";
    
const LineDuotoneSortByTime = ({
    size = 24,
    color = "#1f2937",
    stroke = 2,
    ...props
    }) => <Svg height={size} width={size} fill="none" viewBox="0 0 24 24" strokeWidth={stroke} xmlns="http://www.w3.org/2000/svg" {...props}>
	<Path d="M10 7L2 7" opacity="0.5" stroke="black" strokeLinecap="round" strokeWidth="1.5"/>
	<Path d="M8 12H2" opacity="0.5" stroke="black" strokeLinecap="round" strokeWidth="1.5"/>
	<Path d="M10 17H2" opacity="0.5" stroke="black" strokeLinecap="round" strokeWidth="1.5"/>
	<Path d="M17 10V11.8462L18 13" stroke="black" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5"/>
	<circle cx="17" cy="12" r="5" stroke="black" strokeWidth="1.5"/>
</Svg>;

export default LineDuotoneSortByTime;
