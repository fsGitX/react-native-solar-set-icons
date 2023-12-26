import * as React from "react"
import Svg, { Path } from "react-native-svg";
    
const BrokenSafeCircle = ({
    size = 24,
    color = "#1f2937",
    stroke = 2,
    ...props
    }) => <Svg height={size} width={size} fill="none" viewBox="0 0 24 24" strokeWidth={stroke} xmlns="http://www.w3.org/2000/svg" {...props}>
	<Path d="M7 8L7 9M7 16L7 12" stroke="black" strokeLinecap="round" strokeWidth="1.5"/>
	<Path d="M12 12C12 10.8954 12.8954 10 14 10C15.1046 10 16 10.8954 16 12C16 13.1046 15.1046 14 14 14C12.8954 14 12 13.1046 12 12Z" stroke="black" strokeWidth="1.5"/>
	<Path d="M16 10L17 9" stroke="black" strokeLinecap="round" strokeWidth="1.5"/>
	<Path d="M11 15L12 14" stroke="black" strokeLinecap="round" strokeWidth="1.5"/>
	<Path d="M12 10L11 9" stroke="black" strokeLinecap="round" strokeWidth="1.5"/>
	<Path d="M17 15L16 14" stroke="black" strokeLinecap="round" strokeWidth="1.5"/>
	<Path d="M7 3.33782C8.47087 2.48697 10.1786 2 12 2C17.5228 2 22 6.47715 22 12C22 17.5228 17.5228 22 12 22C6.47715 22 2 17.5228 2 12C2 10.1786 2.48697 8.47087 3.33782 7" stroke="black" strokeLinecap="round" strokeWidth="1.5"/>
</Svg>;

export default BrokenSafeCircle;
