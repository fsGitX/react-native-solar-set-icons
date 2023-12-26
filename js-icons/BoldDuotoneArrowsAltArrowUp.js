import * as React from "react"
import Svg, { Path } from "react-native-svg";
    
const BoldDuotoneArrowsAltArrowUp = ({
    size = 24,
    color = "#1f2937",
    stroke = 2,
    ...props
    }) => <Svg height={size} width={size} fill="none" viewBox="0 0 24 24" strokeWidth={stroke} xmlns="http://www.w3.org/2000/svg" {...props}>
	<Path d="M8.30273 11.5956L11.6296 8.16485C11.8428 7.94505 12.1573 7.94505 12.3704 8.16485L18.8001 14.7953C19.2013 15.2091 18.9581 16 18.4297 16H12.7071L8.30273 11.5956Z" fill={color}/>
	<Path d="M11.2929 15.9999H5.5703C5.04189 15.9999 4.79869 15.2089 5.1999 14.7952L7.60648 12.3135L11.2929 15.9999Z" fill={color} opacity="0.5"/>
</Svg>;

export default BoldDuotoneArrowsAltArrowUp;
