import * as React from "react"
import Svg, { Path } from "react-native-svg";
    
const LinearEuro = ({
    size = 24,
    color = "#1f2937",
    stroke = 2,
    ...props
    }) => <Svg height={size} width={size} fill="none" viewBox="0 0 24 24" strokeWidth={stroke} xmlns="http://www.w3.org/2000/svg" {...props}>
	<circle cx="12" cy="12" r="10" stroke="black" strokeWidth="1.5"/>
	<Path d="M15 6.80269C14.1175 6.29218 13.0929 6 12 6C8.68629 6 6 8.68629 6 12C6 15.3137 8.68629 18 12 18C13.0929 18 14.1175 17.7078 15 17.1973" stroke="black" strokeLinecap="round" strokeWidth="1.5"/>
	<Path d="M5 10.5H10" stroke="black" strokeLinecap="round" strokeWidth="1.5"/>
	<Path d="M5 13.5H10" stroke="black" strokeLinecap="round" strokeWidth="1.5"/>
</Svg>;

export default LinearEuro;
