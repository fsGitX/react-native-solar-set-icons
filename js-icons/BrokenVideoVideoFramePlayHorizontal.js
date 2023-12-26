import * as React from "react"
import Svg, { Path } from "react-native-svg";
    
const BrokenVideoVideoFramePlayHorizontal = ({
    size = 24,
    color = "#1f2937",
    stroke = 2,
    ...props
    }) => <Svg height={size} width={size} fill="none" viewBox="0 0 24 24" strokeWidth={stroke} xmlns="http://www.w3.org/2000/svg" {...props}>
	<Path d="M21.5 17L2.5 17" stroke="black" strokeLinecap="round" strokeWidth="1.5"/>
	<Path d="M21.5 7L2.5 7" stroke="black" strokeLinecap="round" strokeWidth="1.5"/>
	<Path d="M12 2L12 7M12 22L12 17" stroke="black" strokeLinecap="round" strokeWidth="1.5"/>
	<Path d="M17 2.5L17 7M17 21.5L17 17" stroke="black" strokeLinecap="round" strokeWidth="1.5"/>
	<Path d="M7 2.5L7 7M7 21.5L7 17" stroke="black" strokeLinecap="round" strokeWidth="1.5"/>
	<Path d="M14 12C14 11.4722 13.4704 11.1162 12.4112 10.4043C11.3375 9.68271 10.8006 9.3219 10.4003 9.58682C10 9.85174 10 10.5678 10 12C10 13.4322 10 14.1483 10.4003 14.4132C10.8006 14.6781 11.3375 14.3173 12.4112 13.5957C13.4704 12.8838 14 12.5278 14 12Z" stroke="black" strokeLinecap="round" strokeWidth="1.5"/>
	<Path d="M2 12C2 7.28595 2 4.92893 3.46447 3.46447C4.92893 2 7.28595 2 12 2C16.714 2 19.0711 2 20.5355 3.46447C21.352 4.28094 21.7133 5.37486 21.8731 7M22 12C22 16.714 22 19.0711 20.5355 20.5355C19.0711 22 16.714 22 12 22C7.28595 22 4.92893 22 3.46447 20.5355C2.64799 19.7191 2.28672 18.6251 2.12687 17" stroke="black" strokeLinecap="round" strokeWidth="1.5"/>
</Svg>;

export default BrokenVideoVideoFramePlayHorizontal;
