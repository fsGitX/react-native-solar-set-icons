import * as React from "react"
import Svg, { Path } from "react-native-svg";
    
const BrokenSunset = ({
    size = 24,
    color = "#1f2937",
    stroke = 2,
    ...props
    }) => <Svg height={size} width={size} fill="none" viewBox="0 0 24 24" strokeWidth={stroke} xmlns="http://www.w3.org/2000/svg" {...props}>
	<Path d="M8 22H16" stroke="black" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5"/>
	<Path d="M5 19H19" stroke="black" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5"/>
	<Path d="M2 16H22" stroke="black" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5"/>
	<Path d="M12 6V12M12 12L14 10M12 12L10 10" stroke="black" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5"/>
	<Path d="M12 2V3" stroke="black" strokeLinecap="round" strokeWidth="1.5"/>
	<Path d="M22 12L21 12" stroke="black" strokeLinecap="round" strokeWidth="1.5"/>
	<Path d="M3 12L2 12" stroke="black" strokeLinecap="round" strokeWidth="1.5"/>
	<Path d="M19.0708 4.9292L18.678 5.32204" stroke="black" strokeLinecap="round" strokeWidth="1.5"/>
	<Path d="M5.32178 5.32178L4.92894 4.92894" stroke="black" strokeLinecap="round" strokeWidth="1.5"/>
	<Path d="M10 6.34141C10.6256 6.12031 11.2987 6 12 6C15.3137 6 18 8.68629 18 12C18 13.5217 17.4335 14.911 16.5 15.9687H7.5C6.56645 14.911 6 13.5217 6 12C6 11.2987 6.12031 10.6256 6.34141 10" stroke="black" strokeLinecap="round" strokeWidth="1.5"/>
</Svg>;

export default BrokenSunset;
