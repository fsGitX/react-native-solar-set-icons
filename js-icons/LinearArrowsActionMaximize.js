import * as React from "react"
import Svg, { Path } from "react-native-svg";
    
const LinearArrowsActionMaximize = ({
    size = 24,
    color = "#1f2937",
    stroke = 2,
    ...props
    }) => <Svg height={size} width={size} fill="none" viewBox="0 0 24 24" strokeWidth={stroke} xmlns="http://www.w3.org/2000/svg" {...props}>
	<Path d="M9 15L2 22M2 22H7.85714M2 22V16.1429" stroke="black" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5"/>
	<Path d="M15 9L22 2M22 2H16.1429M22 2V7.85714" stroke="black" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5"/>
</Svg>;

export default LinearArrowsActionMaximize;
