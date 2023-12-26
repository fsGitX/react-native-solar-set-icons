import * as React from "react"
import Svg, { Path } from "react-native-svg";
    
const LineDuotoneEssentionalMenuDots = ({
    size = 24,
    color = "#1f2937",
    stroke = 2,
    ...props
    }) => <Svg height={size} width={size} fill="none" viewBox="0 0 24 24" strokeWidth={stroke} xmlns="http://www.w3.org/2000/svg" {...props}>
	<circle cx="5" cy="12" r="2" stroke="black" strokeWidth="1.5"/>
	<circle cx="12" cy="12" opacity="0.5" r="2" stroke="black" strokeWidth="1.5"/>
	<circle cx="19" cy="12" r="2" stroke="black" strokeWidth="1.5"/>
</Svg>;

export default LineDuotoneEssentionalMenuDots;
