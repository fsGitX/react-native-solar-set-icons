import * as React from "react"
import Svg, { Path } from "react-native-svg";
    
const BoldDuotoneCircleTopDown = ({
    size = 24,
    color = "#1f2937",
    stroke = 2,
    ...props
    }) => <Svg height={size} width={size} fill="none" viewBox="0 0 24 24" strokeWidth={stroke} xmlns="http://www.w3.org/2000/svg" {...props}>
	<Path d="M12 22C17.5228 22 22 17.5228 22 12C22 6.47715 17.5228 2 12 2C6.47715 2 2 6.47715 2 12C2 17.5228 6.47715 22 12 22Z" fill={color} opacity="0.5"/>
	<Path d="M21.5303 2.46967C21.8232 2.76256 21.8232 3.23744 21.5303 3.53033L13.8107 11.25H17.3438C17.758 11.25 18.0938 11.5858 18.0938 12C18.0938 12.4142 17.758 12.75 17.3438 12.75H12C11.5858 12.75 11.25 12.4142 11.25 12V6.65625C11.25 6.24204 11.5858 5.90625 12 5.90625C12.4142 5.90625 12.75 6.24204 12.75 6.65625V10.1893L20.4697 2.46967C20.7626 2.17678 21.2374 2.17678 21.5303 2.46967Z" fill={color} fillRule="evenodd"/>
</Svg>;

export default BoldDuotoneCircleTopDown;
