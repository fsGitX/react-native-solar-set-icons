import * as React from "react"
import Svg, { Path } from "react-native-svg";
    
const LineDuotoneEssentionalDangerTriangle = ({
    size = 24,
    color = "#1f2937",
    stroke = 2,
    ...props
    }) => <Svg height={size} width={size} fill="none" viewBox="0 0 24 24" strokeWidth={stroke} xmlns="http://www.w3.org/2000/svg" {...props}>
	<Path d="M5.31171 10.7615C8.23007 5.58716 9.68925 3 12 3C14.3107 3 15.7699 5.58716 18.6883 10.7615L19.0519 11.4063C21.4771 15.7061 22.6897 17.856 21.5937 19.428C20.4978 21 17.7864 21 12.3637 21H11.6363C6.21356 21 3.50217 21 2.40626 19.428C1.31034 17.856 2.52291 15.7061 4.94805 11.4063L5.31171 10.7615Z" opacity="0.5" stroke="black" strokeWidth="1.5"/>
	<Path d="M12 8V13" stroke="black" strokeLinecap="round" strokeWidth="1.5"/>
	<circle cx="12" cy="16" fill={color} r="1"/>
</Svg>;

export default LineDuotoneEssentionalDangerTriangle;
