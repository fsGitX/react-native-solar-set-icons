import * as React from "react"
import Svg, { Path } from "react-native-svg";
    
const LinearGarage = ({
    size = 24,
    color = "#1f2937",
    stroke = 2,
    ...props
    }) => <Svg height={size} width={size} fill="none" viewBox="0 0 24 24" strokeWidth={stroke} xmlns="http://www.w3.org/2000/svg" {...props}>
	<Path d="M22 22L2 22" stroke="#1C274C" strokeLinecap="round" strokeWidth="1.5"/>
	<Path d="M3 22.0001V11.3472C3 10.4903 3.36644 9.67432 4.00691 9.10502L10.0069 3.77169C11.1436 2.76133 12.8564 2.76133 13.9931 3.77169L19.9931 9.10502C20.6336 9.67432 21 10.4903 21 11.3472V22.0001" stroke="#1C274C" strokeLinecap="round" strokeWidth="1.5"/>
	<Path d="M10 9H14" stroke="#1C274C" strokeLinecap="round" strokeWidth="1.5"/>
	<Path d="M9 15.5H15" stroke="#1C274C" strokeLinecap="round" strokeWidth="1.5"/>
	<Path d="M9 18.5H15" stroke="#1C274C" strokeLinecap="round" strokeWidth="1.5"/>
	<Path d="M18 22V16C18 14.1144 18 13.1716 17.4142 12.5858C16.8284 12 15.8856 12 14 12H10C8.11438 12 7.17157 12 6.58579 12.5858C6 13.1716 6 14.1144 6 16V22" stroke="#1C274C" strokeWidth="1.5"/>
</Svg>;

export default LinearGarage;
