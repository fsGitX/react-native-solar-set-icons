import * as React from "react"
import Svg, { Path } from "react-native-svg";
    
const OutlineRoundArrowRightDown = ({
    size = 24,
    color = "#1f2937",
    stroke = 2,
    ...props
    }) => <Svg height={size} width={size} fill="none" viewBox="0 0 24 24" strokeWidth={stroke} xmlns="http://www.w3.org/2000/svg" {...props}>
	<Path d="M12 2.75C6.89137 2.75 2.75 6.89137 2.75 12C2.75 17.1086 6.89137 21.25 12 21.25C17.1086 21.25 21.25 17.1086 21.25 12C21.25 6.89137 17.1086 2.75 12 2.75ZM1.25 12C1.25 6.06294 6.06294 1.25 12 1.25C17.9371 1.25 22.75 6.06294 22.75 12C22.75 17.9371 17.9371 22.75 12 22.75C6.06294 22.75 1.25 17.9371 1.25 12ZM8.46967 8.46967C8.76256 8.17678 9.23744 8.17678 9.53033 8.46967L14.25 13.1893V10.5C14.25 10.0858 14.5858 9.75 15 9.75C15.4142 9.75 15.75 10.0858 15.75 10.5V15C15.75 15.4142 15.4142 15.75 15 15.75H10.5C10.0858 15.75 9.75 15.4142 9.75 15C9.75 14.5858 10.0858 14.25 10.5 14.25H13.1893L8.46967 9.53033C8.17678 9.23744 8.17678 8.76256 8.46967 8.46967Z" fill={color} fillRule="evenodd"/>
</Svg>;

export default OutlineRoundArrowRightDown;
