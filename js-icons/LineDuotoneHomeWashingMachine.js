import * as React from "react"
import Svg, { Path } from "react-native-svg";
    
const LineDuotoneHomeWashingMachine = ({
    size = 24,
    color = "#1f2937",
    stroke = 2,
    ...props
    }) => <Svg height={size} width={size} fill="none" viewBox="0 0 24 24" strokeWidth={stroke} xmlns="http://www.w3.org/2000/svg" {...props}>
	<Path d="M6 22V21" opacity="0.5" stroke="black" strokeLinecap="round" strokeWidth="1.5"/>
	<Path d="M18 22V21" opacity="0.5" stroke="black" strokeLinecap="round" strokeWidth="1.5"/>
	<Path d="M3 10C3 6.22876 3 4.34315 4.17157 3.17157C5.34315 2 7.22876 2 11 2H13C16.7712 2 18.6569 2 19.8284 3.17157C21 4.34315 21 6.22876 21 10V13C21 16.7712 21 18.6569 19.8284 19.8284C18.6569 21 16.7712 21 13 21H11C7.22876 21 5.34315 21 4.17157 19.8284C3 18.6569 3 16.7712 3 13V10Z" stroke="black" strokeWidth="1.5"/>
	<Path d="M3 9H21" opacity="0.5" stroke="black" strokeLinecap="round" strokeWidth="1.5"/>
	<Path d="M15 15C15 16.6569 13.6569 18 12 18C10.3431 18 9 16.6569 9 15C9 13.3431 10.3431 12 12 12C13.6569 12 15 13.3431 15 15Z" stroke="black" strokeWidth="1.5"/>
	<Path d="M6.5 5.5H9.5" stroke="black" strokeLinecap="round" strokeWidth="1.5"/>
	<Path d="M15.5 5.5C15.5 6.05228 15.0523 6.5 14.5 6.5C13.9477 6.5 13.5 6.05228 13.5 5.5C13.5 4.94772 13.9477 4.5 14.5 4.5C15.0523 4.5 15.5 4.94772 15.5 5.5Z" fill={color} opacity="0.5"/>
	<Path d="M18.5 5.5C18.5 6.05228 18.0523 6.5 17.5 6.5C16.9477 6.5 16.5 6.05228 16.5 5.5C16.5 4.94772 16.9477 4.5 17.5 4.5C18.0523 4.5 18.5 4.94772 18.5 5.5Z" fill={color} opacity="0.5"/>
</Svg>;

export default LineDuotoneHomeWashingMachine;
