import * as React from "react"
import Svg, { Path } from "react-native-svg";
    
const LinearBuildings = ({
    size = 24,
    color = "#1f2937",
    stroke = 2,
    ...props
    }) => <Svg height={size} width={size} fill="none" viewBox="0 0 24 24" strokeWidth={stroke} xmlns="http://www.w3.org/2000/svg" {...props}>
	<Path d="M22 22L2 22" stroke="#1C274C" strokeLinecap="round" strokeWidth="1.5"/>
	<Path d="M21 22V6C21 4.11438 21 3.17157 20.4143 2.58579C19.8285 2 18.8857 2 17 2H15C13.1144 2 12.1716 2 11.5858 2.58579C11.1143 3.05733 11.0223 3.76022 11.0044 5" stroke="#1C274C" strokeWidth="1.5"/>
	<Path d="M15 22V9C15 7.11438 15 6.17157 14.4142 5.58579C13.8284 5 12.8856 5 11 5H7C5.11438 5 4.17157 5 3.58579 5.58579C3 6.17157 3 7.11438 3 9V22" stroke="#1C274C" strokeWidth="1.5"/>
	<Path d="M9 22V19" stroke="#1C274C" strokeLinecap="round" strokeWidth="1.5"/>
	<Path d="M6 8H12" stroke="#1C274C" strokeLinecap="round" strokeWidth="1.5"/>
	<Path d="M6 11H12" stroke="#1C274C" strokeLinecap="round" strokeWidth="1.5"/>
	<Path d="M6 14H12" stroke="#1C274C" strokeLinecap="round" strokeWidth="1.5"/>
</Svg>;

export default LinearBuildings;
