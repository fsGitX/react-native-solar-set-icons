import * as React from "react"
import Svg, { Path } from "react-native-svg";
    
const LineDuotoneMinimize = ({
    size = 24,
    color = "#1f2937",
    stroke = 2,
    ...props
    }) => <Svg height={size} width={size} fill="none" viewBox="0 0 24 24" strokeWidth={stroke} xmlns="http://www.w3.org/2000/svg" {...props}>
	<Path d="M2 22L9 15M9 15H3.14286M9 15V20.8571" opacity="0.6" stroke="black" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5"/>
	<Path d="M22 2L15 9M15 9H20.8571M15 9V3.14286" stroke="black" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5"/>
</Svg>;

export default LineDuotoneMinimize;
