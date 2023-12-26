import * as React from "react"
import Svg, { Path } from "react-native-svg";
    
const LineDuotoneListList1 = ({
    size = 24,
    color = "#1f2937",
    stroke = 2,
    ...props
    }) => <Svg height={size} width={size} fill="none" viewBox="0 0 24 24" strokeWidth={stroke} xmlns="http://www.w3.org/2000/svg" {...props}>
	<Path d="M20 7L4 7" stroke="black" strokeLinecap="round" strokeWidth="1.5"/>
	<Path d="M15 12L4 12" opacity="0.7" stroke="black" strokeLinecap="round" strokeWidth="1.5"/>
	<Path d="M9 17H4" opacity="0.4" stroke="black" strokeLinecap="round" strokeWidth="1.5"/>
</Svg>;

export default LineDuotoneListList1;
