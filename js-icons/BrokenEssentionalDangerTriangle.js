import * as React from "react"
import Svg, { Path } from "react-native-svg";
    
const BrokenEssentionalDangerTriangle = ({
    size = 24,
    color = "#1f2937",
    stroke = 2,
    ...props
    }) => <Svg height={size} width={size} fill="none" viewBox="0 0 24 24" strokeWidth={stroke} xmlns="http://www.w3.org/2000/svg" {...props}>
	<Path d="M6.30928 9C8.59494 5 9.96832 3 12 3C14.3107 3 15.7699 5.58716 18.6883 10.7615L19.0519 11.4063C21.4771 15.7061 22.6897 17.856 21.5937 19.428C20.4978 21 17.7864 21 12.3637 21H11.6363C6.21356 21 3.50217 21 2.40626 19.428C1.45498 18.0635 2.24306 16.2635 4.05373 13" stroke="black" strokeLinecap="round" strokeWidth="1.5"/>
	<Path d="M12 8V13" stroke="black" strokeLinecap="round" strokeWidth="1.5"/>
	<circle cx="12" cy="16" fill={color} r="1"/>
</Svg>;

export default BrokenEssentionalDangerTriangle;
