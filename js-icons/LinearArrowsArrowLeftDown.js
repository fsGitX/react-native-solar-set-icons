import * as React from "react"
import Svg, { Path } from "react-native-svg";
    
const LinearArrowsArrowLeftDown = ({
    size = 24,
    color = "#1f2937",
    stroke = 2,
    ...props
    }) => <Svg height={size} width={size} fill="none" viewBox="0 0 24 24" strokeWidth={stroke} xmlns="http://www.w3.org/2000/svg" {...props}>
	<Path d="M18 6L6 18M6 18L6 9M6 18L15 18" stroke="black" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5"/>
</Svg>;

export default LinearArrowsArrowLeftDown;
