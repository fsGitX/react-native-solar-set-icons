import * as React from "react"
import Svg, { Path } from "react-native-svg";
    
const LineDuotoneSkipNext = ({
    size = 24,
    color = "#1f2937",
    stroke = 2,
    ...props
    }) => <Svg height={size} width={size} fill="none" viewBox="0 0 24 24" strokeWidth={stroke} xmlns="http://www.w3.org/2000/svg" {...props}>
	<Path d="M16.6598 9.35258C18.4467 10.5065 18.4467 13.4935 16.6598 14.6474L5.87084 21.6145C4.13419 22.736 2 21.2763 2 18.9671L2 5.0329C2 2.72368 4.13419 1.26402 5.87083 2.38548L16.6598 9.35258Z" stroke="black" strokeWidth="1.5"/>
	<Path d="M22 5V19" opacity="0.5" stroke="black" strokeLinecap="round" strokeWidth="1.5"/>
</Svg>;

export default LineDuotoneSkipNext;
