import * as React from "react"
import Svg, { Path } from "react-native-svg";
    
const LineDuotoneAstronomyBlackHole2 = ({
    size = 24,
    color = "#1f2937",
    stroke = 2,
    ...props
    }) => <Svg height={size} width={size} fill="none" viewBox="0 0 24 24" strokeWidth={stroke} xmlns="http://www.w3.org/2000/svg" {...props}>
	<circle cx="12" cy="12" r="2" stroke="black" strokeWidth="1.5"/>
	<Path d="M10.1418 10.3628C13.6876 6.81707 21.9137 15.6105 16.5242 21" opacity="0.5" stroke="black" strokeDasharray="2 2" strokeLinecap="round" strokeWidth="1.5"/>
	<Path d="M13.8582 13.6372C10.3124 17.1829 2.08634 8.38952 7.47584 3.00001" opacity="0.5" stroke="black" strokeDasharray="2 2" strokeLinecap="round" strokeWidth="1.5"/>
	<Path d="M10.3628 13.8579C6.81707 10.3122 15.6105 2.08609 21 7.4756" opacity="0.5" stroke="black" strokeDasharray="2 2" strokeLinecap="round" strokeWidth="1.5"/>
	<Path d="M13.6372 10.1421C17.1829 13.6878 8.38952 21.9139 3.00002 16.5244" opacity="0.5" stroke="black" strokeDasharray="2 2" strokeLinecap="round" strokeWidth="1.5"/>
</Svg>;

export default LineDuotoneAstronomyBlackHole2;
