import * as React from "react"
import Svg, { Path } from "react-native-svg";
    
const LinearShockAbsorber = ({
    size = 24,
    color = "#1f2937",
    stroke = 2,
    ...props
    }) => <Svg height={size} width={size} fill="none" viewBox="0 0 24 24" strokeWidth={stroke} xmlns="http://www.w3.org/2000/svg" {...props}>
	<Path d="M14 20C14 21.1046 13.1046 22 12 22C10.8954 22 10 21.1046 10 20C10 18.8954 10.8954 18 12 18C13.1046 18 14 18.8954 14 20Z" stroke="#1C274C" strokeWidth="1.5"/>
	<Path d="M6 4C6 3.05719 6 2.58579 6.29289 2.29289C6.58579 2 7.05719 2 8 2H16C16.9428 2 17.4142 2 17.7071 2.29289C18 2.58579 18 3.05719 18 4C18 4.94281 18 5.41421 17.7071 5.70711C17.4142 6 16.9428 6 16 6H8C7.05719 6 6.58579 6 6.29289 5.70711C6 5.41421 6 4.94281 6 4Z" stroke="#1C274C" strokeWidth="1.5"/>
	<Path d="M8.5 16.5C8.5 15.6716 9.17157 15 10 15H14C14.8284 15 15.5 15.6716 15.5 16.5C15.5 17.3284 14.8284 18 14 18H10C9.17157 18 8.5 17.3284 8.5 16.5Z" stroke="#1C274C" strokeWidth="1.5"/>
	<Path d="M14 15.5V5.5" stroke="#1C274C" strokeWidth="1.5"/>
	<Path d="M10 15.5V6" stroke="#1C274C" strokeWidth="1.5"/>
	<Path d="M8 8L16 10M8 11.5L16 13.5" stroke="#1C274C" strokeLinecap="round" strokeWidth="1.5"/>
	<Path d="M20 11.4995L22 11.4995M4 11.5005H2M19.0713 14.3L19.7784 15M4.92871 14.3L4.2216 15M19.0713 8.69996L19.7784 8M4.92871 8.69996L4.2216 8" stroke="#1C274C" strokeLinecap="round" strokeWidth="1.5"/>
</Svg>;

export default LinearShockAbsorber;
