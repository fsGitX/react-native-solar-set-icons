import * as React from "react"
import Svg, { Path } from "react-native-svg";
    
const LineDuotoneSortFromBottomToTop = ({
    size = 24,
    color = "#1f2937",
    stroke = 2,
    ...props
    }) => <Svg height={size} width={size} fill="none" viewBox="0 0 24 24" strokeWidth={stroke} xmlns="http://www.w3.org/2000/svg" {...props}>
	<Path d="M4 8H13" stroke="black" strokeLinecap="round" strokeWidth="1.5"/>
	<Path d="M6 13H13" opacity="0.7" stroke="black" strokeLinecap="round" strokeWidth="1.5"/>
	<Path d="M8 18H13" opacity="0.4" stroke="black" strokeLinecap="round" strokeWidth="1.5"/>
	<Path d="M17 20V4L20 8" stroke="black" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5"/>
</Svg>;

export default LineDuotoneSortFromBottomToTop;
