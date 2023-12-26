import * as React from "react"
import Svg, { Path } from "react-native-svg";
    
const LinearVideoFrameCut = ({
    size = 24,
    color = "#1f2937",
    stroke = 2,
    ...props
    }) => <Svg height={size} width={size} fill="none" viewBox="0 0 24 24" strokeWidth={stroke} xmlns="http://www.w3.org/2000/svg" {...props}>
	<Path d="M14.5 3.00293C17.2939 3.02331 18.8237 3.16641 19.8284 4.17112C21 5.34269 21 7.22831 21 10.9995V12.9995C21 16.7708 21 18.6564 19.8284 19.828C18.8237 20.8327 17.2939 20.9758 14.5 20.9962M9.49991 20.9962C6.70609 20.9758 5.17627 20.8327 4.17157 19.828C3 18.6564 3 16.7708 3 12.9995V10.9995C3 7.22831 3 5.34269 4.17157 4.17112C5.17627 3.16642 6.70609 3.02331 9.49991 3.00293" stroke="black" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5"/>
	<Path d="M17 4V20" stroke="black" strokeLinecap="round" strokeWidth="1.5"/>
	<Path d="M12 2V22" stroke="black" strokeDasharray="3 3" strokeLinecap="round" strokeWidth="1.5"/>
	<Path d="M7 4V20" stroke="black" strokeLinecap="round" strokeWidth="1.5"/>
	<Path d="M3.5 8.5H7M20.5 8.5H17" stroke="black" strokeLinecap="round" strokeWidth="1.5"/>
	<Path d="M3.5 15.5H7M20.5 15.5H17" stroke="black" strokeLinecap="round" strokeWidth="1.5"/>
</Svg>;

export default LinearVideoFrameCut;