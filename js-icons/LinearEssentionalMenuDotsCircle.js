import * as React from "react"
import Svg, { Path } from "react-native-svg";
    
const LinearEssentionalMenuDotsCircle = ({
    size = 24,
    color = "#1f2937",
    stroke = 2,
    ...props
    }) => <Svg height={size} width={size} fill="none" viewBox="0 0 24 24" strokeWidth={stroke} xmlns="http://www.w3.org/2000/svg" {...props}>
	<Path d="M7.99988 12H8.00889M12.0044 12H12.0134M15.9909 12H15.9999" stroke="black" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"/>
	<circle cx="12" cy="12" r="10" stroke="black" strokeWidth="1.5"/>
</Svg>;

export default LinearEssentionalMenuDotsCircle;
