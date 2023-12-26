import * as React from "react"
import Svg, { Path } from "react-native-svg";
    
const LineDuotoneMinimalisticMagniferBug = ({
    size = 24,
    color = "#1f2937",
    stroke = 2,
    ...props
    }) => <Svg height={size} width={size} fill="none" viewBox="0 0 24 24" strokeWidth={stroke} xmlns="http://www.w3.org/2000/svg" {...props}>
	<circle cx="11.5" cy="11.5" r="9.5" stroke="#8E93A6" strokeWidth="1.5"/>
	<Path d="M11.5 15.5C9.84315 15.5 8.5 14.1569 8.5 12.5V10.5M11.5 15.5C13.1569 15.5 14.5 14.1569 14.5 12.5V10.5M11.5 15.5V10.5M14.5 10.5C14.5 8.84315 13.1569 7.5 11.5 7.5C9.84315 7.5 8.5 8.84315 8.5 10.5M14.5 10.5H8.5M14.5715 11.5H16M7 11.5H8.5M14.5 14L15.5 14.5M8.5 14L7.5 14.5M14.5 9L15.5 8.5M8.5 9L7.5 8.5" stroke="black" strokeLinecap="round" strokeWidth="1.5"/>
	<Path d="M20 20L22 22" stroke="black" strokeLinecap="round" strokeWidth="1.5"/>
</Svg>;

export default LineDuotoneMinimalisticMagniferBug;
