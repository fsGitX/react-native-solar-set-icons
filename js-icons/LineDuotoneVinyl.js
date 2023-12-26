import * as React from "react"
import Svg, { Path } from "react-native-svg";
    
const LineDuotoneVinyl = ({
    size = 24,
    color = "#1f2937",
    stroke = 2,
    ...props
    }) => <Svg height={size} width={size} fill="none" viewBox="0 0 24 24" strokeWidth={stroke} xmlns="http://www.w3.org/2000/svg" {...props}>
	<circle cx="12" cy="12" r="3" stroke="black" strokeWidth="1.5"/>
	<Path d="M21.9506 13.0004C21.4489 18.0538 17.1853 22.0004 12 22.0004C6.47715 22.0004 2 17.5233 2 12.0004C2 6.81508 5.94668 2.55153 11 2.0498" opacity="0.5" stroke="black" strokeLinecap="round" strokeWidth="1.5"/>
	<Path d="M15 2.45703C18.1101 3.43385 20.5654 5.88916 21.5422 8.99923" stroke="black" strokeLinecap="round" strokeWidth="1.5"/>
	<Path d="M15 11.9992V2.45703" stroke="black" strokeLinecap="round" strokeWidth="1.5"/>
</Svg>;

export default LineDuotoneVinyl;
