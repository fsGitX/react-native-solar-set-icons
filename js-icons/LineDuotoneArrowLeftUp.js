import * as React from "react"
import Svg, { Path } from "react-native-svg";
    
const LineDuotoneArrowLeftUp = ({
    size = 24,
    color = "#1f2937",
    stroke = 2,
    ...props
    }) => <Svg height={size} width={size} fill="none" viewBox="0 0 24 24" strokeWidth={stroke} xmlns="http://www.w3.org/2000/svg" {...props}>
	<Path d="M17.4697 18.5303C17.7626 18.8232 18.2374 18.8232 18.5303 18.5303C18.8232 18.2374 18.8232 17.7626 18.5303 17.4697L17.4697 18.5303ZM18.5303 17.4697L6.53033 5.46967L5.46967 6.53033L17.4697 18.5303L18.5303 17.4697Z" fill={color} opacity="0.5"/>
	<Path d="M15 6H6V15" stroke="black" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5"/>
</Svg>;

export default LineDuotoneArrowLeftUp;
