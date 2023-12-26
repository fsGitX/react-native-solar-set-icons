import * as React from "react"
import Svg, { Path } from "react-native-svg";
    
const LinearArrowsRoundSortHorizontal = ({
    size = 24,
    color = "#1f2937",
    stroke = 2,
    ...props
    }) => <Svg height={size} width={size} fill="none" viewBox="0 0 24 24" strokeWidth={stroke} xmlns="http://www.w3.org/2000/svg" {...props}>
	<circle cx="12" cy="12" r="10" stroke="black" strokeWidth="1.5"/>
	<Path d="M16 9.5L8 9.5M8 9.5L10.75 7M8 9.5L10.75 12" stroke="black" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5"/>
	<Path d="M8 14.5L16 14.5M16 14.5L13.25 12M16 14.5L13.25 17" stroke="black" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5"/>
</Svg>;

export default LinearArrowsRoundSortHorizontal;
