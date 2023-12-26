import * as React from "react"
import Svg, { Path } from "react-native-svg";
    
const BoldDuotoneArrowsSquareArrowLeftUp = ({
    size = 24,
    color = "#1f2937",
    stroke = 2,
    ...props
    }) => <Svg height={size} width={size} fill="none" viewBox="0 0 24 24" strokeWidth={stroke} xmlns="http://www.w3.org/2000/svg" {...props}>
	<Path d="M3.46447 3.46447C4.92893 2 7.28595 2 12 2C16.714 2 19.0711 2 20.5355 3.46447C22 4.92893 22 7.28595 22 12C22 16.714 22 19.0711 20.5355 20.5355C19.0711 22 16.714 22 12 22C7.28595 22 4.92893 22 3.46447 20.5355C2 19.0711 2 16.714 2 12C2 7.28595 2 4.92893 3.46447 3.46447Z" fill={color} opacity="0.5"/>
	<Path d="M8.42163 9.17188C8.42163 8.75766 8.75742 8.42188 9.17163 8.42188L13.4143 8.42188C13.8285 8.42187 14.1643 8.75766 14.1643 9.17188C14.1643 9.58609 13.8285 9.92187 13.4143 9.92188H10.9823L15.3588 14.2984C15.6517 14.5913 15.6517 15.0662 15.3588 15.3591C15.0659 15.652 14.591 15.652 14.2982 15.3591L9.92163 10.9825L9.92163 13.4145C9.92163 13.8287 9.58585 14.1645 9.17163 14.1645C8.75742 14.1645 8.42163 13.8287 8.42163 13.4145L8.42163 9.17188Z" fill={color}/>
</Svg>;

export default BoldDuotoneArrowsSquareArrowLeftUp;
