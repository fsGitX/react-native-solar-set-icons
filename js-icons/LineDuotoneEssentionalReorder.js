import * as React from "react"
import Svg, { Path } from "react-native-svg";
    
const LineDuotoneEssentionalReorder = ({
    size = 24,
    color = "#1f2937",
    stroke = 2,
    ...props
    }) => <Svg height={size} width={size} fill="none" viewBox="0 0 24 24" strokeWidth={stroke} xmlns="http://www.w3.org/2000/svg" {...props}>
	<Path d="M19 10L5 10" stroke="black" strokeLinecap="round" strokeWidth="1.5"/>
	<Path d="M19 14L5 14" opacity="0.5" stroke="black" strokeLinecap="round" strokeWidth="1.5"/>
	<Path d="M19 6L5 6" opacity="0.5" stroke="black" strokeLinecap="round" strokeWidth="1.5"/>
	<Path d="M19 18L5 18" stroke="black" strokeLinecap="round" strokeWidth="1.5"/>
</Svg>;

export default LineDuotoneEssentionalReorder;
