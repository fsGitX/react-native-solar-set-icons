import * as React from "react"
import Svg, { Path } from "react-native-svg";
    
const LinearTarget = ({
    size = 24,
    color = "#1f2937",
    stroke = 2,
    ...props
    }) => <Svg height={size} width={size} fill="none" viewBox="0 0 24 24" strokeWidth={stroke} xmlns="http://www.w3.org/2000/svg" {...props}>
	<Path d="M22 12C22 17.5228 17.5228 22 12 22C6.47715 22 2 17.5228 2 12C2 6.47715 6.47715 2 12 2C17.5228 2 22 6.47715 22 12Z" stroke="black" strokeWidth="1.5"/>
	<Path d="M2 12L5 12" stroke="black" strokeLinecap="round" strokeWidth="1.5"/>
	<Path d="M19 12L22 12" stroke="black" strokeLinecap="round" strokeWidth="1.5"/>
	<Path d="M12 22L12 19" stroke="black" strokeLinecap="round" strokeWidth="1.5"/>
	<Path d="M12 5L12 2" stroke="black" strokeLinecap="round" strokeWidth="1.5"/>
	<Path d="M10 12H12H14" stroke="black" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5"/>
	<Path d="M12 14L12 12L12 10" stroke="black" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5"/>
</Svg>;

export default LinearTarget;
