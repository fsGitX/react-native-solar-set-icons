import * as React from "react"
import Svg, { Path } from "react-native-svg";
    
const BrokenElectronicMonitor = ({
    size = 24,
    color = "#1f2937",
    stroke = 2,
    ...props
    }) => <Svg height={size} width={size} fill="none" viewBox="0 0 24 24" strokeWidth={stroke} xmlns="http://www.w3.org/2000/svg" {...props}>
	<Path d="M5 2.25201C4.2255 2.4206 3.64118 2.70197 3.17157 3.17157C2 4.34315 2 6.22876 2 10V11C2 13.8284 2 15.2426 2.87868 16.1213C3.75736 17 5.17157 17 8 17H16C18.8284 17 20.2426 17 21.1213 16.1213C22 15.2426 22 13.8284 22 11V10C22 6.22876 22 4.34315 20.8284 3.17157C19.6569 2 17.7712 2 14 2H10C9.65081 2 9.31779 2 9 2.00093" stroke="black" strokeLinecap="round" strokeWidth="1.5"/>
	<Path d="M16 22H8" stroke="black" strokeLinecap="round" strokeWidth="1.5"/>
	<Path d="M12 17L12 22" stroke="black" strokeLinecap="round" strokeWidth="1.5"/>
	<Path d="M22 13H16M2 13H12" stroke="black" strokeLinecap="round" strokeWidth="1.5"/>
</Svg>;

export default BrokenElectronicMonitor;