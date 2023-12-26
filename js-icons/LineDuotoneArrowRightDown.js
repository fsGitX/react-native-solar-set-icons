import * as React from "react"
import Svg, { Path } from "react-native-svg";
    
const LineDuotoneArrowRightDown = ({
    size = 24,
    color = "#1f2937",
    stroke = 2,
    ...props
    }) => <Svg height={size} width={size} fill="none" viewBox="0 0 24 24" strokeWidth={stroke} xmlns="http://www.w3.org/2000/svg" {...props}>
	<Path d="M6.53033 5.46967C6.23744 5.17678 5.76256 5.17678 5.46967 5.46967C5.17678 5.76256 5.17678 6.23744 5.46967 6.53033L6.53033 5.46967ZM5.46967 6.53033L17.4697 18.5303L18.5303 17.4697L6.53033 5.46967L5.46967 6.53033Z" fill={color} opacity="0.5"/>
	<Path d="M18 9L18 18L9 18" stroke="black" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5"/>
</Svg>;

export default LineDuotoneArrowRightDown;
