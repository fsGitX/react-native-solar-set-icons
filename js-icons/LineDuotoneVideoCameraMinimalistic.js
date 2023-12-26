import * as React from "react"
import Svg, { Path } from "react-native-svg";
    
const LineDuotoneVideoCameraMinimalistic = ({
    size = 24,
    color = "#1f2937",
    stroke = 2,
    ...props
    }) => <Svg height={size} width={size} fill="none" viewBox="0 0 24 24" strokeWidth={stroke} xmlns="http://www.w3.org/2000/svg" {...props}>
	<circle cx="12" cy="13" r="3" stroke="black" strokeWidth="1.5"/>
	<Path d="M10.0001 19.9999H14.0001C16.809 19.9999 18.2135 19.9999 19.2224 19.3258C19.6591 19.0339 20.0341 18.6589 20.326 18.2222C21.0001 17.2133 21.0001 15.8088 21.0001 12.9999C21.0001 10.191 21 8.78673 20.3258 7.77783C20.034 7.34107 19.659 6.96607 19.2222 6.67423C18.2133 6.00011 16.8089 6.00011 14 6.00011H9.99995C7.19103 6.00011 5.78656 6.00011 4.77767 6.67423C4.34091 6.96607 3.96591 7.34107 3.67407 7.77783C3.0001 8.7865 3.0001 10.1903 3.0001 12.998L3.0001 12.9999C3.0001 15.8088 3.0001 17.2133 3.67422 18.2222C3.96605 18.6589 4.34106 19.0339 4.77782 19.3258C5.78671 19.9999 7.19117 19.9999 10.0001 19.9999Z" opacity="0.5" stroke="black" strokeWidth="1.5"/>
	<Path d="M18 10H17.5" stroke="black" strokeLinecap="round" strokeWidth="1.5"/>
	<Path d="M14.5 3.5H9.5" opacity="0.5" stroke="black" strokeLinecap="round" strokeWidth="1.5"/>
</Svg>;

export default LineDuotoneVideoCameraMinimalistic;
