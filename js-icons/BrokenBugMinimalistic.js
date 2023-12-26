import * as React from "react"
import Svg, { Path } from "react-native-svg";
    
const BrokenBugMinimalistic = ({
    size = 24,
    color = "#1f2937",
    stroke = 2,
    ...props
    }) => <Svg height={size} width={size} fill="none" viewBox="0 0 24 24" strokeWidth={stroke} xmlns="http://www.w3.org/2000/svg" {...props}>
	<Path d="M12 22C8.13401 22 5 18.866 5 15V10C5 6.13401 8.13401 3 12 3C15.866 3 19 6.13401 19 10V15C19 16.9587 18.1955 18.7295 16.899 20" stroke="black" strokeLinecap="round" strokeWidth="1.5"/>
	<Path d="M19 13H22" stroke="black" strokeLinecap="round" strokeWidth="1.5"/>
	<Path d="M5 13H2" stroke="black" strokeLinecap="round" strokeWidth="1.5"/>
	<Path d="M20.4999 7L18.7021 7.71909" stroke="black" strokeLinecap="round" strokeWidth="1.5"/>
	<Path d="M3.50012 7L5.29785 7.71909" stroke="black" strokeLinecap="round" strokeWidth="1.5"/>
	<Path d="M14.5 3.5L17 2" stroke="black" strokeLinecap="round" strokeWidth="1.5"/>
	<Path d="M9.5 3.5L7 2" stroke="black" strokeLinecap="round" strokeWidth="1.5"/>
	<Path d="M20.5 19.0002L18.5 18.2002" stroke="black" strokeLinecap="round" strokeWidth="1.5"/>
	<Path d="M3.5 19.0002L5.5 18.2002" stroke="black" strokeLinecap="round" strokeWidth="1.5"/>
	<Path d="M10.5 10.5H13.5" stroke="black" strokeLinecap="round" strokeWidth="1.5"/>
	<Path d="M10.5 15.5H13.5" stroke="black" strokeLinecap="round" strokeWidth="1.5"/>
</Svg>;

export default BrokenBugMinimalistic;
