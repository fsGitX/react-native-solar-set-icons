import * as React from "react"
import Svg, { Path } from "react-native-svg";
    
const BoldCloset = ({
    size = 24,
    color = "#1f2937",
    stroke = 2,
    ...props
    }) => <Svg height={size} width={size} fill="none" viewBox="0 0 24 24" strokeWidth={stroke} xmlns="http://www.w3.org/2000/svg" {...props}>
	<Path d="M11.25 2H10C6.22876 2 4.34315 2 3.17157 3.17157C2.32803 4.01511 2.09185 5.22882 2.02572 7.25H11.25V2Z" fill={color}/>
	<Path d="M2.00189 8.75C2 9.14203 2 9.55807 2 10V13C2 13.4419 2 13.858 2.00189 14.25H11.25V8.75H2.00189Z" fill={color}/>
	<Path d="M3.17157 19.8284C2.32803 18.9849 2.09185 17.7712 2.02572 15.75H11.25V21H10C8.19364 21 6.81989 21 5.75 20.8713V22C5.75 22.4142 5.41421 22.75 5 22.75C4.58579 22.75 4.25 22.4142 4.25 22V20.5249C3.82861 20.3582 3.47599 20.1328 3.17157 19.8284ZM6.25 18C6.25 17.5858 6.58579 17.25 7 17.25H9C9.41421 17.25 9.75 17.5858 9.75 18C9.75 18.4142 9.41421 18.75 9 18.75H7C6.58579 18.75 6.25 18.4142 6.25 18Z" fill={color} fillRule="evenodd"/>
	<Path d="M12.75 21H14C15.8064 21 17.1801 21 18.25 20.8713V22C18.25 22.4142 18.5858 22.75 19 22.75C19.4142 22.75 19.75 22.4142 19.75 22V20.5249C20.1714 20.3582 20.524 20.1328 20.8284 19.8284C21.672 18.9849 21.9082 17.7712 21.9743 15.75H12.75V21ZM15 17.25C14.5858 17.25 14.25 17.5858 14.25 18C14.25 18.4142 14.5858 18.75 15 18.75H17C17.4142 18.75 17.75 18.4142 17.75 18C17.75 17.5858 17.4142 17.25 17 17.25H15Z" fill={color} fillRule="evenodd"/>
	<Path d="M22 13C22 13.4419 22 13.858 21.9981 14.25H12.75V2H14C17.7712 2 19.6569 2 20.8284 3.17157C22 4.34315 22 6.22876 22 10V13ZM15 7.25C15.4142 7.25 15.75 7.58579 15.75 8V10C15.75 10.4142 15.4142 10.75 15 10.75C14.5858 10.75 14.25 10.4142 14.25 10V8C14.25 7.58579 14.5858 7.25 15 7.25Z" fill={color} fillRule="evenodd"/>
</Svg>;

export default BoldCloset;
