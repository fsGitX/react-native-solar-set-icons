import * as React from "react"
import Svg, { Path } from "react-native-svg";
    
const BrokenFacesFaceScanCircle = ({
    size = 24,
    color = "#1f2937",
    stroke = 2,
    ...props
    }) => <Svg height={size} width={size} fill="none" viewBox="0 0 24 24" strokeWidth={stroke} xmlns="http://www.w3.org/2000/svg" {...props}>
	<Path d="M9 16C9.85038 16.6303 10.8846 17 12 17C13.1154 17 14.1496 16.6303 15 16" stroke="black" strokeLinecap="round" strokeWidth="1.5"/>
	<Path d="M2.19995 10.0002C2.99533 6.08188 6.08174 2.99551 10.0001 2.2002" stroke="black" strokeLinecap="round" strokeWidth="1.5"/>
	<Path d="M2.2002 14C2.99557 17.9183 6.08198 21.0047 10.0003 21.8" stroke="black" strokeLinecap="round" strokeWidth="1.5"/>
	<Path d="M21.8001 10.0002C21.0047 6.08188 17.9183 2.99551 14 2.2002" stroke="black" strokeLinecap="round" strokeWidth="1.5"/>
	<Path d="M21.8001 14C21.0047 17.9183 17.9183 21.0047 14 21.8" stroke="black" strokeLinecap="round" strokeWidth="1.5"/>
	<ellipse cx="15" cy="10.5" fill={color} rx="1" ry="1.5"/>
	<ellipse cx="9" cy="10.5" fill={color} rx="1" ry="1.5"/>
</Svg>;

export default BrokenFacesFaceScanCircle;
