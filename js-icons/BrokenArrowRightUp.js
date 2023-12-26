import * as React from "react"
import Svg, { Path } from "react-native-svg";
    
const BrokenArrowRightUp = ({
    size = 24,
    color = "#1f2937",
    stroke = 2,
    ...props
    }) => <Svg height={size} width={size} fill="none" viewBox="0 0 24 24" strokeWidth={stroke} xmlns="http://www.w3.org/2000/svg" {...props}>
	<Path d="M6 18L8.5 15.5M18 6H9M18 6V15M18 6L11.5 12.5" stroke="black" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5"/>
</Svg>;

export default BrokenArrowRightUp;
