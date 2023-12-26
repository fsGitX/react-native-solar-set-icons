import * as React from "react"
import Svg, { Path } from "react-native-svg";
    
const BrokenTimeStopwatch = ({
    size = 24,
    color = "#1f2937",
    stroke = 2,
    ...props
    }) => <Svg height={size} width={size} fill="none" viewBox="0 0 24 24" strokeWidth={stroke} xmlns="http://www.w3.org/2000/svg" {...props}>
	<Path d="M12 13V9" stroke="black" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5"/>
	<Path d="M10 2H14" stroke="black" strokeLinecap="round" strokeWidth="1.5"/>
	<Path d="M7.5 5.20404C8.82378 4.43827 10.3607 4 12 4C16.9706 4 21 8.02944 21 13C21 17.9706 16.9706 22 12 22C7.02944 22 3 17.9706 3 13C3 11.3607 3.43827 9.82378 4.20404 8.5" stroke="black" strokeLinecap="round" strokeWidth="1.5"/>
</Svg>;

export default BrokenTimeStopwatch;