import * as React from "react"
import Svg, { Path } from "react-native-svg";
    
const BoldSunset = ({
    size = 24,
    color = "#1f2937",
    stroke = 2,
    ...props
    }) => <Svg height={size} width={size} fill="none" viewBox="0 0 24 24" strokeWidth={stroke} xmlns="http://www.w3.org/2000/svg" {...props}>
	<Path d="M4.25 19C4.25 18.5858 4.58579 18.25 5 18.25H19C19.4142 18.25 19.75 18.5858 19.75 19C19.75 19.4142 19.4142 19.75 19 19.75H5C4.58579 19.75 4.25 19.4142 4.25 19ZM7.25 22C7.25 21.5858 7.58579 21.25 8 21.25H16C16.4142 21.25 16.75 21.5858 16.75 22C16.75 22.4142 16.4142 22.75 16 22.75H8C7.58579 22.75 7.25 22.4142 7.25 22Z" fill={color} fillRule="evenodd"/>
	<Path d="M12 1.25C12.4142 1.25 12.75 1.58579 12.75 2V3C12.75 3.41421 12.4142 3.75 12 3.75C11.5858 3.75 11.25 3.41421 11.25 3V2C11.25 1.58579 11.5858 1.25 12 1.25ZM4.39861 4.39861C4.6915 4.10572 5.16638 4.10572 5.45927 4.39861L5.85211 4.79145C6.145 5.08434 6.145 5.55921 5.85211 5.85211C5.55921 6.145 5.08434 6.145 4.79145 5.85211L4.39861 5.45927C4.10572 5.16638 4.10572 4.6915 4.39861 4.39861ZM19.6011 4.39887C19.894 4.69176 19.894 5.16664 19.6011 5.45953L19.2083 5.85237C18.9154 6.14526 18.4405 6.14526 18.1476 5.85237C17.8547 5.55947 17.8547 5.0846 18.1476 4.79171L18.5405 4.39887C18.8334 4.10598 19.3082 4.10598 19.6011 4.39887ZM1.25 12C1.25 11.5858 1.58579 11.25 2 11.25H3C3.41421 11.25 3.75 11.5858 3.75 12C3.75 12.4142 3.41421 12.75 3 12.75H2C1.58579 12.75 1.25 12.4142 1.25 12ZM20.25 12C20.25 11.5858 20.5858 11.25 21 11.25H22C22.4142 11.25 22.75 11.5858 22.75 12C22.75 12.4142 22.4142 12.75 22 12.75H21C20.5858 12.75 20.25 12.4142 20.25 12Z" fill={color} fillRule="evenodd"/>
	<Path d="M5.25 12C5.25 13.1778 5.5521 14.2858 6.08267 15.25H2C1.58579 15.25 1.25 15.5858 1.25 16C1.25 16.4142 1.58579 16.75 2 16.75H22C22.4142 16.75 22.75 16.4142 22.75 16C22.75 15.5858 22.4142 15.25 22 15.25H17.9173C18.4479 14.2858 18.75 13.1778 18.75 12C18.75 8.52558 16.125 5.66428 12.75 5.2912V9.18923L13.4697 8.46956C13.7626 8.17666 14.2374 8.17666 14.5303 8.46956C14.8232 8.76245 14.8232 9.23732 14.5303 9.53022L12.5303 11.5302C12.2374 11.8231 11.7626 11.8231 11.4697 11.5302L9.46967 9.53022C9.17678 9.23732 9.17678 8.76245 9.46967 8.46956C9.76256 8.17666 10.2374 8.17666 10.5303 8.46956L11.25 9.18923V5.2912C7.87504 5.66428 5.25 8.52558 5.25 12Z" fill={color}/>
</Svg>;

export default BoldSunset;
