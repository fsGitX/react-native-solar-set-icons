import * as React from "react"
import Svg, { Path } from "react-native-svg";
    
const LinearCity = ({
    size = 24,
    color = "#1f2937",
    stroke = 2,
    ...props
    }) => <Svg height={size} width={size} fill="none" viewBox="0 0 24 24" strokeWidth={stroke} xmlns="http://www.w3.org/2000/svg" {...props}>
	<Path d="M3 22V12C3 10.1144 3 9.17157 3.58579 8.58579C4.17157 8 5.11438 8 7 8C8.88562 8 9.82843 8 10.4142 8.58579C11 9.17157 11 10.1144 11 12" stroke="#1C274C" strokeWidth="1.5"/>
	<Path d="M17 22V16C17 14.1144 17 13.1716 16.4142 12.5858C15.8284 12 14.8856 12 13 12H11C9.11438 12 8.17157 12 7.58579 12.5858C7 13.1716 7 14.1144 7 16V22" stroke="#1C274C" strokeWidth="1.5"/>
	<Path d="M21 21.9999V7.77195C21 6.4311 21 5.76068 20.6439 5.24676C20.2877 4.73283 19.66 4.49743 18.4045 4.02663C15.9492 3.10591 14.7216 2.64555 13.8608 3.2421C13 3.83864 13 5.14974 13 7.77195V11.9999" stroke="#1C274C" strokeWidth="1.5"/>
	<Path d="M4 8V6.5C4 5.55719 4 5.08579 4.29289 4.79289C4.58579 4.5 5.05719 4.5 6 4.5H8C8.94281 4.5 9.41421 4.5 9.70711 4.79289C10 5.08579 10 5.55719 10 6.5V8" stroke="#1C274C" strokeLinecap="round" strokeWidth="1.5"/>
	<Path d="M7 4V2" stroke="#1C274C" strokeLinecap="round" strokeWidth="1.5"/>
	<Path d="M22 22L2 22" stroke="#1C274C" strokeLinecap="round" strokeWidth="1.5"/>
	<Path d="M10 15H14" stroke="#1C274C" strokeLinecap="round" strokeWidth="1.5"/>
	<Path d="M10 18H14" stroke="#1C274C" strokeLinecap="round" strokeWidth="1.5"/>
</Svg>;

export default LinearCity;
