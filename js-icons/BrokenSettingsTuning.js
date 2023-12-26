import * as React from "react"
import Svg, { Path } from "react-native-svg";
    
const BrokenSettingsTuning = ({
    size = 24,
    color = "#1f2937",
    stroke = 2,
    ...props
    }) => <Svg height={size} width={size} fill="none" viewBox="0 0 24 24" strokeWidth={stroke} xmlns="http://www.w3.org/2000/svg" {...props}>
	<Path d="M14 14.5C14 12.8431 15.3431 11.5 17 11.5C18.6569 11.5 20 12.8431 20 14.5C20 16.1569 18.6569 17.5 17 17.5C15.3431 17.5 14 16.1569 14 14.5Z" stroke="black" strokeWidth="1.5"/>
	<Path d="M4 9.5C4 11.1569 5.34315 12.5 7 12.5C8.65685 12.5 10 11.1569 10 9.5C10 7.84315 8.65685 6.5 7 6.5C5.34315 6.5 4 7.84315 4 9.5Z" stroke="black" strokeWidth="1.5"/>
	<Path d="M7.00001 13L7 18M7.00001 21.0001L7.00001 22.0001" stroke="black" strokeLinecap="round" strokeWidth="1.5"/>
	<Path d="M17 11.0001L17 6.0001M17 3.00002L17 2" stroke="black" strokeLinecap="round" strokeWidth="1.5"/>
	<Path d="M17 22L17 18" stroke="black" strokeLinecap="round" strokeWidth="1.5"/>
	<Path d="M7 2L7 6" stroke="black" strokeLinecap="round" strokeWidth="1.5"/>
</Svg>;

export default BrokenSettingsTuning;
