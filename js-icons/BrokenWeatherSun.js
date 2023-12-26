import * as React from "react"
import Svg, { Path } from "react-native-svg";
    
const BrokenWeatherSun = ({
    size = 24,
    color = "#1f2937",
    stroke = 2,
    ...props
    }) => <Svg height={size} width={size} fill="none" viewBox="0 0 24 24" strokeWidth={stroke} xmlns="http://www.w3.org/2000/svg" {...props}>
	<Path d="M12 2V3" stroke="black" strokeLinecap="round" strokeWidth="1.5"/>
	<Path d="M12 21V22" stroke="black" strokeLinecap="round" strokeWidth="1.5"/>
	<Path d="M22 12L21 12" stroke="black" strokeLinecap="round" strokeWidth="1.5"/>
	<Path d="M3 12L2 12" stroke="black" strokeLinecap="round" strokeWidth="1.5"/>
	<Path d="M19.0708 4.9292L18.678 5.32204" stroke="black" strokeLinecap="round" strokeWidth="1.5"/>
	<Path d="M5.32178 18.6782L4.92894 19.0711" stroke="black" strokeLinecap="round" strokeWidth="1.5"/>
	<Path d="M19.0708 19.0708L18.678 18.678" stroke="black" strokeLinecap="round" strokeWidth="1.5"/>
	<Path d="M5.32178 5.32178L4.92894 4.92894" stroke="black" strokeLinecap="round" strokeWidth="1.5"/>
	<Path d="M6.34141 10C6.12031 10.6256 6 11.2987 6 12C6 15.3137 8.68629 18 12 18C15.3137 18 18 15.3137 18 12C18 8.68629 15.3137 6 12 6C11.2987 6 10.6256 6.12031 10 6.34141" stroke="black" strokeLinecap="round" strokeWidth="1.5"/>
</Svg>;

export default BrokenWeatherSun;
