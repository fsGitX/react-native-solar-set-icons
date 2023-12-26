import * as React from "react"
import Svg, { Path } from "react-native-svg";
    
const BoldDuotoneBookmarkSquare = ({
    size = 24,
    color = "#1f2937",
    stroke = 2,
    ...props
    }) => <Svg height={size} width={size} fill="none" viewBox="0 0 24 24" strokeWidth={stroke} xmlns="http://www.w3.org/2000/svg" {...props}>
	<Path d="M3.46447 20.5356C4.92893 22.0001 7.28595 22.0001 12 22.0001C16.714 22.0001 19.0711 22.0001 20.5355 20.5356C22 19.0711 22 16.714 22 12C22 7.28595 22 4.92893 20.5355 3.46447C19.0711 2 16.714 2 12 2C7.28595 2 4.92893 2 3.46447 3.46447C2 4.92893 2 7.28602 2 12.0001C2 16.7141 2 19.0711 3.46447 20.5356Z" fill={color} opacity="0.5"/>
	<Path d="M7 17.25C6.58579 17.25 6.25 17.5858 6.25 18C6.25 18.4142 6.58579 18.75 7 18.75H17C17.4142 18.75 17.75 18.4142 17.75 18C17.75 17.5858 17.4142 17.25 17 17.25H7Z" fill={color}/>
	<Path d="M7.7649 11.8976C7.7503 11.6442 7.75 11.3043 7.75 10.8076V2.06874C8.9058 2 10.2996 2 12 2C13.7004 2 15.0942 2 16.25 2.06874V10.8076C16.25 11.3043 16.2497 11.6442 16.2351 11.8976C16.22 12.1601 16.1923 12.2408 16.1854 12.2563C16.0383 12.5876 15.6753 12.7662 15.323 12.6807C15.3066 12.6767 15.2257 12.6493 15.0085 12.5012C14.7989 12.3582 14.5294 12.151 14.1358 11.848L14.0688 11.7964C13.6986 11.5109 13.4101 11.2885 13.0958 11.152C12.3968 10.8483 11.6032 10.8483 10.9042 11.152C10.5899 11.2885 10.3014 11.5109 9.9312 11.7964L9.86419 11.848C9.47062 12.151 9.20112 12.3582 8.99148 12.5012C8.77428 12.6493 8.69342 12.6767 8.67695 12.6807C8.32471 12.7662 7.96171 12.5876 7.81457 12.2563C7.80769 12.2408 7.78003 12.1601 7.7649 11.8976Z" fill={color}/>
</Svg>;

export default BoldDuotoneBookmarkSquare;
