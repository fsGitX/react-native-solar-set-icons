import * as React from "react"
import Svg, { Path } from "react-native-svg";
    
const BoldDuotoneCommand = ({
    size = 24,
    color = "#1f2937",
    stroke = 2,
    ...props
    }) => <Svg height={size} width={size} fill="none" viewBox="0 0 24 24" strokeWidth={stroke} xmlns="http://www.w3.org/2000/svg" {...props}>
	<Path d="M16 16L19 16.0005C20.6569 16.0002 22.0002 17.3432 22.0005 19C22.0007 20.6569 20.6578 22.0002 19.0009 22.0005C17.3441 22.0007 16.0007 20.6578 16.0005 19.001L16 16Z" fill={color}/>
	<Path d="M5.00047 16.0005L8.00047 16.001L8 19.001C7.99974 20.6578 6.65638 22.0007 4.99953 22.0005C3.34267 22.0002 1.99974 20.6569 2 19C2.00026 17.3432 3.34362 16.0002 5.00047 16.0005Z" fill={color}/>
	<Path d="M19 8.00049L16 8.00002L16.0005 5.00002C16.0007 3.34316 17.3441 2.00023 19.0009 2.00049C20.6578 2.00075 22.0007 3.34411 22.0005 5.00096C22.0002 6.65781 20.6569 8.00075 19 8.00049ZM8.00047 8L8 5.00002C7.99974 3.34316 6.65638 2.00023 4.99953 2.00049C3.34267 2.00075 1.99974 3.34411 2 5.00096C2.00026 6.65781 3.34362 8.00075 5.00047 8.00049L8.00047 8Z" fill={color} fillRule="evenodd"/>
	<Path d="M16 8.00002L8.00047 8L8 16H16V8.00002Z" fill={color} opacity="0.5"/>
</Svg>;

export default BoldDuotoneCommand;
