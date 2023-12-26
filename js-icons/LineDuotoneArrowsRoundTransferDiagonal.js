import * as React from "react"
import Svg, { Path } from "react-native-svg";
    
const LineDuotoneArrowsRoundTransferDiagonal = ({
    size = 24,
    color = "#1f2937",
    stroke = 2,
    ...props
    }) => <Svg height={size} width={size} fill="none" viewBox="0 0 24 24" strokeWidth={stroke} xmlns="http://www.w3.org/2000/svg" {...props}>
	<circle cx="12" cy="12" opacity="0.5" r="10" stroke="black" strokeWidth="1.5"/>
	<Path d="M6.5 4L13.8784 12V7.5" stroke="black" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5"/>
	<Path d="M17.3784 19.8779L9.87842 11.9995V16.4995" stroke="black" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5"/>
</Svg>;

export default LineDuotoneArrowsRoundTransferDiagonal;
