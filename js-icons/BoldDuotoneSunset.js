import * as React from "react"
import Svg, { Path } from "react-native-svg";
    
const BoldDuotoneSunset = ({
    size = 24,
    color = "#1f2937",
    stroke = 2,
    ...props
    }) => <Svg height={size} width={size} fill="none" viewBox="0 0 24 24" strokeWidth={stroke} xmlns="http://www.w3.org/2000/svg" {...props}>
	<Path d="M7.25 22C7.25 21.5858 7.58579 21.25 8 21.25H16C16.4142 21.25 16.75 21.5858 16.75 22C16.75 22.4142 16.4142 22.75 16 22.75H8C7.58579 22.75 7.25 22.4142 7.25 22Z" fill={color} fillRule="evenodd"/>
	<Path d="M12 1.25C12.4142 1.25 12.75 1.58579 12.75 2V3C12.75 3.41421 12.4142 3.75 12 3.75C11.5858 3.75 11.25 3.41421 11.25 3V2C11.25 1.58579 11.5858 1.25 12 1.25ZM1.25 12C1.25 11.5858 1.58579 11.25 2 11.25H3C3.41421 11.25 3.75 11.5858 3.75 12C3.75 12.4142 3.41421 12.75 3 12.75H2C1.58579 12.75 1.25 12.4142 1.25 12ZM20.25 12C20.25 11.5858 20.5858 11.25 21 11.25H22C22.4142 11.25 22.75 11.5858 22.75 12C22.75 12.4142 22.4142 12.75 22 12.75H21C20.5858 12.75 20.25 12.4142 20.25 12Z" fill={color} fillRule="evenodd"/>
	<Path d="M17.9173 15.25H6.08267H2C1.58579 15.25 1.25 15.5858 1.25 16C1.25 16.4142 1.58579 16.75 2 16.75H22C22.4142 16.75 22.75 16.4142 22.75 16C22.75 15.5858 22.4142 15.25 22 15.25H17.9173Z" fill={color} fillRule="evenodd"/>
	<Path d="M4.25 19C4.25 18.5858 4.58579 18.25 5 18.25H19C19.4142 18.25 19.75 18.5858 19.75 19C19.75 19.4142 19.4142 19.75 19 19.75H5C4.58579 19.75 4.25 19.4142 4.25 19Z" fill={color} opacity="0.5"/>
	<Path d="M5.25 11.9998C5.25 13.1776 5.5521 14.2856 6.08267 15.2498H17.9173C18.4479 14.2856 18.75 13.1776 18.75 11.9998C18.75 8.5254 16.125 5.6641 12.75 5.29102L11.25 5.29102C7.87504 5.6641 5.25 8.5254 5.25 11.9998Z" fill={color} opacity="0.5"/>
	<Path d="M11.4697 12.841C11.7626 13.1339 12.2374 13.1339 12.5303 12.841L14.5303 10.841C14.8232 10.5481 14.8232 10.0732 14.5303 9.78033C14.2374 9.48744 13.7626 9.48744 13.4697 9.78033L12.75 10.5V5.29076C12.3028 5.22225 11.5637 5.26221 11.25 5.29076V10.5L10.5303 9.78033C10.2374 9.48744 9.76256 9.48744 9.46967 9.78033C9.17678 10.0732 9.17678 10.5481 9.46967 10.841L11.4697 12.841Z" fill={color}/>
	<g opacity="0.5">
		<Path d="M4.39838 4.39838C4.69127 4.10549 5.16615 4.10549 5.45904 4.39838L5.85188 4.79122C6.14477 5.08411 6.14477 5.55898 5.85188 5.85188C5.55898 6.14477 5.08411 6.14477 4.79122 5.85188L4.39838 5.45904C4.10549 5.16615 4.10549 4.69127 4.39838 4.39838Z" fill={color}/>
		<Path d="M19.6009 4.39864C19.8938 4.69153 19.8938 5.16641 19.6009 5.4593L19.2081 5.85214C18.9152 6.14503 18.4403 6.14503 18.1474 5.85214C17.8545 5.55924 17.8545 5.08437 18.1474 4.79148L18.5402 4.39864C18.8331 4.10575 19.308 4.10575 19.6009 4.39864Z" fill={color}/>
	</g>
</Svg>;

export default BoldDuotoneSunset;
