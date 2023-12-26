import * as React from "react"
import Svg, { Path } from "react-native-svg";
    
const LinearBuildingBuildings2 = ({
    size = 24,
    color = "#1f2937",
    stroke = 2,
    ...props
    }) => <Svg height={size} width={size} fill="none" viewBox="0 0 24 24" strokeWidth={stroke} xmlns="http://www.w3.org/2000/svg" {...props}>
	<Path d="M22 22L2 22" stroke="#1C274C" strokeLinecap="round" strokeWidth="1.5"/>
	<Path d="M17 22V6C17 4.11438 17 3.17157 16.4142 2.58579C15.8284 2 14.8856 2 13 2H11C9.11438 2 8.17157 2 7.58579 2.58579C7 3.17157 7 4.11438 7 6V22" stroke="#1C274C" strokeWidth="1.5"/>
	<Path d="M21 22V11.5C21 10.0955 21 9.39331 20.6629 8.88886C20.517 8.67048 20.3295 8.48298 20.1111 8.33706C19.6067 8 18.9045 8 17.5 8" stroke="#1C274C" strokeWidth="1.5"/>
	<Path d="M3 22V11.5C3 10.0955 3 9.39331 3.33706 8.88886C3.48298 8.67048 3.67048 8.48298 3.88886 8.33706C4.39331 8 5.09554 8 6.5 8" stroke="#1C274C" strokeWidth="1.5"/>
	<Path d="M12 22V19" stroke="#1C274C" strokeLinecap="round" strokeWidth="1.5"/>
	<Path d="M10 5H14" stroke="#1C274C" strokeLinecap="round" strokeWidth="1.5"/>
	<Path d="M10 8H14" stroke="#1C274C" strokeLinecap="round" strokeWidth="1.5"/>
	<Path d="M10 11H14" stroke="#1C274C" strokeLinecap="round" strokeWidth="1.5"/>
	<Path d="M10 14H14" stroke="#1C274C" strokeLinecap="round" strokeWidth="1.5"/>
</Svg>;

export default LinearBuildingBuildings2;
