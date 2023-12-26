import * as React from "react"
import Svg, { Path } from "react-native-svg";
    
const BrokenSettingsTuningSquare2 = ({
    size = 24,
    color = "#1f2937",
    stroke = 2,
    ...props
    }) => <Svg height={size} width={size} fill="none" viewBox="0 0 24 24" strokeWidth={stroke} xmlns="http://www.w3.org/2000/svg" {...props}>
	<Path d="M10 14C11.1046 14 12 14.8954 12 16C12 17.1046 11.1046 18 10 18C8.89543 18 8 17.1046 8 16C8 14.8954 8.89543 14 10 14Z" stroke="black" strokeWidth="1.5"/>
	<Path d="M14 16L19 16" stroke="black" strokeLinecap="round" strokeWidth="1.5"/>
	<Path d="M10 8L5 8" stroke="black" strokeLinecap="round" strokeWidth="1.5"/>
	<Path d="M5 16L6 16" stroke="black" strokeLinecap="round" strokeWidth="1.5"/>
	<Path d="M19 8L18 8" stroke="black" strokeLinecap="round" strokeWidth="1.5"/>
	<Path d="M22 12C22 16.714 22 19.0711 20.5355 20.5355C19.0711 22 16.714 22 12 22C7.28595 22 4.92893 22 3.46447 20.5355C2 19.0711 2 16.714 2 12C2 7.28595 2 4.92893 3.46447 3.46447C4.92893 2 7.28595 2 12 2C16.714 2 19.0711 2 20.5355 3.46447C21.5093 4.43821 21.8356 5.80655 21.9449 8" stroke="black" strokeLinecap="round" strokeWidth="1.5"/>
	<circle r="2" stroke="black" strokeWidth="1.5" transform="matrix(-4.37114e-08 -1 -1 4.37114e-08 14 8)"/>
</Svg>;

export default BrokenSettingsTuningSquare2;
