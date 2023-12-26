import * as React from "react"
import Svg, { Path } from "react-native-svg";
    
const BrokenLinkMinimalistic = ({
    size = 24,
    color = "#1f2937",
    stroke = 2,
    ...props
    }) => <Svg height={size} width={size} fill="none" viewBox="0 0 24 24" strokeWidth={stroke} xmlns="http://www.w3.org/2000/svg" {...props}>
	<Path d="M8.99991 11.9999H14.9999" stroke="black" strokeLinecap="round" strokeWidth="1.5"/>
	<Path d="M9 18H8C4.68629 18 2 15.3137 2 12C2 8.68629 4.68629 6 8 6H9" stroke="black" strokeLinecap="round" strokeWidth="1.5"/>
	<Path d="M15 6H16C19.3137 6 22 8.68629 22 12M15 18H16C17.2267 18 18.3675 17.6318 19.3178 17" stroke="black" strokeLinecap="round" strokeWidth="1.5"/>
</Svg>;

export default BrokenLinkMinimalistic;
