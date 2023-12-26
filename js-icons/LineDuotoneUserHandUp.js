import * as React from "react"
import Svg, { Path } from "react-native-svg";
    
const LineDuotoneUserHandUp = ({
    size = 24,
    color = "#1f2937",
    stroke = 2,
    ...props
    }) => <Svg height={size} width={size} fill="none" viewBox="0 0 24 24" strokeWidth={stroke} xmlns="http://www.w3.org/2000/svg" {...props}>
	<Path d="M20 21.5L19.3505 15.9795C19.1506 14.2804 17.7107 13 16 13H8C5 13 3.06717 10.2687 2.38197 7.52787L2 6" stroke="black" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5"/>
	<Path d="M8 13V18C8 19.8856 8 20.8284 8.58579 21.4142C9.17157 22 10.1144 22 12 22C13.8856 22 14.8284 22 15.4142 21.4142C16 20.8284 16 19.8856 16 18V13" opacity="0.5" stroke="black" strokeLinecap="round" strokeWidth="1.5"/>
	<circle cx="12" cy="6" opacity="0.9" r="4" stroke="black" strokeWidth="1.5"/>
</Svg>;

export default LineDuotoneUserHandUp;
