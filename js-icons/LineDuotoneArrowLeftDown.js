import * as React from "react"
import Svg, { Path } from "react-native-svg";
    
const LineDuotoneArrowLeftDown = ({
    size = 24,
    color = "#1f2937",
    stroke = 2,
    ...props
    }) => <Svg height={size} width={size} fill="none" viewBox="0 0 24 24" strokeWidth={stroke} xmlns="http://www.w3.org/2000/svg" {...props}>
	<Path d="M18.5303 6.53033C18.8232 6.23744 18.8232 5.76256 18.5303 5.46967C18.2374 5.17678 17.7626 5.17678 17.4697 5.46967L18.5303 6.53033ZM17.4697 5.46967L5.46967 17.4697L6.53033 18.5303L18.5303 6.53033L17.4697 5.46967Z" fill={color} opacity="0.5"/>
	<Path d="M6 9L6 18L15 18" stroke="black" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5"/>
</Svg>;

export default LineDuotoneArrowLeftDown;
