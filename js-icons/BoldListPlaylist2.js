import * as React from "react"
import Svg, { Path } from "react-native-svg";
    
const BoldListPlaylist2 = ({
    size = 24,
    color = "#1f2937",
    stroke = 2,
    ...props
    }) => <Svg height={size} width={size} fill="none" viewBox="0 0 24 24" strokeWidth={stroke} xmlns="http://www.w3.org/2000/svg" {...props}>
	<Path d="M19.3446 5.99286C19.6232 5.8902 19.9559 5.80212 20.3149 5.8678C20.7572 5.9487 21.1513 6.19672 21.4156 6.56043C21.6302 6.85569 21.6948 7.19367 21.7228 7.48928C21.75 7.77699 21.75 8.13579 21.75 8.5446L21.75 8.57892L21.7501 8.65454C21.7509 8.95464 21.7518 9.27515 21.644 9.57044C21.559 9.80354 21.4254 10.0159 21.252 10.1934C21.0324 10.4183 20.7431 10.5562 20.4722 10.6854L20.404 10.718L18.6185 11.575C18.25 11.752 17.9266 11.9072 17.6554 12.0071C17.3936 12.1036 17.0842 12.1872 16.75 12.1425V16.4286C16.75 18.2429 15.3147 19.75 13.5 19.75C11.6853 19.75 10.25 18.2429 10.25 16.4286C10.25 14.6143 11.6853 13.1071 13.5 13.1071C14.1477 13.1071 14.747 13.2991 15.25 13.6285V10H15.2529C15.25 9.83117 15.25 9.64889 15.25 9.45542L15.25 9.42108L15.2499 9.34547C15.2491 9.04537 15.2482 8.72485 15.356 8.42957C15.441 8.19646 15.5746 7.98411 15.748 7.80658C15.9676 7.5817 16.2569 7.44376 16.5278 7.31461L16.596 7.282L18.3814 6.42498C18.75 6.24806 19.0734 6.09278 19.3446 5.99286Z" fill={color}/>
	<Path d="M2.25 5C2.25 4.58579 2.58579 4.25 3 4.25H15C15.4142 4.25 15.75 4.58579 15.75 5C15.75 5.41421 15.4142 5.75 15 5.75H3C2.58579 5.75 2.25 5.41421 2.25 5ZM2.25 9C2.25 8.58579 2.58579 8.25 3 8.25H13C13.4142 8.25 13.75 8.58579 13.75 9C13.75 9.41421 13.4142 9.75 13 9.75H3C2.58579 9.75 2.25 9.41421 2.25 9ZM2.25 13C2.25 12.5858 2.58579 12.25 3 12.25H9C9.41421 12.25 9.75 12.5858 9.75 13C9.75 13.4142 9.41421 13.75 9 13.75H3C2.58579 13.75 2.25 13.4142 2.25 13ZM2.25 17C2.25 16.5858 2.58579 16.25 3 16.25H8C8.41421 16.25 8.75 16.5858 8.75 17C8.75 17.4142 8.41421 17.75 8 17.75H3C2.58579 17.75 2.25 17.4142 2.25 17Z" fill={color} fillRule="evenodd"/>
</Svg>;

export default BoldListPlaylist2;
