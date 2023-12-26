import * as React from "react"
import Svg, { Path } from "react-native-svg";
    
const LineDuotoneArrowsRoundArrowLeftUp = ({
    size = 24,
    color = "#1f2937",
    stroke = 2,
    ...props
    }) => <Svg height={size} width={size} fill="none" viewBox="0 0 24 24" strokeWidth={stroke} xmlns="http://www.w3.org/2000/svg" {...props}>
	<circle cx="12" cy="12" opacity="0.5" r="10" stroke="black" strokeWidth="1.5"/>
	<Path d="M15 15L9 9M9 9H13.5M9 9V13.5" stroke="black" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5"/>
</Svg>;

export default LineDuotoneArrowsRoundArrowLeftUp;
