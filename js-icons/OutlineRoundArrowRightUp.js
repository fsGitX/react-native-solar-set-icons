import * as React from "react"
import Svg, { Path } from "react-native-svg";
    
const OutlineRoundArrowRightUp = ({
    size = 24,
    color = "#1f2937",
    stroke = 2,
    ...props
    }) => <Svg height={size} width={size} fill="none" viewBox="0 0 24 24" strokeWidth={stroke} xmlns="http://www.w3.org/2000/svg" {...props}>
	<Path d="M12 2.75C6.89137 2.75 2.75 6.89137 2.75 12C2.75 17.1086 6.89137 21.25 12 21.25C17.1086 21.25 21.25 17.1086 21.25 12C21.25 6.89137 17.1086 2.75 12 2.75ZM1.25 12C1.25 6.06294 6.06294 1.25 12 1.25C17.9371 1.25 22.75 6.06294 22.75 12C22.75 17.9371 17.9371 22.75 12 22.75C6.06294 22.75 1.25 17.9371 1.25 12ZM9.75 9C9.75 8.58579 10.0858 8.25 10.5 8.25H15C15.4142 8.25 15.75 8.58579 15.75 9V13.5C15.75 13.9142 15.4142 14.25 15 14.25C14.5858 14.25 14.25 13.9142 14.25 13.5V10.8107L9.53033 15.5303C9.23744 15.8232 8.76256 15.8232 8.46967 15.5303C8.17678 15.2374 8.17678 14.7626 8.46967 14.4697L13.1893 9.75H10.5C10.0858 9.75 9.75 9.41421 9.75 9Z" fill={color} fillRule="evenodd"/>
</Svg>;

export default OutlineRoundArrowRightUp;
