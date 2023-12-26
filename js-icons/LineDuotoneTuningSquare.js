import * as React from "react"
import Svg, { Path } from "react-native-svg";
    
const LineDuotoneTuningSquare = ({
    size = 24,
    color = "#1f2937",
    stroke = 2,
    ...props
    }) => <Svg height={size} width={size} fill="none" viewBox="0 0 24 24" strokeWidth={stroke} xmlns="http://www.w3.org/2000/svg" {...props}>
	<Path d="M2 12C2 7.28595 2 4.92893 3.46447 3.46447C4.92893 2 7.28595 2 12 2C16.714 2 19.0711 2 20.5355 3.46447C22 4.92893 22 7.28595 22 12C22 16.714 22 19.0711 20.5355 20.5355C19.0711 22 16.714 22 12 22C7.28595 22 4.92893 22 3.46447 20.5355C2 19.0711 2 16.714 2 12Z" opacity="0.5" stroke="black" strokeWidth="1.5"/>
	<Path d="M8 14V19" stroke="black" strokeLinecap="round" strokeWidth="1.5"/>
	<Path d="M16 10V5" stroke="black" strokeLinecap="round" strokeWidth="1.5"/>
	<Path d="M8 5V6" stroke="black" strokeLinecap="round" strokeWidth="1.5"/>
	<Path d="M16 19V18" stroke="black" strokeLinecap="round" strokeWidth="1.5"/>
	<circle cx="8" cy="10" r="2" stroke="black" strokeWidth="1.5"/>
	<circle r="2" stroke="black" strokeWidth="1.5" transform="matrix(1 0 0 -1 16 14)"/>
</Svg>;

export default LineDuotoneTuningSquare;
