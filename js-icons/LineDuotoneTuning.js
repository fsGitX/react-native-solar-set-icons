import * as React from "react"
import Svg, { Path } from "react-native-svg";
    
const LineDuotoneTuning = ({
    size = 24,
    color = "#1f2937",
    stroke = 2,
    ...props
    }) => <Svg height={size} width={size} fill="none" viewBox="0 0 24 24" strokeWidth={stroke} xmlns="http://www.w3.org/2000/svg" {...props}>
	<Path d="M10 9.5C10 11.1569 8.65685 12.5 7 12.5C5.34315 12.5 4 11.1569 4 9.5C4 7.84315 5.34315 6.5 7 6.5C8.65685 6.5 10 7.84315 10 9.5Z" stroke="black" strokeWidth="1.5"/>
	<Path d="M20 14.5C20 12.8431 18.6569 11.5 17 11.5C15.3431 11.5 14 12.8431 14 14.5C14 16.1569 15.3431 17.5 17 17.5C18.6569 17.5 20 16.1569 20 14.5Z" stroke="black" strokeWidth="1.5"/>
	<Path d="M17 11L17.0415 2M7 2L7 6" opacity="0.5" stroke="black" strokeLinecap="round" strokeWidth="1.5"/>
	<Path d="M7 13L7 22M17 22V18" opacity="0.5" stroke="black" strokeLinecap="round" strokeWidth="1.5"/>
</Svg>;

export default LineDuotoneTuning;
