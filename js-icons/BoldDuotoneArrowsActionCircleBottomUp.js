import * as React from "react"
import Svg, { Path } from "react-native-svg";
    
const BoldDuotoneArrowsActionCircleBottomUp = ({
    size = 24,
    color = "#1f2937",
    stroke = 2,
    ...props
    }) => <Svg height={size} width={size} fill="none" viewBox="0 0 24 24" strokeWidth={stroke} xmlns="http://www.w3.org/2000/svg" {...props}>
	<Path d="M12 22C17.5228 22 22 17.5228 22 12C22 6.47715 17.5228 2 12 2C6.47715 2 2 6.47715 2 12C2 17.5228 6.47715 22 12 22Z" fill={color} opacity="0.5"/>
	<Path d="M4.25 13C4.25 12.5858 4.58579 12.25 5 12.25H11C11.4142 12.25 11.75 12.5858 11.75 13V19C11.75 19.4142 11.4142 19.75 11 19.75C10.5858 19.75 10.25 19.4142 10.25 19V14.8107L3.53033 21.5303C3.23744 21.8232 2.76256 21.8232 2.46967 21.5303C2.17678 21.2374 2.17678 20.7626 2.46967 20.4697L9.18934 13.75H5C4.58579 13.75 4.25 13.4142 4.25 13Z" fill={color} fillRule="evenodd"/>
</Svg>;

export default BoldDuotoneArrowsActionCircleBottomUp;
