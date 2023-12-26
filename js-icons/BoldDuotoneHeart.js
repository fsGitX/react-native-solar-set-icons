import * as React from "react"
import Svg, { Path } from "react-native-svg";
    
const BoldDuotoneHeart = ({
    size = 24,
    color = "#1f2937",
    stroke = 2,
    ...props
    }) => <Svg height={size} width={size} fill="none" viewBox="0 0 24 24" strokeWidth={stroke} xmlns="http://www.w3.org/2000/svg" {...props}>
	<Path d="M8.10627 18.2471C5.29819 16.0836 2 13.5424 2 9.13734C2 4.27441 7.50016 0.825708 12 5.50088V20.5002C11 20.5002 10 19.7296 8.96173 18.9111C8.68471 18.6927 8.39814 18.4719 8.10627 18.2471Z" fill={color} fillRule="evenodd" opacity="0.5"/>
	<Path d="M15.0383 18.9111C17.9806 16.5917 22 14.0003 22 9.13734C22 4.27441 16.4998 0.825708 12 5.50088V20.5002C13 20.5002 14 19.7296 15.0383 18.9111Z" fill={color}/>
</Svg>;

export default BoldDuotoneHeart;