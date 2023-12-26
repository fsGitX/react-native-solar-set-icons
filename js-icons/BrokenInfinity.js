import * as React from "react"
import Svg, { Path } from "react-native-svg";
    
const BrokenInfinity = ({
    size = 24,
    color = "#1f2937",
    stroke = 2,
    ...props
    }) => <Svg height={size} width={size} fill="none" viewBox="0 0 24 24" strokeWidth={stroke} xmlns="http://www.w3.org/2000/svg" {...props}>
	<Path d="M10.0005 8C9.16474 7.37209 8.12582 7 7 7C4.23858 7 2 9.23858 2 12C2 13.6356 2.78534 15.0878 3.99951 16M14 16C14.8357 16.6278 15.8743 17 17 17C19.7614 17 22 14.7614 22 12C22 10.3644 21.2147 8.91223 20.0005 8" stroke="black" strokeLinecap="round" strokeWidth="1.5"/>
	<Path d="M7 17C9.76142 17 10.5 15 12 12C13.5 9 14.2386 7 17 7" stroke="black" strokeLinecap="round" strokeWidth="1.5"/>
</Svg>;

export default BrokenInfinity;
