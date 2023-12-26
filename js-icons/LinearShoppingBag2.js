import * as React from "react"
import Svg, { Path } from "react-native-svg";
    
const LinearShoppingBag2 = ({
    size = 24,
    color = "#1f2937",
    stroke = 2,
    ...props
    }) => <Svg height={size} width={size} fill="none" viewBox="0 0 24 24" strokeWidth={stroke} xmlns="http://www.w3.org/2000/svg" {...props}>
	<Path d="M3.74169 20.5545C4.94131 22 7.17402 22 11.6394 22H12.3606C16.826 22 19.0587 22 20.2584 20.5545M3.74169 20.5545C2.54207 19.1091 2.95353 16.9146 3.77645 12.5257C4.36167 9.40452 4.65428 7.84393 5.76518 6.92196M3.74169 20.5545C3.74169 20.5545 3.74169 20.5545 3.74169 20.5545ZM20.2584 20.5545C21.458 19.1091 21.0465 16.9146 20.2236 12.5257C19.6384 9.40452 19.3458 7.84393 18.2349 6.92196M20.2584 20.5545C20.2583 20.5545 20.2584 20.5545 20.2584 20.5545ZM18.2349 6.92196C17.124 6 15.5362 6 12.3606 6H11.6394C8.46386 6 6.87608 6 5.76518 6.92196M18.2349 6.92196C18.2349 6.92196 18.2349 6.92196 18.2349 6.92196ZM5.76518 6.92196C5.76518 6.92196 5.76518 6.92196 5.76518 6.92196Z" stroke="black" strokeWidth="1.5"/>
	<Path d="M15 11L16 17" stroke="black" strokeLinecap="round" strokeWidth="1.5"/>
	<Path d="M9 11L8 17" stroke="black" strokeLinecap="round" strokeWidth="1.5"/>
	<Path d="M9 6V5C9 3.34315 10.3431 2 12 2C13.6569 2 15 3.34315 15 5V6" stroke="black" strokeLinecap="round" strokeWidth="1.5"/>
</Svg>;

export default LinearShoppingBag2;
