import * as React from "react"
import Svg, { Path } from "react-native-svg";
    
const BrokenSliderVerticalMinimalistic = ({
    size = 24,
    color = "#1f2937",
    stroke = 2,
    ...props
    }) => <Svg height={size} width={size} fill="none" viewBox="0 0 24 24" strokeWidth={stroke} xmlns="http://www.w3.org/2000/svg" {...props}>
	<Path d="M18 8C18 5.17157 18 3.75736 17.1213 2.87868C16.2426 2 14.8284 2 12 2C9.17157 2 7.75736 2 6.87868 2.87868C6 3.75736 6 5.17157 6 8V16C6 18.8284 6 20.2426 6.87868 21.1213C7.75736 22 9.17157 22 12 22C14.8284 22 16.2426 22 17.1213 21.1213C18 20.2426 18 18.8284 18 16V12" stroke="black" strokeLinecap="round" strokeWidth="1.5"/>
	<Path d="M21 4.5L21 19.5" stroke="black" strokeLinecap="round" strokeWidth="1.5"/>
	<Path d="M3 4.5L3 19.5" stroke="black" strokeLinecap="round" strokeWidth="1.5"/>
</Svg>;

export default BrokenSliderVerticalMinimalistic;
