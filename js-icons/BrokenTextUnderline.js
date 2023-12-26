import * as React from "react"
import Svg, { Path } from "react-native-svg";
    
const BrokenTextUnderline = ({
    size = 24,
    color = "#1f2937",
    stroke = 2,
    ...props
    }) => <Svg height={size} width={size} fill="none" viewBox="0 0 24 24" strokeWidth={stroke} xmlns="http://www.w3.org/2000/svg" {...props}>
	<Path d="M4 21H20" stroke="black" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5"/>
	<Path d="M4 3V9C4 11.5264 5.17108 13.7792 7 15.2454M20 3V9C20 13.4183 16.4183 17 12 17" stroke="black" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5"/>
</Svg>;

export default BrokenTextUnderline;
