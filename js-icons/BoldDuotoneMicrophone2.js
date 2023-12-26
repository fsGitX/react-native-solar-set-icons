import * as React from "react"
import Svg, { Path } from "react-native-svg";
    
const BoldDuotoneMicrophone2 = ({
    size = 24,
    color = "#1f2937",
    stroke = 2,
    ...props
    }) => <Svg height={size} width={size} fill="none" viewBox="0 0 24 24" strokeWidth={stroke} xmlns="http://www.w3.org/2000/svg" {...props}>
	<Path d="M4 9C4.41421 9 4.75 9.33579 4.75 9.75V10.75C4.75 14.7541 7.99594 18 12 18C16.0041 18 19.25 14.7541 19.25 10.75V9.75C19.25 9.33579 19.5858 9 20 9C20.4142 9 20.75 9.33579 20.75 9.75V10.75C20.75 15.3298 17.2314 19.0879 12.75 19.4683V21.75C12.75 22.1642 12.4142 22.5 12 22.5C11.5858 22.5 11.25 22.1642 11.25 21.75V19.4683C6.7686 19.0879 3.25 15.3298 3.25 10.75V9.75C3.25 9.33579 3.58579 9 4 9Z" fill={color} fillRule="evenodd"/>
	<Path d="M9.75 7.75C9.75 7.33579 9.41421 7 9 7H7.81597H6.29847C6.66598 4.17873 9.07855 2 12 2C14.9214 2 17.334 4.17873 17.7015 7H16.184L13.5 7C13.0858 7 12.75 7.33579 12.75 7.75C12.75 8.16421 13.0858 8.5 13.5 8.5L16.25 8.5H17.75V10H16.25H13.5C13.0858 10 12.75 10.3358 12.75 10.75C12.75 11.1642 13.0858 11.5 13.5 11.5H16.184H17.7015C17.334 14.3213 14.9214 16.5 12 16.5C9.07855 16.5 6.66598 14.3213 6.29847 11.5H7.81597H9C9.41421 11.5 9.75 11.1642 9.75 10.75C9.75 10.3358 9.41421 10 9 10H7.75H6.25V8.5H7.75H9C9.41421 8.5 9.75 8.16421 9.75 7.75Z" fill={color} opacity="0.5"/>
	<Path d="M12.75 10.75C12.75 11.1642 13.0858 11.5 13.5 11.5H16.184H17.7015L17.75 10H16.25H13.5C13.0858 10 12.75 10.3358 12.75 10.75Z" fill={color}/>
	<Path d="M12.75 7.75C12.75 8.16421 13.0858 8.5 13.5 8.5L16.25 8.5H17.75L17.7015 7H16.184L13.5 7C13.0858 7 12.75 7.33579 12.75 7.75Z" fill={color}/>
	<Path d="M9.75 7.75C9.75 7.33579 9.41421 7 9 7H7.81597H6.29847L6.25 8.5H7.75H9C9.41421 8.5 9.75 8.16421 9.75 7.75Z" fill={color}/>
	<Path d="M9.75 10.75C9.75 10.3358 9.41421 10 9 10H7.75H6.25L6.29847 11.5H7.81597H9C9.41421 11.5 9.75 11.1642 9.75 10.75Z" fill={color}/>
</Svg>;

export default BoldDuotoneMicrophone2;