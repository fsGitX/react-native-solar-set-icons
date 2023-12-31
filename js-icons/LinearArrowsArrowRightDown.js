import * as React from "react"
import Svg, { Path } from "react-native-svg";
    
const LinearArrowsArrowRightDown = ({
    size = 24,
    color = "#1f2937",
    stroke = 2,
    ...props
    }) => <Svg height={size} width={size} fill="none" viewBox="0 0 24 24" strokeWidth={stroke} xmlns="http://www.w3.org/2000/svg" {...props}>
	<Path d="M6 6L18 18M18 18L18 9M18 18L9 18" stroke="black" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5"/>
</Svg>;

export default LinearArrowsArrowRightDown;
