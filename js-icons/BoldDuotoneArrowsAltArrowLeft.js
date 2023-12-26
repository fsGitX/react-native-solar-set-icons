import * as React from "react"
import Svg, { Path } from "react-native-svg";
    
const BoldDuotoneArrowsAltArrowLeft = ({
    size = 24,
    color = "#1f2937",
    stroke = 2,
    ...props
    }) => <Svg height={size} width={size} fill="none" viewBox="0 0 24 24" strokeWidth={stroke} xmlns="http://www.w3.org/2000/svg" {...props}>
	<Path d="M11.5956 8.30273L8.16485 11.6296C7.94505 11.8428 7.94505 12.1573 8.16485 12.3704L14.7953 18.8001C15.2091 19.2013 16 18.9581 16 18.4297V12.7071L11.5956 8.30273Z" fill={color}/>
	<Path d="M15.9999 11.2929L15.9999 5.5703C15.9999 5.04189 15.2089 4.79869 14.7952 5.1999L12.3135 7.60648L15.9999 11.2929Z" fill={color} opacity="0.5"/>
</Svg>;

export default BoldDuotoneArrowsAltArrowLeft;
