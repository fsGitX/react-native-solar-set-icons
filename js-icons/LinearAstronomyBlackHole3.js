import * as React from "react"
import Svg, { Path } from "react-native-svg";
    
const LinearAstronomyBlackHole3 = ({
    size = 24,
    color = "#1f2937",
    stroke = 2,
    ...props
    }) => <Svg height={size} width={size} fill="none" viewBox="0 0 24 24" strokeWidth={stroke} xmlns="http://www.w3.org/2000/svg" {...props}>
	<circle cx="12" cy="12" r="2" stroke="black" strokeWidth="1.5"/>
	<Path d="M12 10C17 10 16.6 22 9 22" stroke="black" strokeLinecap="round" strokeWidth="1.5"/>
	<Path d="M12.3115 14C7.31152 14 7.71152 2 15.3115 2" stroke="black" strokeLinecap="round" strokeWidth="1.5"/>
	<Path d="M10 12.3115C10 7.31152 22 7.71152 22 15.3115" stroke="black" strokeLinecap="round" strokeWidth="1.5"/>
	<Path d="M14 12C14 17 2 16.6 2 9" stroke="black" strokeLinecap="round" strokeWidth="1.5"/>
</Svg>;

export default LinearAstronomyBlackHole3;
