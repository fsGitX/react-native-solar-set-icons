import * as React from "react"
import Svg, { Path } from "react-native-svg";
    
const BrokenVideoFramePlayVertical = ({
    size = 24,
    color = "#1f2937",
    stroke = 2,
    ...props
    }) => <Svg height={size} width={size} fill="none" viewBox="0 0 24 24" strokeWidth={stroke} xmlns="http://www.w3.org/2000/svg" {...props}>
	<Path d="M17 2.5L17 21.5" stroke="black" strokeLinecap="round" strokeWidth="1.5"/>
	<Path d="M7 2.5L7 21.5" stroke="black" strokeLinecap="round" strokeWidth="1.5"/>
	<Path d="M2 12L7 12M22 12L17 12" stroke="black" strokeLinecap="round" strokeWidth="1.5"/>
	<Path d="M2.5 7L7 7M21.5 7L17 7" stroke="black" strokeLinecap="round" strokeWidth="1.5"/>
	<Path d="M21.5 17.75C21.9142 17.75 22.25 17.4142 22.25 17C22.25 16.5858 21.9142 16.25 21.5 16.25V17.75ZM17 16.25C16.5858 16.25 16.25 16.5858 16.25 17C16.25 17.4142 16.5858 17.75 17 17.75V16.25ZM7 17.75C7.41421 17.75 7.75 17.4142 7.75 17C7.75 16.5858 7.41421 16.25 7 16.25V17.75ZM17 17.75L21.5 17.75V16.25L17 16.25V17.75ZM2 17.75H7V16.25H2L2 17.75Z" fill={color}/>
	<Path d="M14 12C14 11.4722 13.4704 11.1162 12.4112 10.4043C11.3375 9.68271 10.8006 9.3219 10.4003 9.58682C10 9.85174 10 10.5678 10 12C10 13.4322 10 14.1483 10.4003 14.4132C10.8006 14.6781 11.3375 14.3173 12.4112 13.5957C13.4704 12.8838 14 12.5278 14 12Z" stroke="black" strokeLinecap="round" strokeWidth="1.5"/>
	<Path d="M2 12C2 7.28595 2 4.92893 3.46447 3.46447C4.92893 2 7.28595 2 12 2C16.714 2 19.0711 2 20.5355 3.46447C21.352 4.28094 21.7133 5.37486 21.8731 7M22 12C22 16.714 22 19.0711 20.5355 20.5355C19.0711 22 16.714 22 12 22C7.28595 22 4.92893 22 3.46447 20.5355C2.64799 19.7191 2.28672 18.6251 2.12687 17" stroke="black" strokeLinecap="round" strokeWidth="1.5"/>
</Svg>;

export default BrokenVideoFramePlayVertical;
