import * as React from "react"
import Svg, { Path } from "react-native-svg";
    
const LineDuotoneRewindForward = ({
    size = 24,
    color = "#1f2937",
    stroke = 2,
    ...props
    }) => <Svg height={size} width={size} fill="none" viewBox="0 0 24 24" strokeWidth={stroke} xmlns="http://www.w3.org/2000/svg" {...props}>
	<Path d="M10.9998 8.76844L4.90312 4.30838C3.60064 3.41122 2 4.57895 2 6.42632L2 17.5737C2 19.4211 3.60065 20.5888 4.90313 19.6916L10.9998 15.2316" opacity="0.5" stroke="black" strokeWidth="1.5"/>
	<Path d="M21.0786 10.1468C22.3071 10.9545 22.3071 13.0455 21.0786 13.8532L13.6612 18.7302C12.4673 19.5152 11 18.4934 11 16.877L11 7.12303C11 5.50658 12.4673 4.48482 13.6612 5.26983L21.0786 10.1468Z" stroke="black" strokeWidth="1.5"/>
</Svg>;

export default LineDuotoneRewindForward;
