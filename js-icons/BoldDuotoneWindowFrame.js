import * as React from "react"
import Svg, { Path } from "react-native-svg";
    
const BoldDuotoneWindowFrame = ({
    size = 24,
    color = "#1f2937",
    stroke = 2,
    ...props
    }) => <Svg height={size} width={size} fill="none" viewBox="0 0 24 24" strokeWidth={stroke} xmlns="http://www.w3.org/2000/svg" {...props}>
	<Path d="M11.9999 2C16.714 2 19.071 2 20.5355 3.46447C21.6157 4.54472 21.8991 6.11064 21.9735 8.75L21.9999 9.5H9.74992H8.99992H2.02637V8.75C2.10072 6.11064 2.38413 4.54472 3.46439 3.46447C4.92885 2 7.28588 2 11.9999 2Z" fill={color} opacity="0.5"/>
	<Path d="M13 6C13 6.55228 12.5523 7 12 7C11.4477 7 11 6.55228 11 6C11 5.44772 11.4477 5 12 5C12.5523 5 13 5.44772 13 6Z" fill={color}/>
	<Path d="M10 6C10 6.55228 9.55228 7 9 7C8.44771 7 8 6.55228 8 6C8 5.44772 8.44771 5 9 5C9.55228 5 10 5.44772 10 6Z" fill={color}/>
	<Path d="M7 6C7 6.55228 6.55228 7 6 7C5.44772 7 5 6.55228 5 6C5 5.44772 5.44772 5 6 5C6.55228 5 7 5.44772 7 6Z" fill={color}/>
	<Path d="M2 12C2 16.714 2 19.0711 3.46447 20.5355C4.47468 21.5458 5.90962 21.8591 8.25 21.9563L9 22V10.25V9.5H2.02645L2.00339 10.25C2 10.7944 2 11.3766 2 12Z" fill={color} opacity="0.7"/>
	<Path d="M22 12C22 16.714 22 19.0711 20.5355 20.5355C19.0711 22 16.714 22 12 22C11.1815 22 9.68405 22 9 21.9923V21L9 10.25V9.5L22 9.5L21.9966 10.25C22 10.7944 22 11.3766 22 12Z" fill={color}/>
</Svg>;

export default BoldDuotoneWindowFrame;
