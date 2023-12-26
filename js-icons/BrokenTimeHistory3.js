import * as React from "react"
import Svg, { Path } from "react-native-svg";
    
const BrokenTimeHistory3 = ({
    size = 24,
    color = "#1f2937",
    stroke = 2,
    ...props
    }) => <Svg height={size} width={size} fill="none" viewBox="0 0 24 24" strokeWidth={stroke} xmlns="http://www.w3.org/2000/svg" {...props}>
	<Path d="M17 3.33782C15.5291 2.48697 13.8214 2 12 2C6.47715 2 2 6.47715 2 12C2 17.5228 6.47715 22 12 22C17.5228 22 22 17.5228 22 12C22 10.5778 21.7031 9.22492 21.1679 8" stroke="black" strokeDasharray="0.5 3.5" strokeLinecap="round" strokeWidth="1.5"/>
	<Path d="M22 12C22 10.1786 21.513 8.47087 20.6622 7M12 2C13.8214 2 15.5291 2.48697 17 3.33782" stroke="black" strokeLinecap="round" strokeWidth="1.5"/>
	<Path d="M12 9V13H16" stroke="black" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5"/>
</Svg>;

export default BrokenTimeHistory3;
