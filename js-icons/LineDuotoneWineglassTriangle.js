import * as React from "react"
import Svg, { Path } from "react-native-svg";
    
const LineDuotoneWineglassTriangle = ({
    size = 24,
    color = "#1f2937",
    stroke = 2,
    ...props
    }) => <Svg height={size} width={size} fill="none" viewBox="0 0 24 24" strokeWidth={stroke} xmlns="http://www.w3.org/2000/svg" {...props}>
	<Path d="M16.2439 21H7.7561M4.70095 3H19.2991C20.7999 3 21.5624 4.79409 20.5162 5.86382L12.7149 13.8404C12.3227 14.2415 11.6773 14.2415 11.2851 13.8404L3.48381 5.86382C2.43759 4.79409 3.20008 3 4.70095 3Z" stroke="black" strokeLinecap="round" strokeWidth="1.5"/>
	<Path d="M12 14.5713V20.9999" opacity="0.5" stroke="black" strokeLinecap="round" strokeWidth="1.5"/>
	<Path d="M7.47314 9.75H16.5268" opacity="0.5" stroke="black" strokeLinecap="round" strokeWidth="1.5"/>
</Svg>;

export default LineDuotoneWineglassTriangle;
