import * as React from "react"
import Svg, { Path } from "react-native-svg";
    
const BoldDuotoneSmartphone2 = ({
    size = 24,
    color = "#1f2937",
    stroke = 2,
    ...props
    }) => <Svg height={size} width={size} fill="none" viewBox="0 0 24 24" strokeWidth={stroke} xmlns="http://www.w3.org/2000/svg" {...props}>
	<Path d="M5.17157 3.17157C4 4.34315 4 6.22876 4 10V14C4 17.7712 4 19.6569 5.17157 20.8284C6.34315 22 8.22876 22 12 22C15.7712 22 17.6569 22 18.8284 20.8284C20 19.6569 20 17.7712 20 14V10C20 6.22876 20 4.34315 18.8284 3.17157C17.6569 2 15.7712 2 12 2C8.22876 2 6.34315 2 5.17157 3.17157Z" fill={color} opacity="0.5"/>
	<Path d="M9 4.25C8.58579 4.25 8.25 4.58579 8.25 5C8.25 5.41421 8.58579 5.75 9 5.75H15C15.4142 5.75 15.75 5.41421 15.75 5C15.75 4.58579 15.4142 4.25 15 4.25H9Z" fill={color}/>
	<Path d="M12 19C13.1046 19 14 18.1046 14 17C14 15.8954 13.1046 15 12 15C10.8954 15 10 15.8954 10 17C10 18.1046 10.8954 19 12 19Z" fill={color}/>
</Svg>;

export default BoldDuotoneSmartphone2;
