import * as React from "react"
import Svg, { Path } from "react-native-svg";
    
const LineDuotoneHomeSofa3 = ({
    size = 24,
    color = "#1f2937",
    stroke = 2,
    ...props
    }) => <Svg height={size} width={size} fill="none" viewBox="0 0 24 24" strokeWidth={stroke} xmlns="http://www.w3.org/2000/svg" {...props}>
	<Path d="M4 18H20C21.1046 18 22 17.1046 22 16C22 14.8954 21.1046 14 20 14H4C2.89543 14 2 14.8954 2 16C2 17.1046 2.89543 18 4 18Z" stroke="black" strokeWidth="1.5"/>
	<Path d="M4.49993 14L4.42528 13.7014C3.33845 9.35409 2.79504 7.18043 3.86584 5.67821C3.93339 5.58345 4.00504 5.49169 4.08059 5.40317C5.27824 4 7.5188 4 11.9999 4C16.4811 4 18.7216 4 19.9193 5.40317C19.9948 5.49169 20.0665 5.58345 20.134 5.67821C21.2048 7.18043 20.6614 9.35409 19.5746 13.7014L19.4999 14" opacity="0.5" stroke="black" strokeWidth="1.5"/>
	<Path d="M20 20V18M4 20V18" opacity="0.5" stroke="black" strokeLinecap="round" strokeWidth="1.5"/>
</Svg>;

export default LineDuotoneHomeSofa3;
