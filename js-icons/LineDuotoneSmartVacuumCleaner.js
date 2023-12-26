import * as React from "react"
import Svg, { Path } from "react-native-svg";
    
const LineDuotoneSmartVacuumCleaner = ({
    size = 24,
    color = "#1f2937",
    stroke = 2,
    ...props
    }) => <Svg height={size} width={size} fill="none" viewBox="0 0 24 24" strokeWidth={stroke} xmlns="http://www.w3.org/2000/svg" {...props}>
	<Path d="M22 12C22 17.5228 17.5228 22 12 22C6.47715 22 2 17.5228 2 12C2 6.47715 6.47715 2 12 2C17.5228 2 22 6.47715 22 12Z" stroke="black" strokeWidth="1.5"/>
	<Path d="M15 9C15 10.6569 13.6569 12 12 12C10.3431 12 9 10.6569 9 9C9 7.34315 10.3431 6 12 6C13.6569 6 15 7.34315 15 9Z" stroke="black" strokeWidth="1.5"/>
	<Path d="M16.5 20.7361C17.0308 21.2111 17.7316 21.5 18.5 21.5C20.1569 21.5 21.5 20.1569 21.5 18.5C21.5 17.7316 21.2111 17.0308 20.7361 16.5" opacity="0.5" stroke="black" strokeWidth="1.5"/>
	<Path d="M7.49951 20.7361C6.96876 21.2111 6.26787 21.5 5.49951 21.5C3.84266 21.5 2.49951 20.1569 2.49951 18.5C2.49951 17.7316 2.78837 17.0308 3.26341 16.5" opacity="0.5" stroke="black" strokeWidth="1.5"/>
	<Path d="M12 18V16" opacity="0.5" stroke="black" strokeLinecap="round" strokeWidth="1.5"/>
</Svg>;

export default LineDuotoneSmartVacuumCleaner;
