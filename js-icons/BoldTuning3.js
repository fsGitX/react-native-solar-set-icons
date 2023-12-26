import * as React from "react"
import Svg, { Path } from "react-native-svg";
    
const BoldTuning3 = ({
    size = 24,
    color = "#1f2937",
    stroke = 2,
    ...props
    }) => <Svg height={size} width={size} fill="none" viewBox="0 0 24 24" strokeWidth={stroke} xmlns="http://www.w3.org/2000/svg" {...props}>
	<Path d="M12 8.75C11.5858 8.75 11.25 8.41421 11.25 8V5C11.25 4.58579 11.5858 4.25 12 4.25C12.4142 4.25 12.75 4.58579 12.75 5V8C12.75 8.41421 12.4142 8.75 12 8.75Z" fill={color}/>
	<Path d="M4 12C2.89543 12 2 11.1046 2 10C2 8.89543 2.89543 8 4 8C5.10457 8 6 8.89543 6 10C6 11.1046 5.10457 12 4 12Z" fill={color}/>
	<Path d="M10 12C10 10.8954 10.8954 10 12 10C13.1046 10 14 10.8954 14 12C14 13.1046 13.1046 14 12 14C10.8954 14 10 13.1046 10 12Z" fill={color}/>
	<Path d="M18 14C18 12.8954 18.8954 12 20 12C21.1046 12 22 12.8954 22 14C22 15.1046 21.1046 16 20 16C18.8954 16 18 15.1046 18 14Z" fill={color}/>
	<Path d="M19.25 10C19.25 10.4142 19.5858 10.75 20 10.75C20.4142 10.75 20.75 10.4142 20.75 10V5C20.75 4.58579 20.4142 4.25 20 4.25C19.5858 4.25 19.25 4.58579 19.25 5V10Z" fill={color}/>
	<Path d="M4 13.25C3.58579 13.25 3.25 13.5858 3.25 14L3.25 19C3.25 19.4142 3.58579 19.75 4 19.75C4.41421 19.75 4.75 19.4142 4.75 19L4.75 14C4.75 13.5858 4.41421 13.25 4 13.25Z" fill={color}/>
	<Path d="M11.25 19C11.25 19.4142 11.5858 19.75 12 19.75C12.4142 19.75 12.75 19.4142 12.75 19V16C12.75 15.5858 12.4142 15.25 12 15.25C11.5858 15.25 11.25 15.5858 11.25 16V19Z" fill={color}/>
	<Path d="M20 19.75C19.5858 19.75 19.25 19.4142 19.25 19V18C19.25 17.5858 19.5858 17.25 20 17.25C20.4142 17.25 20.75 17.5858 20.75 18V19C20.75 19.4142 20.4142 19.75 20 19.75Z" fill={color}/>
	<Path d="M3.25 5C3.25 4.58579 3.58579 4.25 4 4.25C4.41421 4.25 4.75 4.58579 4.75 5V6C4.75 6.41421 4.41421 6.75 4 6.75C3.58579 6.75 3.25 6.41421 3.25 6L3.25 5Z" fill={color}/>
</Svg>;

export default BoldTuning3;
