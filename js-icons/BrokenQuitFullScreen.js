import * as React from "react"
import Svg, { Path } from "react-native-svg";
    
const BrokenQuitFullScreen = ({
    size = 24,
    color = "#1f2937",
    stroke = 2,
    ...props
    }) => <Svg height={size} width={size} fill="none" viewBox="0 0 24 24" strokeWidth={stroke} xmlns="http://www.w3.org/2000/svg" {...props}>
	<Path d="M2 14C5.77124 14 7.65685 14 8.82843 15.1716C10 16.3431 10 18.2288 10 22" stroke="black" strokeLinecap="round" strokeWidth="1.5"/>
	<Path d="M2 10C3.16976 10 4.15811 10 5 9.96504M10 2C10 5.77124 10 7.65685 8.82843 8.82843" stroke="black" strokeLinecap="round" strokeWidth="1.5"/>
	<Path d="M14 22C14 18.2288 14 16.3431 15.1716 15.1716M22 14C20.8302 14 19.8419 14 19 14.035" stroke="black" strokeLinecap="round" strokeWidth="1.5"/>
	<Path d="M22 10C18.2288 10 16.3431 10 15.1716 8.82843C14 7.65685 14 5.77124 14 2" stroke="black" strokeLinecap="round" strokeWidth="1.5"/>
</Svg>;

export default BrokenQuitFullScreen;
