import * as React from "react"
import Svg, { Path } from "react-native-svg";
    
const LineDuotoneEssentionalSort = ({
    size = 24,
    color = "#1f2937",
    stroke = 2,
    ...props
    }) => <Svg height={size} width={size} fill="none" viewBox="0 0 24 24" strokeWidth={stroke} xmlns="http://www.w3.org/2000/svg" {...props}>
	<Path d="M22 7L2 7" stroke="black" strokeLinecap="round" strokeWidth="1.5"/>
	<Path d="M19 12L5 12" opacity="0.5" stroke="black" strokeLinecap="round" strokeWidth="1.5"/>
	<Path d="M16 17H8" stroke="black" strokeLinecap="round" strokeWidth="1.5"/>
</Svg>;

export default LineDuotoneEssentionalSort;
