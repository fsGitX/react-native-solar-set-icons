import * as React from "react"
import Svg, { Path } from "react-native-svg";
    
const BrokenNotesDocumentsMinimalistic = ({
    size = 24,
    color = "#1f2937",
    stroke = 2,
    ...props
    }) => <Svg height={size} width={size} fill="none" viewBox="0 0 24 24" strokeWidth={stroke} xmlns="http://www.w3.org/2000/svg" {...props}>
	<Path d="M9 13H15" stroke="black" strokeLinecap="round" strokeWidth="1.5"/>
	<Path d="M9 9H15" stroke="black" strokeLinecap="round" strokeWidth="1.5"/>
	<Path d="M9 17H12" stroke="black" strokeLinecap="round" strokeWidth="1.5"/>
	<Path d="M2 19V5" stroke="black" strokeLinecap="round" strokeWidth="1.5"/>
	<Path d="M22 19V5" stroke="black" strokeLinecap="round" strokeWidth="1.5"/>
	<Path d="M19 16C19 18.8284 19 20.2426 18.1213 21.1213C17.2426 22 15.8284 22 13 22H11C8.17157 22 6.75736 22 5.87868 21.1213C5 20.2426 5 18.8284 5 16V12M5 8C5 5.17157 5 3.75736 5.87868 2.87868C6.75736 2 8.17157 2 11 2H13C15.8284 2 17.2426 2 18.1213 2.87868C19 3.75736 19 5.17157 19 8V12" stroke="black" strokeLinecap="round" strokeWidth="1.5"/>
</Svg>;

export default BrokenNotesDocumentsMinimalistic;
