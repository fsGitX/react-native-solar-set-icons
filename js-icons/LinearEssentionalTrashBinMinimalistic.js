import * as React from "react"
import Svg, { Path } from "react-native-svg";
    
const LinearEssentionalTrashBinMinimalistic = ({
    size = 24,
    color = "#1f2937",
    stroke = 2,
    ...props
    }) => <Svg height={size} width={size} fill="none" viewBox="0 0 24 24" strokeWidth={stroke} xmlns="http://www.w3.org/2000/svg" {...props}>
	<Path d="M9.17065 4C9.58249 2.83481 10.6937 2 11.9999 2C13.3062 2 14.4174 2.83481 14.8292 4" stroke="black" strokeLinecap="round" strokeWidth="1.5"/>
	<Path d="M20.5 6H3.49988" stroke="black" strokeLinecap="round" strokeWidth="1.5"/>
	<Path d="M18.8333 8.5L18.3734 15.3991C18.1964 18.054 18.1079 19.3815 17.2429 20.1907C16.3778 21 15.0474 21 12.3866 21H11.6133C8.95248 21 7.62207 21 6.75707 20.1907C5.89206 19.3815 5.80356 18.054 5.62657 15.3991L5.16663 8.5" stroke="black" strokeLinecap="round" strokeWidth="1.5"/>
	<Path d="M9.5 11L10 16" stroke="black" strokeLinecap="round" strokeWidth="1.5"/>
	<Path d="M14.5 11L14 16" stroke="black" strokeLinecap="round" strokeWidth="1.5"/>
</Svg>;

export default LinearEssentionalTrashBinMinimalistic;