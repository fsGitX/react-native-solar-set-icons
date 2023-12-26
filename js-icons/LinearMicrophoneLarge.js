import * as React from "react"
import Svg, { Path } from "react-native-svg";
    
const LinearMicrophoneLarge = ({
    size = 24,
    color = "#1f2937",
    stroke = 2,
    ...props
    }) => <Svg height={size} width={size} fill="none" viewBox="0 0 24 24" strokeWidth={stroke} xmlns="http://www.w3.org/2000/svg" {...props}>
	<Path d="M6 8C6 4.68629 8.68629 2 12 2C15.3137 2 18 4.68629 18 8V13C18 16.3137 15.3137 19 12 19C8.68629 19 6 16.3137 6 13V8Z" stroke="black" strokeWidth="1.5"/>
	<Path d="M10 6.5C10 6.5 10.4727 6 12 6C13.5273 6 14 6.5 14 6.5" stroke="black" strokeLinecap="round" strokeWidth="1.5"/>
	<Path d="M10 9.5C10 9.5 10.4727 9 12 9C13.5273 9 14 9.5 14 9.5" stroke="black" strokeLinecap="round" strokeWidth="1.5"/>
	<Path d="M21 11V13C21 17.9706 16.9706 22 12 22C7.02944 22 3 17.9706 3 13V11" stroke="black" strokeLinecap="round" strokeWidth="1.5"/>
</Svg>;

export default LinearMicrophoneLarge;
