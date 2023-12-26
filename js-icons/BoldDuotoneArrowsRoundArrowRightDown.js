import * as React from "react"
import Svg, { Path } from "react-native-svg";
    
const BoldDuotoneArrowsRoundArrowRightDown = ({
    size = 24,
    color = "#1f2937",
    stroke = 2,
    ...props
    }) => <Svg height={size} width={size} fill="none" viewBox="0 0 24 24" strokeWidth={stroke} xmlns="http://www.w3.org/2000/svg" {...props}>
	<Path d="M12 2C17.5228 2 22 6.47715 22 12C22 17.5228 17.5228 22 12 22C6.47715 22 2 17.5228 2 12C2 6.47715 6.47715 2 12 2Z" fill={color} opacity="0.5"/>
	<Path d="M10.5 15.75C10.0858 15.75 9.75 15.4142 9.75 15C9.75 14.5858 10.0858 14.25 10.5 14.25H13.1893L8.46967 9.53033C8.17678 9.23744 8.17678 8.76256 8.46967 8.46967C8.76256 8.17678 9.23744 8.17678 9.53033 8.46967L14.25 13.1893V10.5C14.25 10.0858 14.5858 9.75 15 9.75C15.4142 9.75 15.75 10.0858 15.75 10.5V15C15.75 15.4142 15.4142 15.75 15 15.75H10.5Z" fill={color}/>
</Svg>;

export default BoldDuotoneArrowsRoundArrowRightDown;
