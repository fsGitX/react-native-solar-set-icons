import * as React from "react"
import Svg, { Path } from "react-native-svg";
    
const BrokenArrowsDoubleAltArrowUp = ({
    size = 24,
    color = "#1f2937",
    stroke = 2,
    ...props
    }) => <Svg height={size} width={size} fill="none" viewBox="0 0 24 24" strokeWidth={stroke} xmlns="http://www.w3.org/2000/svg" {...props}>
	<Path d="M19 13L12 7L10.25 8.5M5 13L7.33333 11" stroke="black" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5"/>
	<Path d="M5 17L12 11L13.75 12.5M19 17L16.6667 15" stroke="black" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5"/>
</Svg>;

export default BrokenArrowsDoubleAltArrowUp;
