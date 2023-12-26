import * as React from "react"
import Svg, { Path } from "react-native-svg";
    
const BrokenMoneySafeSquare = ({
    size = 24,
    color = "#1f2937",
    stroke = 2,
    ...props
    }) => <Svg height={size} width={size} fill="none" viewBox="0 0 24 24" strokeWidth={stroke} xmlns="http://www.w3.org/2000/svg" {...props}>
	<Path d="M6 7L6 8M6 17L6 12" stroke="black" strokeLinecap="round" strokeWidth="1.5"/>
	<Path d="M11 12C11 10.3431 12.3431 9 14 9C15.6569 9 17 10.3431 17 12C17 13.6569 15.6569 15 14 15C12.3431 15 11 13.6569 11 12Z" stroke="black" strokeWidth="1.5"/>
	<Path d="M12.5 9.40135C12.9413 9.14609 13.4536 9 14 9C15.6569 9 17 10.3431 17 12C17 13.6569 15.6569 15 14 15C12.3431 15 11 13.6569 11 12C11 11.4536 11.1461 10.9413 11.4013 10.5" stroke="black" strokeLinecap="round" strokeWidth="1.5"/>
	<Path d="M16.5 9.5L18 8" stroke="black" strokeLinecap="round" strokeWidth="1.5"/>
	<Path d="M10 16L11.5 14.5" stroke="black" strokeLinecap="round" strokeWidth="1.5"/>
	<Path d="M11.5 9.5L10 8" stroke="black" strokeLinecap="round" strokeWidth="1.5"/>
	<Path d="M18 16L16.5 14.5" stroke="black" strokeLinecap="round" strokeWidth="1.5"/>
	<Path d="M22 12C22 16.714 22 19.0711 20.5355 20.5355C19.0711 22 16.714 22 12 22C7.28595 22 4.92893 22 3.46447 20.5355C2 19.0711 2 16.714 2 12C2 7.28595 2 4.92893 3.46447 3.46447C4.92893 2 7.28595 2 12 2C16.714 2 19.0711 2 20.5355 3.46447C21.5093 4.43821 21.8356 5.80655 21.9449 8" stroke="black" strokeLinecap="round" strokeWidth="1.5"/>
</Svg>;

export default BrokenMoneySafeSquare;
