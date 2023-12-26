import * as React from "react"
import Svg, { Path } from "react-native-svg";
    
const LineDuotonePlaylistMinimalistic2 = ({
    size = 24,
    color = "#1f2937",
    stroke = 2,
    ...props
    }) => <Svg height={size} width={size} fill="none" viewBox="0 0 24 24" strokeWidth={stroke} xmlns="http://www.w3.org/2000/svg" {...props}>
	<Path d="M15 6L3 6" opacity="0.5" stroke="black" strokeLinecap="round" strokeWidth="1.5"/>
	<Path d="M13 10L3 10" opacity="0.5" stroke="black" strokeLinecap="round" strokeWidth="1.5"/>
	<Path d="M9 14H3" opacity="0.5" stroke="black" strokeLinecap="round" strokeWidth="1.5"/>
	<Path d="M8 18H3" opacity="0.5" stroke="black" strokeLinecap="round" strokeWidth="1.5"/>
	<Path d="M17 16.5V12.5V8" stroke="black" strokeLinecap="round" strokeWidth="1.5"/>
	<Path d="M21 12C18.7909 12 17 10.2091 17 8" stroke="black" strokeLinecap="round" strokeWidth="1.5"/>
	<circle cx="14.5" cy="16.5" r="2.5" stroke="black" strokeWidth="1.5"/>
</Svg>;

export default LineDuotonePlaylistMinimalistic2;
