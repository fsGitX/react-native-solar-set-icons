import * as React from "react"
import Svg, { Path } from "react-native-svg";
    
const BrokenTemperature = ({
    size = 24,
    color = "#1f2937",
    stroke = 2,
    ...props
    }) => <Svg height={size} width={size} fill="none" viewBox="0 0 24 24" strokeWidth={stroke} xmlns="http://www.w3.org/2000/svg" {...props}>
	<Path d="M15 6V5C15 3.34315 13.6569 2 12 2C10.3431 2 9 3.34315 9 5V11.3477C9 11.6857 8.82505 11.9957 8.56141 12.2072C7.30465 13.2152 6.5 14.7636 6.5 16.5C6.5 19.5376 8.96243 22 12 22C15.0376 22 17.5 19.5376 17.5 16.5C17.5 14.7636 16.6954 13.2152 15.4386 12.2072C15.1749 11.9957 15 11.6857 15 11.3477V10" stroke="black" strokeLinecap="round" strokeWidth="1.5"/>
	<Path d="M14.4998 16.5C14.4998 17.8807 13.3805 19 11.9998 19C10.619 19 9.49976 17.8807 9.49976 16.5C9.49976 15.1193 10.619 14 11.9998 14C13.3805 14 14.4998 15.1193 14.4998 16.5Z" stroke="black" strokeWidth="1.5"/>
	<Path d="M12 14V12M12 5V8" stroke="black" strokeLinecap="round" strokeWidth="1.5"/>
</Svg>;

export default BrokenTemperature;
