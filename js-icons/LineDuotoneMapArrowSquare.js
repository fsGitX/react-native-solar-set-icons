import * as React from "react"
import Svg, { Path } from "react-native-svg";
    
const LineDuotoneMapArrowSquare = ({
    size = 24,
    color = "#1f2937",
    stroke = 2,
    ...props
    }) => <Svg height={size} width={size} fill="none" viewBox="0 0 24 24" strokeWidth={stroke} xmlns="http://www.w3.org/2000/svg" {...props}>
	<Path d="M12 22C7.28595 22 4.92893 22 3.46447 20.5355C2 19.0711 2 16.714 2 12C2 7.28595 2 4.92893 3.46447 3.46447C4.92893 2 7.28595 2 12 2C16.714 2 19.0711 2 20.5355 3.46447C22 4.92893 22 7.28595 22 12C22 16.714 22 19.0711 20.5355 20.5355C19.0711 22 16.714 22 12 22Z" opacity="0.5" stroke="black" strokeWidth="1.5"/>
	<Path d="M13.4227 17.3618L16.9348 8.19598C17.2164 7.46107 16.5389 6.78361 15.804 7.06521L6.63824 10.5773C5.80779 10.8955 5.78079 12.06 6.5981 12.3083L10.0751 13.3648C10.3455 13.447 10.553 13.6545 10.6352 13.9249L11.6917 17.4019C11.94 18.2192 13.1045 18.1922 13.4227 17.3618Z" stroke="black" strokeWidth="1.5"/>
</Svg>;

export default LineDuotoneMapArrowSquare;
