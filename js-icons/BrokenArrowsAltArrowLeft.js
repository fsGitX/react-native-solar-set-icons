import * as React from "react"
import Svg, { Path } from "react-native-svg";
    
const BrokenArrowsAltArrowLeft = ({
    size = 24,
    color = "#1f2937",
    stroke = 2,
    ...props
    }) => <Svg height={size} width={size} fill="none" viewBox="0 0 24 24" strokeWidth={stroke} xmlns="http://www.w3.org/2000/svg" {...props}>
	<Path d="M15 19L9 12L10.5 10.25M15 5L13 7.33333" stroke="black" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5"/>
</Svg>;

export default BrokenArrowsAltArrowLeft;
