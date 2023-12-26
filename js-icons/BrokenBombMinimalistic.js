import * as React from "react"
import Svg, { Path } from "react-native-svg";
    
const BrokenBombMinimalistic = ({
    size = 24,
    color = "#1f2937",
    stroke = 2,
    ...props
    }) => <Svg height={size} width={size} fill="none" viewBox="0 0 24 24" strokeWidth={stroke} xmlns="http://www.w3.org/2000/svg" {...props}>
	<Path d="M17 7L15 9" stroke="black" strokeLinecap="round" strokeWidth="1.5"/>
	<Path d="M19.5 7.5L20.5 8" stroke="black" strokeLinecap="round" strokeWidth="1.5"/>
	<Path d="M16 3.5L16.5 4.5" stroke="black" strokeLinecap="round" strokeWidth="1.5"/>
	<Path d="M19 5L20 4" stroke="black" strokeLinecap="round" strokeWidth="1.5"/>
	<Path d="M5.75 8.00337C6.85315 7.36523 8.13392 7 9.5 7C13.6421 7 17 10.3579 17 14.5C17 18.6421 13.6421 22 9.5 22C5.35786 22 2 18.6421 2 14.5C2 13.1339 2.36523 11.8532 3.00337 10.75" stroke="black" strokeLinecap="round" strokeWidth="1.5"/>
</Svg>;

export default BrokenBombMinimalistic;
