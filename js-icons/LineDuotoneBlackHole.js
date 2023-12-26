import * as React from "react"
import Svg, { Path } from "react-native-svg";
    
const LineDuotoneBlackHole = ({
    size = 24,
    color = "#1f2937",
    stroke = 2,
    ...props
    }) => <Svg height={size} width={size} fill="none" viewBox="0 0 24 24" strokeWidth={stroke} xmlns="http://www.w3.org/2000/svg" {...props}>
	<circle cx="12" cy="12" r="2" stroke="black" strokeWidth="1.5"/>
	<Path d="M12 10C17 10 16.6 22 9 22" stroke="black" strokeLinecap="round" strokeWidth="1.5"/>
	<Path d="M12.3115 14C7.31152 14 7.71152 2 15.3115 2" stroke="black" strokeLinecap="round" strokeWidth="1.5"/>
	<Path d="M10.6315 10.6961C14.167 7.16053 22.3694 15.9287 16.9954 21.3027" opacity="0.5" stroke="black" strokeDasharray="2 2" strokeLinecap="round" strokeWidth="1.5"/>
	<Path d="M13.6801 13.3039C10.1445 16.8395 1.9421 8.07135 7.31611 2.69734" opacity="0.5" stroke="black" strokeDasharray="2 2" strokeLinecap="round" strokeWidth="1.5"/>
	<Path d="M10.8516 13.5242C7.31605 9.98865 16.0842 1.78622 21.4582 7.16023" opacity="0.5" stroke="black" strokeDasharray="2 2" strokeLinecap="round" strokeWidth="1.5"/>
	<Path d="M13.4599 10.4758C16.9955 14.0113 8.22736 22.2138 2.85334 16.8398" opacity="0.5" stroke="black" strokeDasharray="2 2" strokeLinecap="round" strokeWidth="1.5"/>
	<Path d="M10 12.3115C10 7.31152 22 7.71152 22 15.3115" stroke="black" strokeLinecap="round" strokeWidth="1.5"/>
	<Path d="M14 12C14 17 2 16.6 2 9" stroke="black" strokeLinecap="round" strokeWidth="1.5"/>
</Svg>;

export default LineDuotoneBlackHole;
