import * as React from "react"
import Svg, { Path } from "react-native-svg";
    
const BrokenPlaylistMinimalistic2 = ({
    size = 24,
    color = "#1f2937",
    stroke = 2,
    ...props
    }) => <Svg height={size} width={size} fill="none" viewBox="0 0 24 24" strokeWidth={stroke} xmlns="http://www.w3.org/2000/svg" {...props}>
	<Path d="M9 14H3" stroke="black" strokeLinecap="round" strokeWidth="1.5"/>
	<Path d="M8 18H3" stroke="black" strokeLinecap="round" strokeWidth="1.5"/>
	<Path d="M17 16.5V12.5V8" stroke="black" strokeLinecap="round" strokeWidth="1.5"/>
	<Path d="M21 12C18.7909 12 17 10.2091 17 8" stroke="black" strokeLinecap="round" strokeWidth="1.5"/>
	<Path d="M3 6H10.4118M15 6H13.4118" stroke="black" strokeLinecap="round" strokeWidth="1.5"/>
	<Path d="M13 10L6.82353 10M3 10H4.32353" stroke="black" strokeLinecap="round" strokeWidth="1.5"/>
	<circle cx="14.5" cy="16.5" r="2.5" stroke="black" strokeWidth="1.5"/>
</Svg>;

export default BrokenPlaylistMinimalistic2;
