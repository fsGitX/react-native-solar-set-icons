import * as React from "react"
import Svg, { Path } from "react-native-svg";
    
const BrokenArrowsArrowRightDown = ({
    size = 24,
    color = "#1f2937",
    stroke = 2,
    ...props
    }) => <Svg height={size} width={size} fill="none" viewBox="0 0 24 24" strokeWidth={stroke} xmlns="http://www.w3.org/2000/svg" {...props}>
	<Path d="M18 18H9M18 18V9M18 18L11.5 11.5M6 6L8.5 8.5" stroke="black" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5"/>
</Svg>;

export default BrokenArrowsArrowRightDown;
