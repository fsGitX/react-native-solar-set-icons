import * as React from "react"
import Svg, { Path } from "react-native-svg";
    
const BoldWashingMachine = ({
    size = 24,
    color = "#1f2937",
    stroke = 2,
    ...props
    }) => <Svg height={size} width={size} fill="none" viewBox="0 0 24 24" strokeWidth={stroke} xmlns="http://www.w3.org/2000/svg" {...props}>
	<Path d="M20.9944 8.25H3.00559C3.03321 5.61409 3.19724 4.1459 4.17157 3.17157C5.34315 2 7.22876 2 11 2H13C16.7712 2 18.6569 2 19.8284 3.17157C20.8028 4.1459 20.9668 5.61409 20.9944 8.25ZM5.75 5.5C5.75 5.08579 6.08579 4.75 6.5 4.75H9.5C9.91421 4.75 10.25 5.08579 10.25 5.5C10.25 5.91421 9.91421 6.25 9.5 6.25H6.5C6.08579 6.25 5.75 5.91421 5.75 5.5ZM14.5 6.5C15.0523 6.5 15.5 6.05228 15.5 5.5C15.5 4.94772 15.0523 4.5 14.5 4.5C13.9477 4.5 13.5 4.94772 13.5 5.5C13.5 6.05228 13.9477 6.5 14.5 6.5ZM18.5 5.5C18.5 6.05228 18.0523 6.5 17.5 6.5C16.9477 6.5 16.5 6.05228 16.5 5.5C16.5 4.94772 16.9477 4.5 17.5 4.5C18.0523 4.5 18.5 4.94772 18.5 5.5Z" fill={color} fillRule="evenodd"/>
	<Path d="M9.75 15C9.75 13.7574 10.7574 12.75 12 12.75C13.2426 12.75 14.25 13.7574 14.25 15C14.25 16.2426 13.2426 17.25 12 17.25C10.7574 17.25 9.75 16.2426 9.75 15Z" fill={color}/>
	<Path d="M3.00001 9.75H21V13C21 16.7712 21 18.6569 19.8284 19.8284C19.524 20.1328 19.1714 20.3582 18.75 20.5249V22C18.75 22.4142 18.4142 22.75 18 22.75C17.5858 22.75 17.25 22.4142 17.25 22V20.8713C16.1801 21 14.8064 21 13 21H11C9.19364 21 7.81989 21 6.75 20.8713V22C6.75 22.4142 6.41421 22.75 6 22.75C5.58579 22.75 5.25 22.4142 5.25 22V20.5249C4.82861 20.3582 4.47599 20.1328 4.17157 19.8284C3 18.6569 3 16.7712 3 13L3.00001 9.75ZM12 11.25C9.92893 11.25 8.25 12.9289 8.25 15C8.25 17.0711 9.92893 18.75 12 18.75C14.0711 18.75 15.75 17.0711 15.75 15C15.75 12.9289 14.0711 11.25 12 11.25Z" fill={color} fillRule="evenodd"/>
</Svg>;

export default BoldWashingMachine;
