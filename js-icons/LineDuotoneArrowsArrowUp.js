import * as React from "react"
import Svg, { Path } from "react-native-svg";
    
const LineDuotoneArrowsArrowUp = ({
    size = 24,
    color = "#1f2937",
    stroke = 2,
    ...props
    }) => <Svg height={size} width={size} fill="none" viewBox="0 0 24 24" strokeWidth={stroke} xmlns="http://www.w3.org/2000/svg" {...props}>
	<Path d="M11.25 20C11.25 20.4142 11.5858 20.75 12 20.75C12.4142 20.75 12.75 20.4142 12.75 20L11.25 20ZM12.75 20L12.75 4L11.25 4L11.25 20L12.75 20Z" fill={color} opacity="0.5"/>
	<Path d="M18 10L12 4L6 10" stroke="black" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5"/>
</Svg>;

export default LineDuotoneArrowsArrowUp;
