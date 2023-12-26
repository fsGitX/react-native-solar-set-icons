import * as React from "react"
import Svg, { Path } from "react-native-svg";
    
const BrokenArrowsDoubleAltArrowRight = ({
    size = 24,
    color = "#1f2937",
    stroke = 2,
    ...props
    }) => <Svg height={size} width={size} fill="none" viewBox="0 0 24 24" strokeWidth={stroke} xmlns="http://www.w3.org/2000/svg" {...props}>
	<Path d="M11 19L17 12L15.5 10.25M11 5L13 7.33333" stroke="black" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5"/>
	<Path d="M7 5L13 12L11.5 13.75M7 19L9 16.6667" stroke="black" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5"/>
</Svg>;

export default BrokenArrowsDoubleAltArrowRight;
