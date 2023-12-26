import * as React from "react"
import Svg, { Path } from "react-native-svg";
    
const LineDuotoneHomeRemoteControllerMinimalistic = ({
    size = 24,
    color = "#1f2937",
    stroke = 2,
    ...props
    }) => <Svg height={size} width={size} fill="none" viewBox="0 0 24 24" strokeWidth={stroke} xmlns="http://www.w3.org/2000/svg" {...props}>
	<Path d="M5 9C5 6.19108 5 4.78661 5.67412 3.77772C5.96596 3.34096 6.34096 2.96596 6.77772 2.67412C7.78661 2 9.19108 2 12 2C14.8089 2 16.2134 2 17.2223 2.67412C17.659 2.96596 18.034 3.34096 18.3259 3.77772C19 4.78661 19 6.19108 19 9V15C19 17.8089 19 19.2134 18.3259 20.2223C18.034 20.659 17.659 21.034 17.2223 21.3259C16.2134 22 14.8089 22 12 22C9.19108 22 7.78661 22 6.77772 21.3259C6.34096 21.034 5.96596 20.659 5.67412 20.2223C5 19.2134 5 17.8089 5 15V9Z" opacity="0.5" stroke="black" strokeWidth="1.5"/>
	<Path d="M15 11C15 12.6569 13.6569 14 12 14C10.3431 14 9 12.6569 9 11C9 9.34315 10.3431 8 12 8C13.6569 8 15 9.34315 15 11Z" stroke="black" strokeWidth="1.5"/>
	<circle cx="12" cy="5" fill={color} r="1"/>
	<circle cx="12" cy="17" fill={color} r="1"/>
</Svg>;

export default LineDuotoneHomeRemoteControllerMinimalistic;
