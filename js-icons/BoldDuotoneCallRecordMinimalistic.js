import * as React from "react"
import Svg, { Path } from "react-native-svg";
    
const BoldDuotoneCallRecordMinimalistic = ({
    size = 24,
    color = "#1f2937",
    stroke = 2,
    ...props
    }) => <Svg height={size} width={size} fill="none" viewBox="0 0 24 24" strokeWidth={stroke} xmlns="http://www.w3.org/2000/svg" {...props}>
	<Path d="M22 12C22 14.2091 20.2091 16 18 16C15.7909 16 14 14.2091 14 12C14 9.79086 15.7909 8 18 8C20.2091 8 22 9.79086 22 12Z" fill={color}/>
	<Path d="M10 12C10 14.2091 8.20914 16 6 16C3.79086 16 2 14.2091 2 12C2 9.79086 3.79086 8 6 8C8.20914 8 10 9.79086 10 12Z" fill={color}/>
	<Path d="M6 16H18C16.9856 16 16.0593 15.6224 15.3542 15H8.64582C7.94069 15.6224 7.01445 16 6 16Z" fill={color} opacity="0.5"/>
</Svg>;

export default BoldDuotoneCallRecordMinimalistic;
