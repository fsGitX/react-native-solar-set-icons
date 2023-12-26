import * as React from "react"
import Svg, { Path } from "react-native-svg";
    
const BrokenVideoFrameCut = ({
    size = 24,
    color = "#1f2937",
    stroke = 2,
    ...props
    }) => <Svg height={size} width={size} fill="none" viewBox="0 0 24 24" strokeWidth={stroke} xmlns="http://www.w3.org/2000/svg" {...props}>
	<Path d="M17 3.5V20.5" stroke="black" strokeLinecap="round" strokeWidth="1.5"/>
	<Path d="M12 2V22" stroke="black" strokeDasharray="3 3" strokeLinecap="round" strokeWidth="1.5"/>
	<Path d="M7 3.5V20.5" stroke="black" strokeLinecap="round" strokeWidth="1.5"/>
	<Path d="M3 8.5L7 8.5M21 8.5H17" stroke="black" strokeLinecap="round" strokeWidth="1.5"/>
	<Path d="M3 15.5L5.75 15.5L7 15.5M21 15.5L17 15.5" stroke="black" strokeLinecap="round" strokeWidth="1.5"/>
	<Path d="M14.5 3.00293C17.2939 3.02331 18.8237 3.16641 19.8284 4.17112C20.8916 5.23426 20.99 6.8854 20.9991 10M14.5 20.9962C17.2939 20.9758 18.8237 20.8327 19.8284 19.828C20.8916 18.7648 20.99 17.1137 20.9991 13.9991M9.49991 20.9962C6.70609 20.9758 5.17627 20.8327 4.17157 19.828C3 18.6564 3 16.7708 3 12.9995V10.9995C3 7.22831 3 5.34269 4.17157 4.17112C5.17627 3.16642 6.70609 3.02331 9.49991 3.00293" stroke="black" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5"/>
</Svg>;

export default BrokenVideoFrameCut;
