import * as React from "react"
import Svg, { Path } from "react-native-svg";
    
const BrokenHamburgerMenu = ({
    size = 24,
    color = "#1f2937",
    stroke = 2,
    ...props
    }) => <Svg height={size} width={size} fill="none" viewBox="0 0 24 24" strokeWidth={stroke} xmlns="http://www.w3.org/2000/svg" {...props}>
	<Path d="M4 7L7 7M20 7L11 7" stroke="black" strokeLinecap="round" strokeWidth="1.5"/>
	<Path d="M20 17H17M4 17L13 17" stroke="black" strokeLinecap="round" strokeWidth="1.5"/>
	<Path d="M4 12H7L20 12" stroke="black" strokeLinecap="round" strokeWidth="1.5"/>
</Svg>;

export default BrokenHamburgerMenu;
