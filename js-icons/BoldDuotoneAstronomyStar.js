import * as React from "react"
import Svg, { Path } from "react-native-svg";
    
const BoldDuotoneAstronomyStar = ({
    size = 24,
    color = "#1f2937",
    stroke = 2,
    ...props
    }) => <Svg height={size} width={size} fill="none" viewBox="0 0 24 24" strokeWidth={stroke} xmlns="http://www.w3.org/2000/svg" {...props}>
	<Path d="M12 3.25C12.4142 3.25 12.75 3.58579 12.75 4V6.4C12.75 6.81421 12.4142 7.15 12 7.15C11.5858 7.15 11.25 6.81421 11.25 6.4V4C11.25 3.58579 11.5858 3.25 12 3.25ZM3.25 12C3.25 11.5858 3.58579 11.25 4 11.25H6.4C6.81421 11.25 7.15 11.5858 7.15 12C7.15 12.4142 6.81421 12.75 6.4 12.75H4C3.58579 12.75 3.25 12.4142 3.25 12ZM16.85 12C16.85 11.5858 17.1858 11.25 17.6 11.25H20C20.4142 11.25 20.75 11.5858 20.75 12C20.75 12.4142 20.4142 12.75 20 12.75H17.6C17.1858 12.75 16.85 12.4142 16.85 12ZM12 16.85C12.4142 16.85 12.75 17.1858 12.75 17.6V20C12.75 20.4142 12.4142 20.75 12 20.75C11.5858 20.75 11.25 20.4142 11.25 20V17.6C11.25 17.1858 11.5858 16.85 12 16.85Z" fill={color} fillRule="evenodd"/>
	<g opacity="0.5">
		<Path d="M18.187 5.81244C18.4799 6.10534 18.4799 6.58021 18.187 6.8731L16.49 8.57016C16.1971 8.86305 15.7222 8.86305 15.4293 8.57016C15.1364 8.27727 15.1364 7.80239 15.4293 7.5095L17.1264 5.81244C17.4193 5.51955 17.8941 5.51955 18.187 5.81244Z" fill={color}/>
		<Path d="M5.81244 5.81262C6.10534 5.51973 6.58021 5.51973 6.8731 5.81262L8.57016 7.50968C8.86305 7.80257 8.86305 8.27744 8.57016 8.57034C8.27727 8.86323 7.80239 8.86323 7.5095 8.57034L5.81244 6.87328C5.51955 6.58039 5.51955 6.10551 5.81244 5.81262Z" fill={color}/>
		<Path d="M8.57037 15.4291C8.86327 15.722 8.86327 16.1969 8.57037 16.4898L6.87332 18.1868C6.58042 18.4797 6.10555 18.4797 5.81266 18.1868C5.51976 17.8939 5.51976 17.419 5.81266 17.1262L7.50971 15.4291C7.80261 15.1362 8.27748 15.1362 8.57037 15.4291Z" fill={color}/>
		<Path d="M15.4291 15.4293C15.722 15.1364 16.1969 15.1364 16.4898 15.4293L18.1868 17.1263C18.4797 17.4192 18.4797 17.8941 18.1868 18.187C17.8939 18.4799 17.419 18.4799 17.1262 18.187L15.4291 16.4899C15.1362 16.197 15.1362 15.7222 15.4291 15.4293Z" fill={color}/>
	</g>
</Svg>;

export default BoldDuotoneAstronomyStar;