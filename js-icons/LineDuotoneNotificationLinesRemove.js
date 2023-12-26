import * as React from "react"
import Svg, { Path } from "react-native-svg";
    
const LineDuotoneNotificationLinesRemove = ({
    size = 24,
    color = "#1f2937",
    stroke = 2,
    ...props
    }) => <Svg height={size} width={size} fill="none" viewBox="0 0 24 24" strokeWidth={stroke} xmlns="http://www.w3.org/2000/svg" {...props}>
	<Path d="M22 10.5V12C22 16.714 22 19.0711 20.5355 20.5355C19.0711 22 16.714 22 12 22C7.28595 22 4.92893 22 3.46447 20.5355C2 19.0711 2 16.714 2 12C2 7.28595 2 4.92893 3.46447 3.46447C4.92893 2 7.28595 2 12 2H13.5" opacity="0.5" stroke="black" strokeLinecap="round" strokeWidth="1.5"/>
	<Path d="M7 14H16" stroke="black" strokeLinecap="round" strokeWidth="1.5"/>
	<Path d="M7 17.5H13" stroke="black" strokeLinecap="round" strokeWidth="1.5"/>
	<Path d="M22 2L17 6.99998M17 1.99998L22 6.99996" stroke="black" strokeLinecap="round" strokeWidth="1.5"/>
</Svg>;

export default LineDuotoneNotificationLinesRemove;
