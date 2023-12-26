import * as React from "react"
import Svg, { Path } from "react-native-svg";
    
const BrokenListChecklist = ({
    size = 24,
    color = "#1f2937",
    stroke = 2,
    ...props
    }) => <Svg height={size} width={size} fill="none" viewBox="0 0 24 24" strokeWidth={stroke} xmlns="http://www.w3.org/2000/svg" {...props}>
	<Path d="M2 5.5L3.21429 7L7.5 3" stroke="black" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5"/>
	<Path d="M2 12.5L3.21429 14L7.5 10" stroke="black" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5"/>
	<Path d="M2 19.5L3.21429 21L7.5 17" stroke="black" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5"/>
	<Path d="M22 12H17M12 12H13.5" stroke="black" strokeLinecap="round" strokeWidth="1.5"/>
	<Path d="M12 19H17M20.5 19H22" stroke="black" strokeLinecap="round" strokeWidth="1.5"/>
	<Path d="M22 5L12 5" stroke="black" strokeLinecap="round" strokeWidth="1.5"/>
</Svg>;

export default BrokenListChecklist;
