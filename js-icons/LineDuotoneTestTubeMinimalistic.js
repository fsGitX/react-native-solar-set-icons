import * as React from "react"
import Svg, { Path } from "react-native-svg";
    
const LineDuotoneTestTubeMinimalistic = ({
    size = 24,
    color = "#1f2937",
    stroke = 2,
    ...props
    }) => <Svg height={size} width={size} fill="none" viewBox="0 0 24 24" strokeWidth={stroke} xmlns="http://www.w3.org/2000/svg" {...props}>
	<Path d="M21 9.84867L14.1815 3M14.8635 3.68504L20.2387 9.08398L13 16.3547L9.48838 19.8818C8.00407 21.3727 5.59754 21.3727 4.11323 19.8818C2.62892 18.391 2.62892 15.9738 4.11323 14.4829L14.8635 3.68504Z" stroke="black" strokeLinecap="round" strokeWidth="1.5"/>
	<Path d="M6.80078 11.7834L8.075 11.9257C9.0977 12.0398 9.90504 12.8507 10.0187 13.8779C10.1062 14.6689 10.6104 15.3515 11.3386 15.665L13 16.3547" opacity="0.5" stroke="black" strokeLinecap="round" strokeWidth="1.5"/>
</Svg>;

export default LineDuotoneTestTubeMinimalistic;
