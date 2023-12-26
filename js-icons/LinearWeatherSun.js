import * as React from "react"
import Svg, { Path } from "react-native-svg";
    
const LinearWeatherSun = ({
    size = 24,
    color = "#1f2937",
    stroke = 2,
    ...props
    }) => <Svg height={size} width={size} fill="none" viewBox="0 0 24 24" strokeWidth={stroke} xmlns="http://www.w3.org/2000/svg" {...props}>
	<circle cx="12" cy="12" r="6" stroke="black" strokeWidth="1.5"/>
	<Path d="M12 2V3" stroke="black" strokeLinecap="round" strokeWidth="1.5"/>
	<Path d="M12 21V22" stroke="black" strokeLinecap="round" strokeWidth="1.5"/>
	<Path d="M22 12L21 12" stroke="black" strokeLinecap="round" strokeWidth="1.5"/>
	<Path d="M3 12L2 12" stroke="black" strokeLinecap="round" strokeWidth="1.5"/>
	<Path d="M19.0708 4.9292L18.678 5.32204" stroke="black" strokeLinecap="round" strokeWidth="1.5"/>
	<Path d="M5.32178 18.6782L4.92894 19.0711" stroke="black" strokeLinecap="round" strokeWidth="1.5"/>
	<Path d="M19.0708 19.0708L18.678 18.678" stroke="black" strokeLinecap="round" strokeWidth="1.5"/>
	<Path d="M5.32178 5.32178L4.92894 4.92894" stroke="black" strokeLinecap="round" strokeWidth="1.5"/>
</Svg>;

export default LinearWeatherSun;
