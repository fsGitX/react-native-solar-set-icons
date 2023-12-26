import * as React from "react"
import Svg, { Path } from "react-native-svg";
    
const LineDuotoneArrowsArrowDown = ({
    size = 24,
    color = "#1f2937",
    stroke = 2,
    ...props
    }) => <Svg height={size} width={size} fill="none" viewBox="0 0 24 24" strokeWidth={stroke} xmlns="http://www.w3.org/2000/svg" {...props}>
	<Path d="M12.75 4C12.75 3.58579 12.4142 3.25 12 3.25C11.5858 3.25 11.25 3.58579 11.25 4L12.75 4ZM11.25 4L11.25 20L12.75 20L12.75 4L11.25 4Z" fill={color} opacity="0.5"/>
	<Path d="M18 14L12 20L6 14" stroke="black" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5"/>
</Svg>;

export default LineDuotoneArrowsArrowDown;
