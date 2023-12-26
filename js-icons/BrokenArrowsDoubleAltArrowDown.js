import * as React from "react"
import Svg, { Path } from "react-native-svg";
    
const BrokenArrowsDoubleAltArrowDown = ({
    size = 24,
    color = "#1f2937",
    stroke = 2,
    ...props
    }) => <Svg height={size} width={size} fill="none" viewBox="0 0 24 24" strokeWidth={stroke} xmlns="http://www.w3.org/2000/svg" {...props}>
	<Path d="M19 11L12 17L10.25 15.5M5 11L7.33333 13" stroke="black" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5"/>
	<Path d="M5 7L12 13L13.75 11.5M19 7L16.6667 9" stroke="black" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5"/>
</Svg>;

export default BrokenArrowsDoubleAltArrowDown;
