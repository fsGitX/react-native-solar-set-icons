import * as React from "react"
import Svg, { Path } from "react-native-svg";
    
const LineDuotoneShoppingBag4 = ({
    size = 24,
    color = "#1f2937",
    stroke = 2,
    ...props
    }) => <Svg height={size} width={size} fill="none" viewBox="0 0 24 24" strokeWidth={stroke} xmlns="http://www.w3.org/2000/svg" {...props}>
	<Path d="M3.79412 12.0291C4.33129 9.34329 4.59987 8.00036 5.48734 7.13543C5.65136 6.97557 5.82882 6.8301 6.01774 6.70061C7.03992 6 8.40944 6 11.1485 6H12.8514C15.5904 6 16.96 6 17.9821 6.70061C18.1711 6.8301 18.3485 6.97557 18.5125 7.13543C19.4 8.00036 19.6686 9.34329 20.2058 12.0291C20.977 15.8851 21.3626 17.8131 20.4749 19.1793C20.3142 19.4267 20.1266 19.6555 19.9155 19.8616C18.75 21 16.7838 21 12.8514 21H11.1485C7.2161 21 5.24992 21 4.08434 19.8616C3.8733 19.6555 3.6857 19.4267 3.52498 19.1793C2.63732 17.8131 3.02292 15.8851 3.79412 12.0291Z" stroke="black" strokeWidth="1.5"/>
	<Path d="M9 6V5C9 3.34315 10.3431 2 12 2C13.6569 2 15 3.34315 15 5V6" opacity="0.5" stroke="black" strokeLinecap="round" strokeWidth="1.5"/>
	<circle cx="15" cy="9" fill={color} opacity="0.5" r="1"/>
	<circle cx="9" cy="9" fill={color} opacity="0.5" r="1"/>
</Svg>;

export default LineDuotoneShoppingBag4;
