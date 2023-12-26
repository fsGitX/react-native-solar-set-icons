import * as React from "react"
import Svg, { Path } from "react-native-svg";
    
const BrokenZIPFile = ({
    size = 24,
    color = "#1f2937",
    stroke = 2,
    ...props
    }) => <Svg height={size} width={size} fill="none" viewBox="0 0 24 24" strokeWidth={stroke} xmlns="http://www.w3.org/2000/svg" {...props}>
	<Path d="M3 14V10C3 6.22876 3 4.34315 4.17157 3.17157C5.34315 2 7.22876 2 11 2H13C16.7712 2 18.6569 2 19.8284 3.17157C20.4816 3.82475 20.7706 4.69989 20.8985 6M21 10V14C21 17.7712 21 19.6569 19.8284 20.8284C18.6569 22 16.7712 22 13 22H11C7.22876 22 5.34315 22 4.17157 20.8284C3.51839 20.1752 3.22937 19.3001 3.10149 18" stroke="black" strokeLinecap="round" strokeWidth="1.5"/>
	<Path d="M9.5 15.5V15.375C9.5 14.8918 9.89175 14.5 10.375 14.5H13.625C14.1082 14.5 14.5 14.8918 14.5 15.375V15.5C14.5 16.8807 13.3807 18 12 18C10.6193 18 9.5 16.8807 9.5 15.5Z" stroke="black" strokeLinecap="round" strokeWidth="1.5"/>
	<Path d="M9.5 3C9.5 2.5286 9.5 2.29289 9.64645 2.14645C9.79289 2 10.0286 2 10.5 2H11C11.4714 2 11.7071 2 11.8536 2.14645C12 2.29289 12 2.5286 12 3V3.5C12 3.9714 12 4.20711 11.8536 4.35355C11.7071 4.5 11.4714 4.5 11 4.5H10.5C10.0286 4.5 9.79289 4.5 9.64645 4.35355C9.5 4.20711 9.5 3.9714 9.5 3.5V3Z" stroke="black" strokeWidth="1.5"/>
	<Path d="M9.5 8C9.5 7.5286 9.5 7.29289 9.64645 7.14645C9.79289 7 10.0286 7 10.5 7H11C11.4714 7 11.7071 7 11.8536 7.14645C12 7.29289 12 7.5286 12 8V8.5C12 8.9714 12 9.20711 11.8536 9.35355C11.7071 9.5 11.4714 9.5 11 9.5H10.5C10.0286 9.5 9.79289 9.5 9.64645 9.35355C9.5 9.20711 9.5 8.9714 9.5 8.5V8Z" stroke="black" strokeWidth="1.5"/>
	<Path d="M12 5.5C12 5.0286 12 4.79289 12.1464 4.64645C12.2929 4.5 12.5286 4.5 13 4.5H13.5C13.9714 4.5 14.2071 4.5 14.3536 4.64645C14.5 4.79289 14.5 5.0286 14.5 5.5V6C14.5 6.4714 14.5 6.70711 14.3536 6.85355C14.2071 7 13.9714 7 13.5 7H13C12.5286 7 12.2929 7 12.1464 6.85355C12 6.70711 12 6.4714 12 6V5.5Z" stroke="black" strokeWidth="1.5"/>
	<Path d="M12 10.5C12 10.0286 12 9.79289 12.1464 9.64645C12.2929 9.5 12.5286 9.5 13 9.5H13.5C13.9714 9.5 14.2071 9.5 14.3536 9.64645C14.5 9.79289 14.5 10.0286 14.5 10.5V11C14.5 11.4714 14.5 11.7071 14.3536 11.8536C14.2071 12 13.9714 12 13.5 12H13C12.5286 12 12.2929 12 12.1464 11.8536C12 11.7071 12 11.4714 12 11V10.5Z" stroke="black" strokeWidth="1.5"/>
</Svg>;

export default BrokenZIPFile;
