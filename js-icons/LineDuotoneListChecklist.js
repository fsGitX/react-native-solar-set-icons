import * as React from "react"
import Svg, { Path } from "react-native-svg";
    
const LineDuotoneListChecklist = ({
    size = 24,
    color = "#1f2937",
    stroke = 2,
    ...props
    }) => <Svg height={size} width={size} fill="none" viewBox="0 0 24 24" strokeWidth={stroke} xmlns="http://www.w3.org/2000/svg" {...props}>
	<Path d="M2 5.5L3.21429 7L7.5 3" stroke="black" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5"/>
	<Path d="M2 12.5L3.21429 14L7.5 10" opacity="0.5" stroke="black" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5"/>
	<Path d="M2 19.5L3.21429 21L7.5 17" stroke="black" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5"/>
	<Path d="M22 19L12 19" stroke="black" strokeLinecap="round" strokeWidth="1.5"/>
	<Path d="M22 12L12 12" opacity="0.5" stroke="black" strokeLinecap="round" strokeWidth="1.5"/>
	<Path d="M22 5L12 5" stroke="black" strokeLinecap="round" strokeWidth="1.5"/>
</Svg>;

export default LineDuotoneListChecklist;
