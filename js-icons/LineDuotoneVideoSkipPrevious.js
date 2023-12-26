import * as React from "react"
import Svg, { Path } from "react-native-svg";
    
const LineDuotoneVideoSkipPrevious = ({
    size = 24,
    color = "#1f2937",
    stroke = 2,
    ...props
    }) => <Svg height={size} width={size} fill="none" viewBox="0 0 24 24" strokeWidth={stroke} xmlns="http://www.w3.org/2000/svg" {...props}>
	<Path d="M7.34016 9.35258C5.55328 10.5065 5.55328 13.4935 7.34015 14.6474L18.1292 21.6145C19.8658 22.736 22 21.2763 22 18.9671L22 5.0329C22 2.72368 19.8658 1.26402 18.1292 2.38548L7.34016 9.35258Z" stroke="black" strokeWidth="1.5"/>
	<Path d="M2 5V19" opacity="0.5" stroke="black" strokeLinecap="round" strokeWidth="1.5"/>
</Svg>;

export default LineDuotoneVideoSkipPrevious;
