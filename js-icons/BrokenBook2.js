import * as React from "react"
import Svg, { Path } from "react-native-svg";
    
const BrokenBook2 = ({
    size = 24,
    color = "#1f2937",
    stroke = 2,
    ...props
    }) => <Svg height={size} width={size} fill="none" viewBox="0 0 24 24" strokeWidth={stroke} xmlns="http://www.w3.org/2000/svg" {...props}>
	<Path d="M19.8978 16H7.89778C6.96781 16 6.50282 16 6.12132 16.1022C5.08604 16.3796 4.2774 17.1883 4 18.2235" stroke="black" strokeWidth="1.5"/>
	<Path d="M8 7H16" stroke="black" strokeLinecap="round" strokeWidth="1.5"/>
	<Path d="M8 10.5H13" stroke="black" strokeLinecap="round" strokeWidth="1.5"/>
	<Path d="M19.5 19H8" stroke="black" strokeLinecap="round" strokeWidth="1.5"/>
	<Path d="M10 22C7.17157 22 5.75736 22 4.87868 21.1213C4 20.2426 4 18.8284 4 16V8C4 5.17157 4 3.75736 4.87868 2.87868C5.75736 2 7.17157 2 10 2H14C16.8284 2 18.2426 2 19.1213 2.87868C20 3.75736 20 5.17157 20 8M14 22C16.8284 22 18.2426 22 19.1213 21.1213C20 20.2426 20 18.8284 20 16V12" stroke="black" strokeLinecap="round" strokeWidth="1.5"/>
</Svg>;

export default BrokenBook2;
