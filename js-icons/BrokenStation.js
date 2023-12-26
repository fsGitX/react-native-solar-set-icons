import * as React from "react"
import Svg, { Path } from "react-native-svg";
    
const BrokenStation = ({
    size = 24,
    color = "#1f2937",
    stroke = 2,
    ...props
    }) => <Svg height={size} width={size} fill="none" viewBox="0 0 24 24" strokeWidth={stroke} xmlns="http://www.w3.org/2000/svg" {...props}>
	<Path d="M22 9.07816C22 11.836 20.8836 14.333 19.0782 16.1421M19.1414 2.07816C19.9673 2.9206 20.6453 3.90855 21.1334 5M5 16.2196C3.14864 14.4047 2 11.8756 2 9.07816C2 6.31313 3.12222 3.8102 4.93603 2" stroke="black" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5"/>
	<Path d="M6 9.06033C6 7.50471 6.67333 6.09655 7.76162 5.07812M16.2849 5.1221C17.3458 6.13689 18 7.52697 18 9.06033C18 10.6119 17.3302 12.0167 16.2469 13.0345M7.8 13.0781C7.44967 12.7561 7.14127 12.3941 6.88321 12" stroke="black" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5"/>
	<Path d="M12.5 11L16 22L10.5 15.5M11.5 11L8 22L13.5 15.5" stroke="black" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5"/>
	<circle cx="12" cy="9.07812" r="2" stroke="black" strokeWidth="1.5"/>
</Svg>;

export default BrokenStation;
