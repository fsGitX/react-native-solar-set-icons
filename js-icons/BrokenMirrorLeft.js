import * as React from "react"
import Svg, { Path } from "react-native-svg";
    
const BrokenMirrorLeft = ({
    size = 24,
    color = "#1f2937",
    stroke = 2,
    ...props
    }) => <Svg height={size} width={size} fill="none" viewBox="0 0 24 24" strokeWidth={stroke} xmlns="http://www.w3.org/2000/svg" {...props}>
	<Path d="M3 12C3 16.2426 3 18.364 4.31802 19.682C5.63604 21 7.75736 21 12 21M12 3C7.75736 3 5.63604 3 4.31802 4.31802C3.50241 5.13363 3.19151 6.25685 3.073 8" stroke="black" strokeLinecap="round" strokeWidth="1.5"/>
	<Path d="M11 21H15C17.8284 21 19.2426 21 20.1213 20.1213C21 19.2426 21 17.8284 21 15V9C21 6.17157 21 4.75736 20.1213 3.87868C19.2426 3 17.8284 3 15 3H11" stroke="black" strokeDasharray="2.5 3" strokeLinecap="round" strokeWidth="1.5"/>
	<Path d="M12 22L12 2" stroke="black" strokeLinecap="round" strokeWidth="1.5"/>
</Svg>;

export default BrokenMirrorLeft;
