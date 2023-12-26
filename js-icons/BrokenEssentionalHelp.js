import * as React from "react"
import Svg, { Path } from "react-native-svg";
    
const BrokenEssentionalHelp = ({
    size = 24,
    color = "#1f2937",
    stroke = 2,
    ...props
    }) => <Svg height={size} width={size} fill="none" viewBox="0 0 24 24" strokeWidth={stroke} xmlns="http://www.w3.org/2000/svg" {...props}>
	<circle cx="12" cy="12" r="4" stroke="black" strokeWidth="1.5"/>
	<Path d="M15 9L19 5" stroke="black" strokeWidth="1.5"/>
	<Path d="M5 19L9 15" stroke="black" strokeWidth="1.5"/>
	<Path d="M9 9L5 5" stroke="black" strokeWidth="1.5"/>
	<Path d="M19 19L15 15" stroke="black" strokeWidth="1.5"/>
	<Path d="M9.41235 2.33886C11.0533 1.89769 12.8289 1.8693 14.5882 2.34072C19.9229 3.77014 23.0887 9.25351 21.6593 14.5882C20.2299 19.9228 14.7465 23.0887 9.41185 21.6592C4.07719 20.2298 0.911364 14.7465 2.34078 9.41179C2.8122 7.65242 3.72457 6.12895 4.92711 4.92841" stroke="black" strokeLinecap="round" strokeWidth="1.5"/>
</Svg>;

export default BrokenEssentionalHelp;
