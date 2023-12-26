import * as React from "react"
import Svg, { Path } from "react-native-svg";
    
const BrokenDoubleAltArrowLeft = ({
    size = 24,
    color = "#1f2937",
    stroke = 2,
    ...props
    }) => <Svg height={size} width={size} fill="none" viewBox="0 0 24 24" strokeWidth={stroke} xmlns="http://www.w3.org/2000/svg" {...props}>
	<Path d="M13 19L7 12L8.5 10.25M13 5L11 7.33333" stroke="black" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5"/>
	<Path d="M17 5L11 12L12.5 13.75M17 19L15 16.6667" stroke="black" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5"/>
</Svg>;

export default BrokenDoubleAltArrowLeft;
