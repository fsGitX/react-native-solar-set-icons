import * as React from "react"
import Svg, { Path } from "react-native-svg";
    
const BrokenSkipNext = ({
    size = 24,
    color = "#1f2937",
    stroke = 2,
    ...props
    }) => <Svg height={size} width={size} fill="none" viewBox="0 0 24 24" strokeWidth={stroke} xmlns="http://www.w3.org/2000/svg" {...props}>
	<Path d="M2 11L2 18.9671C2 21.2763 4.13419 22.736 5.87083 21.6145L16.6598 14.6474C18.4467 13.4935 18.4467 10.5065 16.6598 9.35258L5.87084 2.38548C4.13419 1.26402 2 2.72368 2 5.03289V7" stroke="black" strokeLinecap="round" strokeWidth="1.5"/>
	<Path d="M22 5V12M22 16V19" stroke="black" strokeLinecap="round" strokeWidth="1.5"/>
</Svg>;

export default BrokenSkipNext;
