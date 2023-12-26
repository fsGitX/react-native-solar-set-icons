import * as React from "react"
import Svg, { Path } from "react-native-svg";
    
const LinearVideoFrame = ({
    size = 24,
    color = "#1f2937",
    stroke = 2,
    ...props
    }) => <Svg height={size} width={size} fill="none" viewBox="0 0 24 24" strokeWidth={stroke} xmlns="http://www.w3.org/2000/svg" {...props}>
	<Path d="M2 12C2 7.28595 2 4.92893 3.46447 3.46447C4.92893 2 7.28595 2 12 2C16.714 2 19.0711 2 20.5355 3.46447C22 4.92893 22 7.28595 22 12C22 16.714 22 19.0711 20.5355 20.5355C19.0711 22 16.714 22 12 22C7.28595 22 4.92893 22 3.46447 20.5355C2 19.0711 2 16.714 2 12Z" stroke="black" strokeWidth="1.5"/>
	<Path d="M17 2.5L17 21.5" stroke="black" strokeLinecap="round" strokeWidth="1.5"/>
	<Path d="M7 2.5L7 21.5" stroke="black" strokeLinecap="round" strokeWidth="1.5"/>
	<Path d="M2.5 7L7 7M21.5 7L17 7" stroke="black" strokeLinecap="round" strokeWidth="1.5"/>
	<Path d="M2.5 17L7 17M21.5 17L17 17" stroke="black" strokeLinecap="round" strokeWidth="1.5"/>
	<Path d="M2 12H22" stroke="black" strokeLinecap="round" strokeWidth="1.5"/>
</Svg>;

export default LinearVideoFrame;
