import * as React from "react"
import Svg, { Path } from "react-native-svg";
    
const LinearSettingsTuning = ({
    size = 24,
    color = "#1f2937",
    stroke = 2,
    ...props
    }) => <Svg height={size} width={size} fill="none" viewBox="0 0 24 24" strokeWidth={stroke} xmlns="http://www.w3.org/2000/svg" {...props}>
	<Path d="M14 14.5C14 12.8431 15.3431 11.5 17 11.5C18.6568 11.5 20 12.8431 20 14.5C20 16.1569 18.6568 17.5 17 17.5C15.3431 17.5 14 16.1569 14 14.5Z" stroke="black" strokeWidth="1.5"/>
	<Path d="M3.99998 9.5C3.99998 11.1569 5.34312 12.5 6.99998 12.5C8.65683 12.5 9.99998 11.1569 9.99998 9.5C9.99998 7.84315 8.65683 6.5 6.99998 6.5C5.34312 6.5 3.99998 7.84315 3.99998 9.5Z" stroke="black" strokeWidth="1.5"/>
	<Path d="M16.9585 9L16.9585 2" stroke="black" strokeLinecap="round" strokeWidth="1.5"/>
	<Path d="M6.9585 15L6.9585 22" stroke="black" strokeLinecap="round" strokeWidth="1.5"/>
	<Path d="M16.9585 22L16.9585 20" stroke="black" strokeLinecap="round" strokeWidth="1.5"/>
	<Path d="M6.9585 2L6.9585 4" stroke="black" strokeLinecap="round" strokeWidth="1.5"/>
</Svg>;

export default LinearSettingsTuning;