import * as React from "react"
import Svg, { Path } from "react-native-svg";
    
const BoldLikeHeartAngle = ({
    size = 24,
    color = "#1f2937",
    stroke = 2,
    ...props
    }) => <Svg height={size} width={size} fill="none" viewBox="0 0 24 24" strokeWidth={stroke} xmlns="http://www.w3.org/2000/svg" {...props}>
	<Path d="M8.10627 18.2471C5.29819 16.0836 2 13.5424 2 9.13734C2 4.27441 7.50016 0.825708 12 5.50088L14 7.49952C14.2929 7.79236 14.7678 7.79228 15.0607 7.49933C15.3535 7.20638 15.3534 6.73151 15.0605 6.43867L13.1285 4.50736C17.3685 1.40333 22 4.67489 22 9.13734C22 13.5424 18.7018 16.0835 15.8937 18.2471C15.6019 18.4719 15.3153 18.6927 15.0383 18.9111C14 19.7296 13 20.5002 12 20.5002C11 20.5002 10 19.7296 8.96173 18.9111C8.68471 18.6927 8.39814 18.4719 8.10627 18.2471Z" fill={color}/>
</Svg>;

export default BoldLikeHeartAngle;
