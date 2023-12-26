import * as React from "react"
import Svg, { Path } from "react-native-svg";
    
const BrokenWeatherSunrise = ({
    size = 24,
    color = "#1f2937",
    stroke = 2,
    ...props
    }) => <Svg height={size} width={size} fill="none" viewBox="0 0 24 24" strokeWidth={stroke} xmlns="http://www.w3.org/2000/svg" {...props}>
	<Path d="M8 22H16" stroke="black" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5"/>
	<Path d="M5 19H19" stroke="black" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5"/>
	<Path d="M2 16H22" stroke="black" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5"/>
	<Path d="M12 10L12.5303 9.46967C12.2374 9.17678 11.7626 9.17678 11.4697 9.46967L12 10ZM13.4697 12.5303C13.7626 12.8232 14.2374 12.8232 14.5303 12.5303C14.8232 12.2374 14.8232 11.7626 14.5303 11.4697L13.4697 12.5303ZM9.46967 11.4697C9.17678 11.7626 9.17678 12.2374 9.46967 12.5303C9.76256 12.8232 10.2374 12.8232 10.5303 12.5303L9.46967 11.4697ZM12.75 16V10H11.25V16H12.75ZM11.4697 10.5303L13.4697 12.5303L14.5303 11.4697L12.5303 9.46967L11.4697 10.5303ZM11.4697 9.46967L9.46967 11.4697L10.5303 12.5303L12.5303 10.5303L11.4697 9.46967Z" fill={color}/>
	<Path d="M12 2V3" stroke="black" strokeLinecap="round" strokeWidth="1.5"/>
	<Path d="M22 12L21 12" stroke="black" strokeLinecap="round" strokeWidth="1.5"/>
	<Path d="M3 12L2 12" stroke="black" strokeLinecap="round" strokeWidth="1.5"/>
	<Path d="M19.0708 4.9292L18.678 5.32204" stroke="black" strokeLinecap="round" strokeWidth="1.5"/>
	<Path d="M5.32178 5.32178L4.92894 4.92894" stroke="black" strokeLinecap="round" strokeWidth="1.5"/>
	<Path d="M10 6.34141C10.6256 6.12031 11.2987 6 12 6C15.3137 6 18 8.68629 18 12C18 13.5217 17.4335 14.911 16.5 15.9687H7.5C6.56645 14.911 6 13.5217 6 12C6 11.2987 6.12031 10.6256 6.34141 10" stroke="black" strokeLinecap="round" strokeWidth="1.5"/>
</Svg>;

export default BrokenWeatherSunrise;
