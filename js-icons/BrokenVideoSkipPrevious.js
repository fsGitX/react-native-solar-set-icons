import * as React from "react"
import Svg, { Path } from "react-native-svg";
    
const BrokenVideoSkipPrevious = ({
    size = 24,
    color = "#1f2937",
    stroke = 2,
    ...props
    }) => <Svg height={size} width={size} fill="none" viewBox="0 0 24 24" strokeWidth={stroke} xmlns="http://www.w3.org/2000/svg" {...props}>
	<Path d="M22 11L22 18.9671C22 21.2763 19.8658 22.736 18.1292 21.6145L7.34016 14.6474C5.55328 13.4935 5.55328 10.5065 7.34015 9.35258L18.1292 2.38548C19.8658 1.26402 22 2.72368 22 5.03289V7" stroke="black" strokeLinecap="round" strokeWidth="1.5"/>
	<Path d="M2 5V12M2 19V16" stroke="black" strokeLinecap="round" strokeWidth="1.5"/>
</Svg>;

export default BrokenVideoSkipPrevious;
