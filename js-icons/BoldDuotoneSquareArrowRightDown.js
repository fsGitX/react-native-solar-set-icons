import * as React from "react"
import Svg, { Path } from "react-native-svg";
    
const BoldDuotoneSquareArrowRightDown = ({
    size = 24,
    color = "#1f2937",
    stroke = 2,
    ...props
    }) => <Svg height={size} width={size} fill="none" viewBox="0 0 24 24" strokeWidth={stroke} xmlns="http://www.w3.org/2000/svg" {...props}>
	<Path d="M20.5355 20.5355C19.0711 22 16.714 22 12 22C7.28595 22 4.92893 22 3.46447 20.5355C2 19.0711 2 16.714 2 12C2 7.28596 2 4.92893 3.46447 3.46447C4.92893 2 7.28595 2 12 2C16.714 2 19.0711 2 20.5355 3.46447C22 4.92893 22 7.28596 22 12C22 16.714 22 19.0711 20.5355 20.5355Z" fill={color} opacity="0.5"/>
	<Path d="M15.5785 14.8278C15.5785 15.242 15.2427 15.5778 14.8285 15.5778L10.5858 15.5778C10.1716 15.5778 9.83585 15.242 9.83585 14.8278C9.83585 14.4135 10.1716 14.0778 10.5858 14.0778H13.0178L8.6413 9.70123C8.34841 9.40834 8.34841 8.93346 8.6413 8.64057C8.93419 8.34768 9.40907 8.34768 9.70196 8.64057L14.0785 13.0171L14.0785 10.5851C14.0785 10.1709 14.4143 9.83511 14.8285 9.83511C15.2427 9.83511 15.5785 10.1709 15.5785 10.5851L15.5785 14.8278Z" fill={color}/>
</Svg>;

export default BoldDuotoneSquareArrowRightDown;
