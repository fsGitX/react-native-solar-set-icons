import * as React from "react"
import Svg, { Path } from "react-native-svg";
    
const BrokenHomeSmartVacuumCleaner2 = ({
    size = 24,
    color = "#1f2937",
    stroke = 2,
    ...props
    }) => <Svg height={size} width={size} fill="none" viewBox="0 0 24 24" strokeWidth={stroke} xmlns="http://www.w3.org/2000/svg" {...props}>
	<Path d="M15 9C15 7.34315 13.6569 6 12 6C10.3431 6 9 7.34315 9 9C9 10.6569 10.3431 12 12 12" stroke="black" strokeLinecap="round" strokeWidth="1.5"/>
	<Path d="M12 18V16" stroke="black" strokeLinecap="round" strokeWidth="1.5"/>
	<Path d="M2 22L4.5 19.5" stroke="black" strokeLinecap="round" strokeWidth="1.5"/>
	<Path d="M22 22L19.5 19.5" stroke="black" strokeLinecap="round" strokeWidth="1.5"/>
	<Path d="M7 3.33782C8.47087 2.48697 10.1786 2 12 2C17.5228 2 22 6.47715 22 12C22 17.5228 17.5228 22 12 22C6.47715 22 2 17.5228 2 12C2 10.1786 2.48697 8.47087 3.33782 7" stroke="black" strokeLinecap="round" strokeWidth="1.5"/>
</Svg>;

export default BrokenHomeSmartVacuumCleaner2;
