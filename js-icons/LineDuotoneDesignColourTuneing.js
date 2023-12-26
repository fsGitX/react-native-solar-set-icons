import * as React from "react"
import Svg, { Path } from "react-native-svg";
    
const LineDuotoneDesignColourTuneing = ({
    size = 24,
    color = "#1f2937",
    stroke = 2,
    ...props
    }) => <Svg height={size} width={size} fill="none" viewBox="0 0 24 24" strokeWidth={stroke} xmlns="http://www.w3.org/2000/svg" {...props}>
	<Path d="M2 12H9.5M22 12H14.5" opacity="0.5" stroke="black" strokeLinecap="round" strokeWidth="1.5"/>
	<Path d="M20.0002 15.6844C20.0002 19.0002 17.7345 22.0002 16.0002 22.0002C13.7315 22.0002 12.0723 18.8423 12.0723 12.0002C12.0723 5.15806 10.4128 2 8.14404 2C6.40978 2 4.14404 5 4.14404 8.31579" stroke="black" strokeLinecap="round" strokeWidth="1.5"/>
</Svg>;

export default LineDuotoneDesignColourTuneing;
