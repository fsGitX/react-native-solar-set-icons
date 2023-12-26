import * as React from "react"
import Svg, { Path } from "react-native-svg";
    
const BoldDuotoneList = ({
    size = 24,
    color = "#1f2937",
    stroke = 2,
    ...props
    }) => <Svg height={size} width={size} fill="none" viewBox="0 0 24 24" strokeWidth={stroke} xmlns="http://www.w3.org/2000/svg" {...props}>
	<Path d="M17 3.25C17.2361 3.25 17.4584 3.36115 17.6 3.55L20.6 7.55C20.8486 7.88137 20.7814 8.35147 20.45 8.6C20.1187 8.84853 19.6486 8.78137 19.4 8.45L17.75 6.25V17.75L19.4 15.55C19.6486 15.2186 20.1187 15.1515 20.45 15.4C20.7814 15.6485 20.8486 16.1186 20.6 16.45L17.6 20.45C17.4584 20.6389 17.2361 20.75 17 20.75C16.764 20.75 16.5417 20.6389 16.4 20.45L13.4 16.45C13.1515 16.1186 13.2187 15.6485 13.55 15.4C13.8814 15.1515 14.3515 15.2186 14.6 15.55L16.25 17.75V6.25L14.6 8.45C14.3515 8.78137 13.8814 8.84853 13.55 8.6C13.2187 8.35147 13.1515 7.88137 13.4 7.55L16.4 3.55C16.5417 3.36115 16.764 3.25 17 3.25Z" fill={color} fillRule="evenodd"/>
	<g opacity="0.5">
		<Path d="M3.25 7C3.25 6.58579 3.58579 6.25 4 6.25H11C11.4142 6.25 11.75 6.58579 11.75 7C11.75 7.41421 11.4142 7.75 11 7.75H4C3.58579 7.75 3.25 7.41421 3.25 7Z" fill={color}/>
		<Path d="M3.25 12C3.25 11.5858 3.58579 11.25 4 11.25H11C11.4142 11.25 11.75 11.5858 11.75 12C11.75 12.4142 11.4142 12.75 11 12.75H4C3.58579 12.75 3.25 12.4142 3.25 12Z" fill={color}/>
		<Path d="M3.25 17C3.25 16.5858 3.58579 16.25 4 16.25H11C11.4142 16.25 11.75 16.5858 11.75 17C11.75 17.4142 11.4142 17.75 11 17.75H4C3.58579 17.75 3.25 17.4142 3.25 17Z" fill={color}/>
	</g>
</Svg>;

export default BoldDuotoneList;
