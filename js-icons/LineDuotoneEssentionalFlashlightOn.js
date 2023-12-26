import * as React from "react"
import Svg, { Path } from "react-native-svg";
    
const LineDuotoneEssentionalFlashlightOn = ({
    size = 24,
    color = "#1f2937",
    stroke = 2,
    ...props
    }) => <Svg height={size} width={size} fill="none" viewBox="0 0 24 24" strokeWidth={stroke} xmlns="http://www.w3.org/2000/svg" {...props}>
	<Path d="M9 22V17.6569C9 16.8394 9 16.4306 8.84776 16.0631C8.69552 15.6955 8.40649 15.4065 7.82843 14.8284L4.58579 11.5858C4.29676 11.2968 4.15224 11.1522 4.07612 10.9685C4 10.7847 4 10.5803 4 10.1716V10C4 9.05719 4 8.58579 4.29289 8.29289C4.58579 8 5.05719 8 6 8H18C18.9428 8 19.4142 8 19.7071 8.29289C20 8.58579 20 9.05719 20 10V10.1716C20 10.5803 20 10.7847 19.9239 10.9685C19.8478 11.1522 19.7032 11.2968 19.4142 11.5858L16.1716 14.8284C15.5935 15.4065 15.3045 15.6955 15.1522 16.0631C15 16.4306 15 16.8394 15 17.6569V22" stroke="black" strokeLinecap="round" strokeWidth="1.5"/>
	<Path d="M15 16H9" stroke="black" strokeLinecap="round" strokeWidth="1.5"/>
	<Path d="M4.5 11H19.5" opacity="0.5" stroke="black" strokeLinecap="round" strokeWidth="1.5"/>
	<Path d="M12 5V2" opacity="0.5" stroke="black" strokeLinecap="round" strokeWidth="1.5"/>
	<Path d="M8 5L6 3" stroke="black" strokeLinecap="round" strokeWidth="1.5"/>
	<Path d="M16 5L18 3" stroke="black" strokeLinecap="round" strokeWidth="1.5"/>
	<Path d="M12 19V21" opacity="0.5" stroke="black" strokeLinecap="round" strokeWidth="1.5"/>
</Svg>;

export default LineDuotoneEssentionalFlashlightOn;
