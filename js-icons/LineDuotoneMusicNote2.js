import * as React from "react"
import Svg, { Path } from "react-native-svg";
    
const LineDuotoneMusicNote2 = ({
    size = 24,
    color = "#1f2937",
    stroke = 2,
    ...props
    }) => <Svg height={size} width={size} fill="none" viewBox="0 0 24 24" strokeWidth={stroke} xmlns="http://www.w3.org/2000/svg" {...props}>
	<Path d="M13 18V10V2" opacity="0.5" stroke="black" strokeLinecap="round" strokeWidth="1.5"/>
	<Path d="M19 8C15.6863 8 13 5.31371 13 2" stroke="black" strokeLinecap="round" strokeWidth="1.5"/>
	<circle cx="9" cy="18" r="4" stroke="black" strokeWidth="1.5"/>
</Svg>;

export default LineDuotoneMusicNote2;
