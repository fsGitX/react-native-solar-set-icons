import * as React from "react"
import Svg, { Path } from "react-native-svg";
    
const BrokenSkateboard = ({
    size = 24,
    color = "#1f2937",
    stroke = 2,
    ...props
    }) => <Svg height={size} width={size} fill="none" viewBox="0 0 24 24" strokeWidth={stroke} xmlns="http://www.w3.org/2000/svg" {...props}>
	<Path d="M2 7L2.81253 8.2188C3.5544 9.3316 4.80332 10 6.14073 10H12M22 7L21.1875 8.2188C20.4456 9.33159 19.1967 10 17.8593 10H16" stroke="black" strokeLinecap="round" strokeWidth="1.5"/>
	<circle cx="7" cy="15" r="2" stroke="black" strokeWidth="1.5"/>
	<circle cx="17" cy="15" r="2" stroke="black" strokeWidth="1.5"/>
</Svg>;

export default BrokenSkateboard;
