import * as React from "react"
import Svg, { Path } from "react-native-svg";
    
const LinearEssentionalHelp = ({
    size = 24,
    color = "#1f2937",
    stroke = 2,
    ...props
    }) => <Svg height={size} width={size} fill="none" viewBox="0 0 24 24" strokeWidth={stroke} xmlns="http://www.w3.org/2000/svg" {...props}>
	<circle cx="12" cy="12" r="10" stroke="black" strokeWidth="1.5"/>
	<circle cx="12" cy="12" r="4" stroke="black" strokeWidth="1.5"/>
	<Path d="M15 9L19 5" stroke="black" strokeWidth="1.5"/>
	<Path d="M5 19L9 15" stroke="black" strokeWidth="1.5"/>
	<Path d="M9 9L5 5" stroke="black" strokeWidth="1.5"/>
	<Path d="M19 19L15 15" stroke="black" strokeWidth="1.5"/>
</Svg>;

export default LinearEssentionalHelp;
