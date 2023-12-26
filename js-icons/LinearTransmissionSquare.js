import * as React from "react"
import Svg, { Path } from "react-native-svg";
    
const LinearTransmissionSquare = ({
    size = 24,
    color = "#1f2937",
    stroke = 2,
    ...props
    }) => <Svg height={size} width={size} fill="none" viewBox="0 0 24 24" strokeWidth={stroke} xmlns="http://www.w3.org/2000/svg" {...props}>
	<Path d="M8 9V15" stroke="#1C274C" strokeLinecap="round" strokeWidth="1.5"/>
	<Path d="M12 9V15" stroke="#1C274C" strokeLinecap="round" strokeWidth="1.5"/>
	<Path d="M8 12H13C13.9319 12 14.3978 12 14.7654 11.8478C15.2554 11.6448 15.6448 11.2554 15.8478 10.7654C16 10.3978 16 9.93188 16 9" stroke="#1C274C" strokeLinecap="round" strokeWidth="1.5"/>
	<rect height="20" width="20" rx="5" stroke="#1C274C" strokeWidth="1.5" x="2" y="2"/>
</Svg>;

export default LinearTransmissionSquare;
