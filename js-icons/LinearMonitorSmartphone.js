import * as React from "react"
import Svg, { Path } from "react-native-svg";
    
const LinearMonitorSmartphone = ({
    size = 24,
    color = "#1f2937",
    stroke = 2,
    ...props
    }) => <Svg height={size} width={size} fill="none" viewBox="0 0 24 24" strokeWidth={stroke} xmlns="http://www.w3.org/2000/svg" {...props}>
	<Path d="M11 17H8C5.17157 17 3.75736 17 2.87868 16.1213C2 15.2426 2 13.8284 2 11V10C2 6.22876 2 4.34315 3.17157 3.17157C4.34315 2 6.22876 2 10 2H15.5C17.8346 2 19.0019 2 19.8856 2.47231C20.5833 2.84525 21.1548 3.4167 21.5277 4.11441C22 4.99805 22 6.16537 22 8.5" stroke="black" strokeLinecap="round" strokeWidth="1.5"/>
	<Path d="M14 15C14 13.1144 14 12.1716 14.5858 11.5858C15.1716 11 16.1144 11 18 11C19.8856 11 20.8284 11 21.4142 11.5858C22 12.1716 22 13.1144 22 15V18C22 19.8856 22 20.8284 21.4142 21.4142C20.8284 22 19.8856 22 18 22C16.1144 22 15.1716 22 14.5858 21.4142C14 20.8284 14 19.8856 14 18V15Z" stroke="black" strokeWidth="1.5"/>
	<Path d="M19 20H17" stroke="black" strokeLinecap="round" strokeWidth="1.5"/>
	<Path d="M11 22H8" stroke="black" strokeLinecap="round" strokeWidth="1.5"/>
	<Path d="M11 22V17" stroke="black" strokeLinecap="round" strokeWidth="1.5"/>
	<Path d="M11 13H2" stroke="black" strokeLinecap="round" strokeWidth="1.5"/>
</Svg>;

export default LinearMonitorSmartphone;
