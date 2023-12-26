import * as React from "react"
import Svg, { Path } from "react-native-svg";
    
const LineDuotoneDesignRuler = ({
    size = 24,
    color = "#1f2937",
    stroke = 2,
    ...props
    }) => <Svg height={size} width={size} fill="none" viewBox="0 0 24 24" strokeWidth={stroke} xmlns="http://www.w3.org/2000/svg" {...props}>
	<Path d="M4.04537 18.5083C2.68179 17.1448 2 16.463 2 15.6157C2 14.7685 2.68179 14.0867 4.04537 12.7231L12.7231 4.04537C14.0867 2.68179 14.7685 2 15.6157 2C16.463 2 17.1448 2.68179 18.5083 4.04537L19.9546 5.49167C21.3182 6.85525 22 7.53704 22 8.38426C22 9.23148 21.3182 9.91327 19.9546 11.2769L11.2769 19.9546C9.91327 21.3182 9.23148 22 8.38426 22C7.53704 22 6.85525 21.3182 5.49167 19.9546L4.04537 18.5083Z" stroke="black" strokeWidth="1.5"/>
	<Path d="M8.46448 8.46436L9.87869 9.87857" opacity="0.5" stroke="black" strokeLinecap="round" strokeWidth="1.5"/>
	<Path d="M12.7072 4.22168L14.1214 5.63589" opacity="0.5" stroke="black" strokeLinecap="round" strokeWidth="1.5"/>
	<Path d="M4.2218 12.707L5.63602 14.1212" opacity="0.5" stroke="black" strokeLinecap="round" strokeWidth="1.5"/>
	<Path d="M6.34314 10.5859L8.46446 12.7073" opacity="0.5" stroke="black" strokeLinecap="round" strokeWidth="1.5"/>
	<Path d="M10.5858 6.34326L12.7071 8.46458" opacity="0.5" stroke="black" strokeLinecap="round" strokeWidth="1.5"/>
</Svg>;

export default LineDuotoneDesignRuler;
