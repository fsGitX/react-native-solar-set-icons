import * as React from "react"
import Svg, { Path } from "react-native-svg";
    
const LineDuotoneEssentionalQuestionCircle = ({
    size = 24,
    color = "#1f2937",
    stroke = 2,
    ...props
    }) => <Svg height={size} width={size} fill="none" viewBox="0 0 24 24" strokeWidth={stroke} xmlns="http://www.w3.org/2000/svg" {...props}>
	<circle cx="12" cy="12" opacity="0.5" r="10" stroke="black" strokeWidth="1.5"/>
	<circle cx="12" cy="16" fill={color} r="1"/>
	<Path d="M10.125 8.875C10.125 7.83947 10.9645 7 12 7C13.0355 7 13.875 7.83947 13.875 8.875C13.875 9.56245 13.505 10.1635 12.9534 10.4899C12.478 10.7711 12 11.1977 12 11.75V13" stroke="black" strokeLinecap="round" strokeWidth="1.5"/>
</Svg>;

export default LineDuotoneEssentionalQuestionCircle;
