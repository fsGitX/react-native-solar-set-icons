import * as React from "react"
import Svg, { Path } from "react-native-svg";
    
const BrokenCallRecordMinimalistic = ({
    size = 24,
    color = "#1f2937",
    stroke = 2,
    ...props
    }) => <Svg height={size} width={size} fill="none" viewBox="0 0 24 24" strokeWidth={stroke} xmlns="http://www.w3.org/2000/svg" {...props}>
	<Path d="M21 11.5C21 13.433 19.433 15 17.5 15C15.567 15 14 13.433 14 11.5C14 9.567 15.567 8 17.5 8" stroke="black" strokeLinecap="round" strokeWidth="1.5"/>
	<Path d="M10 11.5C10 13.433 8.433 15 6.5 15C4.567 15 3 13.433 3 11.5C3 9.567 4.567 8 6.5 8C8.433 8 10 9.567 10 11.5Z" stroke="black" strokeWidth="1.5"/>
	<Path d="M6.5 15H17.5" stroke="black" strokeLinecap="round" strokeWidth="1.5"/>
</Svg>;

export default BrokenCallRecordMinimalistic;
