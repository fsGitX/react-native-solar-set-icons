import * as React from "react"
import Svg, { Path } from "react-native-svg";
    
const LineDuotoneArrowToTopRight = ({
    size = 24,
    color = "#1f2937",
    stroke = 2,
    ...props
    }) => <Svg height={size} width={size} fill="none" viewBox="0 0 24 24" strokeWidth={stroke} xmlns="http://www.w3.org/2000/svg" {...props}>
	<Path d="M7 9.5L12 4.5L17 9.5" stroke="black" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5"/>
	<Path d="M12 4.5C12 4.5 12 12.8333 12 14.5C12 16.1667 13 19.5 17 19.5" opacity="0.5" stroke="black" strokeLinecap="round" strokeWidth="1.5"/>
</Svg>;

export default LineDuotoneArrowToTopRight;
