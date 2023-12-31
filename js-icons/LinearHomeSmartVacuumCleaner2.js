import * as React from "react"
import Svg, { Path } from "react-native-svg";
    
const LinearHomeSmartVacuumCleaner2 = ({
    size = 24,
    color = "#1f2937",
    stroke = 2,
    ...props
    }) => <Svg height={size} width={size} fill="none" viewBox="0 0 24 24" strokeWidth={stroke} xmlns="http://www.w3.org/2000/svg" {...props}>
	<Path d="M22 12C22 17.5228 17.5228 22 12 22C6.47715 22 2 17.5228 2 12C2 6.47715 6.47715 2 12 2C17.5228 2 22 6.47715 22 12Z" stroke="black" strokeWidth="1.5"/>
	<Path d="M15 9C15 10.6569 13.6569 12 12 12C10.3431 12 9 10.6569 9 9C9 7.34315 10.3431 6 12 6C13.6569 6 15 7.34315 15 9Z" stroke="black" strokeWidth="1.5"/>
	<Path d="M12 18V16" stroke="black" strokeLinecap="round" strokeWidth="1.5"/>
	<Path d="M2 22L4.5 19.5" stroke="black" strokeLinecap="round" strokeWidth="1.5"/>
	<Path d="M22 22L19.5 19.5" stroke="black" strokeLinecap="round" strokeWidth="1.5"/>
</Svg>;

export default LinearHomeSmartVacuumCleaner2;
