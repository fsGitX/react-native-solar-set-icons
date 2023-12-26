import * as React from "react"
import Svg, { Path } from "react-native-svg";
    
const LinearUserSpeak = ({
    size = 24,
    color = "#1f2937",
    stroke = 2,
    ...props
    }) => <Svg height={size} width={size} fill="none" viewBox="0 0 24 24" strokeWidth={stroke} xmlns="http://www.w3.org/2000/svg" {...props}>
	<circle cx="10" cy="6" r="4" stroke="black" strokeWidth="1.5"/>
	<Path d="M18 17.5C18 19.9853 18 22 10 22C2 22 2 19.9853 2 17.5C2 15.0147 5.58172 13 10 13C14.4183 13 18 15.0147 18 17.5Z" stroke="black" strokeWidth="1.5"/>
	<Path d="M19 2C19 2 21 3.2 21 6C21 8.8 19 10 19 10" stroke="black" strokeLinecap="round" strokeWidth="1.5"/>
	<Path d="M17 4C17 4 18 4.6 18 6C18 7.4 17 8 17 8" stroke="black" strokeLinecap="round" strokeWidth="1.5"/>
</Svg>;

export default LinearUserSpeak;
