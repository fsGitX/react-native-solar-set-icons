import * as React from "react"
import Svg, { Path } from "react-native-svg";
    
const BoldDuotoneRoundAltArrowUp = ({
    size = 24,
    color = "#1f2937",
    stroke = 2,
    ...props
    }) => <Svg height={size} width={size} fill="none" viewBox="0 0 24 24" strokeWidth={stroke} xmlns="http://www.w3.org/2000/svg" {...props}>
	<Path d="M21.9998 12C21.9998 6.47715 17.5226 2 11.9998 2C6.47691 2 1.99976 6.47715 1.99976 12C1.99976 17.5228 6.47691 22 11.9998 22C17.5226 22 21.9998 17.5228 21.9998 12Z" fill={color} opacity="0.5"/>
	<Path d="M8.46943 12.9697C8.17653 13.2626 8.17653 13.7374 8.46943 14.0303C8.76232 14.3232 9.23719 14.3232 9.53009 14.0303L11.9998 11.5607L14.4694 14.0303C14.7623 14.3232 15.2372 14.3232 15.5301 14.0303C15.823 13.7374 15.823 13.2626 15.5301 12.9697L12.5301 9.96967C12.2372 9.67678 11.7623 9.67678 11.4694 9.96967L8.46943 12.9697Z" fill={color}/>
</Svg>;

export default BoldDuotoneRoundAltArrowUp;
