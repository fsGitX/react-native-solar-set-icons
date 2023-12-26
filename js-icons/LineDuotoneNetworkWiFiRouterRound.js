import * as React from "react"
import Svg, { Path } from "react-native-svg";
    
const LineDuotoneNetworkWiFiRouterRound = ({
    size = 24,
    color = "#1f2937",
    stroke = 2,
    ...props
    }) => <Svg height={size} width={size} fill="none" viewBox="0 0 24 24" strokeWidth={stroke} xmlns="http://www.w3.org/2000/svg" {...props}>
	<Path d="M2 15C2 12.2386 4.23858 10 7 10H17C19.7614 10 22 12.2386 22 15C22 17.7614 19.7614 20 17 20H7C4.23858 20 2 17.7614 2 15Z" stroke="black" strokeWidth="1.5"/>
	<Path d="M18.3292 22.3354C18.5144 22.7059 18.9649 22.8561 19.3354 22.6708C19.7059 22.4856 19.8561 22.0351 19.6708 21.6646L18.3292 22.3354ZM17.3292 20.3354L18.3292 22.3354L19.6708 21.6646L18.6708 19.6646L17.3292 20.3354Z" fill={color} opacity="0.5"/>
	<Path d="M5.67082 22.3354C5.48558 22.7059 5.03507 22.8561 4.66459 22.6708C4.29411 22.4856 4.14394 22.0351 4.32918 21.6646L5.67082 22.3354ZM6.67082 20.3354L5.67082 22.3354L4.32918 21.6646L5.32918 19.6646L6.67082 20.3354Z" fill={color} opacity="0.5"/>
	<Path d="M8.5 15C8.5 15.8284 7.82843 16.5 7 16.5C6.17157 16.5 5.5 15.8284 5.5 15C5.5 14.1716 6.17157 13.5 7 13.5C7.82843 13.5 8.5 14.1716 8.5 15Z" stroke="black" strokeWidth="1.5"/>
	<Path d="M12 15H18.5" opacity="0.5" stroke="black" strokeLinecap="round" strokeWidth="1.5"/>
	<Path d="M21.5833 5.39702C20.7574 3.40286 18.7924 2 16.4996 2C14.2069 2 12.2419 3.40286 11.416 5.39702" opacity="0.4" stroke="black" strokeLinecap="round" strokeWidth="1.5"/>
	<Path d="M19.3806 6.65811C19.0167 5.41107 17.865 4.5 16.5004 4.5C15.1358 4.5 13.984 5.41107 13.6201 6.65811" opacity="0.7" stroke="black" strokeLinecap="round" strokeWidth="1.5"/>
	<Path d="M17.5 7C17.5 7.55228 17.0523 8 16.5 8C15.9477 8 15.5 7.55228 15.5 7C15.5 6.44772 15.9477 6 16.5 6C17.0523 6 17.5 6.44772 17.5 7Z" fill={color}/>
</Svg>;

export default LineDuotoneNetworkWiFiRouterRound;
