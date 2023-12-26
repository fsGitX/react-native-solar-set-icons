import * as React from "react"
import Svg, { Path } from "react-native-svg";
    
const LinearExpressionlessCircle = ({
    size = 24,
    color = "#1f2937",
    stroke = 2,
    ...props
    }) => <Svg height={size} width={size} fill="none" viewBox="0 0 24 24" strokeWidth={stroke} xmlns="http://www.w3.org/2000/svg" {...props}>
	<circle cx="12" cy="12" r="10" stroke="black" strokeWidth="1.5"/>
	<Path d="M9 16C10 16 10.8846 16 12 16C13.1154 16 14 16 15 16" stroke="black" strokeLinecap="round" strokeWidth="1.5"/>
	<Path d="M16 10.5C16 11.3284 15.5523 12 15 12C14.4477 12 14 11.3284 14 10.5C14 9.67157 14.4477 9 15 9C15.5523 9 16 9.67157 16 10.5Z" fill={color}/>
	<ellipse cx="9" cy="10.5" fill={color} rx="1" ry="1.5"/>
</Svg>;

export default LinearExpressionlessCircle;
