import * as React from "react"
import Svg, { Path } from "react-native-svg";
    
const LinearUploadTrack2 = ({
    size = 24,
    color = "#1f2937",
    stroke = 2,
    ...props
    }) => <Svg height={size} width={size} fill="none" viewBox="0 0 24 24" strokeWidth={stroke} xmlns="http://www.w3.org/2000/svg" {...props}>
	<Path d="M13 15V11V7" stroke="black" strokeLinecap="round" strokeWidth="1.5"/>
	<Path d="M16 10C14.3431 10 13 8.65685 13 7" stroke="black" strokeLinecap="round" strokeWidth="1.5"/>
	<Path d="M14 21.8C13.3538 21.9311 12.6849 22 12 22C6.47715 22 2 17.5228 2 12C2 6.47715 6.47715 2 12 2C17.5228 2 22 6.47715 22 12C22 12.6849 21.9311 13.3538 21.8 14" stroke="black" strokeLinecap="round" strokeWidth="1.5"/>
	<Path d="M18 22V15M18 15L20.5 17.5M18 15L15.5 17.5" stroke="black" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5"/>
	<circle cx="11" cy="15" r="2" stroke="black" strokeWidth="1.5"/>
</Svg>;

export default LinearUploadTrack2;
