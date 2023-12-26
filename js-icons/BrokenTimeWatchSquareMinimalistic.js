import * as React from "react"
import Svg, { Path } from "react-native-svg";
    
const BrokenTimeWatchSquareMinimalistic = ({
    size = 24,
    color = "#1f2937",
    stroke = 2,
    ...props
    }) => <Svg height={size} width={size} fill="none" viewBox="0 0 24 24" strokeWidth={stroke} xmlns="http://www.w3.org/2000/svg" {...props}>
	<Path d="M12 9V12.0769L14 14" stroke="black" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5"/>
	<Path d="M7 2H17" stroke="black" strokeLinecap="round" strokeWidth="1.5"/>
	<Path d="M7 22H17" stroke="black" strokeLinecap="round" strokeWidth="1.5"/>
	<Path d="M18.9614 9.2C18.8849 7.66459 18.6565 6.70674 17.9749 6.02513C16.9497 5 15.2998 5 12 5C8.70017 5 7.05025 5 6.02513 6.02513C5 7.05025 5 8.70017 5 12C5 15.2998 5 16.9497 6.02513 17.9749C7.05025 19 8.70017 19 12 19C15.2998 19 16.9497 19 17.9749 17.9749C18.7678 17.1819 18.9474 16.0151 18.9881 14" stroke="black" strokeLinecap="round" strokeWidth="1.5"/>
</Svg>;

export default BrokenTimeWatchSquareMinimalistic;
