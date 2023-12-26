import * as React from "react"
import Svg, { Path } from "react-native-svg";
    
const LinearArrowsDoubleAltArrowLeft = ({
    size = 24,
    color = "#1f2937",
    stroke = 2,
    ...props
    }) => <Svg height={size} width={size} fill="none" viewBox="0 0 24 24" strokeWidth={stroke} xmlns="http://www.w3.org/2000/svg" {...props}>
	<Path d="M12.9999 19L6.99991 12L12.9999 5" stroke="black" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5"/>
	<Path d="M16.9998 19L10.9998 12L16.9998 5" stroke="black" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5"/>
</Svg>;

export default LinearArrowsDoubleAltArrowLeft;
