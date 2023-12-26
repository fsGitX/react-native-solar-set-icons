import * as React from "react"
import Svg, { Path } from "react-native-svg";
    
const LineDuotoneShoppingBag5 = ({
    size = 24,
    color = "#1f2937",
    stroke = 2,
    ...props
    }) => <Svg height={size} width={size} fill="none" viewBox="0 0 24 24" strokeWidth={stroke} xmlns="http://www.w3.org/2000/svg" {...props}>
	<Path d="M3.79412 14.9709C4.33129 17.6567 4.59987 18.9996 5.48734 19.8646C5.65136 20.0244 5.82882 20.1699 6.01774 20.2994C7.03992 21 8.40944 21 11.1485 21H12.8514C15.5904 21 16.96 21 17.9821 20.2994C18.1711 20.1699 18.3485 20.0244 18.5125 19.8646C19.4 18.9996 19.6686 17.6567 20.2058 14.9709C20.977 11.1149 21.3626 9.18686 20.4749 7.82067C20.3142 7.5733 20.1266 7.34447 19.9155 7.13836C18.75 6 16.7838 6 12.8514 6H11.1485C7.2161 6 5.24992 6 4.08434 7.13836C3.8733 7.34447 3.6857 7.5733 3.52498 7.82067C2.63732 9.18686 3.02292 11.1149 3.79412 14.9709Z" stroke="black" strokeWidth="1.5"/>
	<Path d="M9 6V5C9 3.34315 10.3431 2 12 2C13.6569 2 15 3.34315 15 5V6" opacity="0.5" stroke="black" strokeLinecap="round" strokeWidth="1.5"/>
	<circle cx="15" cy="10" fill={color} opacity="0.5" r="1"/>
	<circle cx="9" cy="10" fill={color} opacity="0.5" r="1"/>
</Svg>;

export default LineDuotoneShoppingBag5;
