import * as React from "react"
import Svg, { Path } from "react-native-svg";
    
const BoldDuotoneCloset2 = ({
    size = 24,
    color = "#1f2937",
    stroke = 2,
    ...props
    }) => <Svg height={size} width={size} fill="none" viewBox="0 0 24 24" strokeWidth={stroke} xmlns="http://www.w3.org/2000/svg" {...props}>
	<Path d="M12 2H10C6.22876 2 4.34315 2 3.17157 3.17157C2 4.34315 2 6.22876 2 10V12C2 15.7712 2 17.6569 3.17157 18.8284C3.47599 19.1328 3.82861 19.3582 4.25 19.5249V22C4.25 22.4142 4.58579 22.75 5 22.75C5.41421 22.75 5.75 22.4142 5.75 22V19.8713C6.81989 20 8.19364 20 10 20H12V2ZM9 8.25C9.41421 8.25 9.75 8.58579 9.75 9V13C9.75 13.4142 9.41421 13.75 9 13.75C8.58579 13.75 8.25 13.4142 8.25 13V9C8.25 8.58579 8.58579 8.25 9 8.25Z" fill={color} fillRule="evenodd"/>
	<Path d="M14 20H12V2H14C17.7712 2 19.6569 2 20.8284 3.17157C22 4.34315 22 6.22876 22 10V12C22 15.7712 22 17.6569 20.8284 18.8284C20.524 19.1328 20.1714 19.3582 19.75 19.5249V22C19.75 22.4142 19.4142 22.75 19 22.75C18.5858 22.75 18.25 22.4142 18.25 22V19.8713C17.1801 20 15.8064 20 14 20Z" fill={color} opacity="0.5"/>
	<Path d="M15.75 9C15.75 8.58579 15.4142 8.25 15 8.25C14.5858 8.25 14.25 8.58579 14.25 9V13C14.25 13.4142 14.5858 13.75 15 13.75C15.4142 13.75 15.75 13.4142 15.75 13V9Z" fill={color}/>
</Svg>;

export default BoldDuotoneCloset2;