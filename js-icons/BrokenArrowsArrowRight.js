import * as React from "react"
import Svg, { Path } from "react-native-svg";
    
const BrokenArrowsArrowRight = ({
    size = 24,
    color = "#1f2937",
    stroke = 2,
    ...props
    }) => <Svg height={size} width={size} fill="none" viewBox="0 0 24 24" strokeWidth={stroke} xmlns="http://www.w3.org/2000/svg" {...props}>
	<Path d="M4 12H6.5M20 12L14 6M20 12L14 18M20 12H9.5" stroke="black" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5"/>
</Svg>;

export default BrokenArrowsArrowRight;
