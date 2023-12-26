import * as React from "react"
import Svg, { Path } from "react-native-svg";
    
const LinearVideoQuitFullScreen = ({
    size = 24,
    color = "#1f2937",
    stroke = 2,
    ...props
    }) => <Svg height={size} width={size} fill="none" viewBox="0 0 24 24" strokeWidth={stroke} xmlns="http://www.w3.org/2000/svg" {...props}>
	<Path d="M14 22C14 18.2288 14 16.3431 15.1716 15.1716C16.3431 14 18.2288 14 22 14" stroke="black" strokeLinecap="round" strokeWidth="1.5"/>
	<Path d="M2 14C5.77124 14 7.65685 14 8.82843 15.1716C10 16.3431 10 18.2288 10 22" stroke="black" strokeLinecap="round" strokeWidth="1.5"/>
	<Path d="M2 10C5.77124 10 7.65685 10 8.82843 8.82843C10 7.65685 10 5.77124 10 2" stroke="black" strokeLinecap="round" strokeWidth="1.5"/>
	<Path d="M22 10C18.2288 10 16.3431 10 15.1716 8.82843C14 7.65685 14 5.77124 14 2" stroke="black" strokeLinecap="round" strokeWidth="1.5"/>
</Svg>;

export default LinearVideoQuitFullScreen;
