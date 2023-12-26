import * as React from "react"
import Svg, { Path } from "react-native-svg";
    
const OutlineArrowsActionCircleBottomDown = ({
    size = 24,
    color = "#1f2937",
    stroke = 2,
    ...props
    }) => <Svg height={size} width={size} fill="none" viewBox="0 0 24 24" strokeWidth={stroke} xmlns="http://www.w3.org/2000/svg" {...props}>
	<Path d="M2.75 12C2.75 6.89137 6.89137 2.75 12 2.75C17.1086 2.75 21.25 6.89137 21.25 12C21.25 17.1086 17.1086 21.25 12 21.25C11.5858 21.25 11.25 21.5858 11.25 22C11.25 22.4142 11.5858 22.75 12 22.75C17.9371 22.75 22.75 17.9371 22.75 12C22.75 6.06294 17.9371 1.25 12 1.25C6.06294 1.25 1.25 6.06294 1.25 12C1.25 12.4142 1.58579 12.75 2 12.75C2.41421 12.75 2.75 12.4142 2.75 12Z" fill={color}/>
	<Path d="M8 22.75C8.41421 22.75 8.75 22.4142 8.75 22C8.75 21.5858 8.41421 21.25 8 21.25H3.81066L10.5303 14.5303C10.8232 14.2374 10.8232 13.7626 10.5303 13.4697C10.2374 13.1768 9.76256 13.1768 9.46967 13.4697L2.75 20.1893V16C2.75 15.5858 2.41421 15.25 2 15.25C1.58579 15.25 1.25 15.5858 1.25 16V22C1.25 22.4142 1.58579 22.75 2 22.75H8Z" fill={color}/>
</Svg>;

export default OutlineArrowsActionCircleBottomDown;
