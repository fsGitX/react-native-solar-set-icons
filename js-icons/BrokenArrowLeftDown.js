import * as React from "react"
import Svg, { Path } from "react-native-svg";
    
const BrokenArrowLeftDown = ({
    size = 24,
    color = "#1f2937",
    stroke = 2,
    ...props
    }) => <Svg height={size} width={size} fill="none" viewBox="0 0 24 24" strokeWidth={stroke} xmlns="http://www.w3.org/2000/svg" {...props}>
	<Path d="M6 18H15M6 18V9M6 18L12.5 11.5M18 6L15.5 8.5" stroke="black" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5"/>
</Svg>;

export default BrokenArrowLeftDown;
