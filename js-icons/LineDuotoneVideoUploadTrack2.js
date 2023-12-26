import * as React from "react"
import Svg, { Path } from "react-native-svg";
    
const LineDuotoneVideoUploadTrack2 = ({
    size = 24,
    color = "#1f2937",
    stroke = 2,
    ...props
    }) => <Svg height={size} width={size} fill="none" viewBox="0 0 24 24" strokeWidth={stroke} xmlns="http://www.w3.org/2000/svg" {...props}>
	<Path d="M13 15V11V7" stroke="black" strokeLinecap="round" strokeWidth="1.5"/>
	<Path d="M16 10C14.3431 10 13 8.65685 13 7" stroke="black" strokeLinecap="round" strokeWidth="1.5"/>
	<Path d="M18 22V15M18 15L20.5 17.5M18 15L15.5 17.5" stroke="black" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5"/>
	<circle cx="11" cy="15" r="2" stroke="black" strokeWidth="1.5"/>
	<circle cx="12" cy="12" opacity="0.5" r="10" stroke="black" strokeWidth="1.5"/>
</Svg>;

export default LineDuotoneVideoUploadTrack2;
