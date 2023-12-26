import * as React from "react"
import Svg, { Path } from "react-native-svg";
    
const BoldDuotoneArrowsRoundDoubleAltArrowUp = ({
    size = 24,
    color = "#1f2937",
    stroke = 2,
    ...props
    }) => <Svg height={size} width={size} fill="none" viewBox="0 0 24 24" strokeWidth={stroke} xmlns="http://www.w3.org/2000/svg" {...props}>
	<Path d="M12 22C17.5228 22 22 17.5228 22 12C22 6.47715 17.5228 2 12 2C6.47715 2 2 6.47715 2 12C2 17.5228 6.47715 22 12 22Z" fill={color} opacity="0.5"/>
	<Path d="M8.46967 14.9697C8.17678 15.2626 8.17678 15.7374 8.46967 16.0303C8.76256 16.3232 9.23744 16.3232 9.53033 16.0303L12 13.5607L14.4697 16.0303C14.7626 16.3232 15.2374 16.3232 15.5303 16.0303C15.8232 15.7374 15.8232 15.2626 15.5303 14.9697L12.5303 11.9697C12.2374 11.6768 11.7626 11.6768 11.4697 11.9697L8.46967 14.9697Z" fill={color}/>
	<Path d="M8.46967 10.9697C8.17678 11.2626 8.17678 11.7374 8.46967 12.0303C8.76256 12.3232 9.23744 12.3232 9.53033 12.0303L12 9.56066L14.4697 12.0303C14.7626 12.3232 15.2374 12.3232 15.5303 12.0303C15.8232 11.7374 15.8232 11.2626 15.5303 10.9697L12.5303 7.96967C12.2374 7.67678 11.7626 7.67678 11.4697 7.96967L8.46967 10.9697Z" fill={color}/>
</Svg>;

export default BoldDuotoneArrowsRoundDoubleAltArrowUp;
