import * as React from "react"
import Svg, { Path } from "react-native-svg";
    
const BoldDuotoneArrowsActionUndoRight = ({
    size = 24,
    color = "#1f2937",
    stroke = 2,
    ...props
    }) => <Svg height={size} width={size} fill="none" viewBox="0 0 24 24" strokeWidth={stroke} xmlns="http://www.w3.org/2000/svg" {...props}>
	<Path d="M16.4697 3.46967C16.1768 3.76256 16.1768 4.23744 16.4697 4.53033L18.9393 7L16.4697 9.46967C16.1768 9.76256 16.1768 10.2374 16.4697 10.5303C16.7626 10.8232 17.2374 10.8232 17.5303 10.5303L20.5303 7.53033C20.8232 7.23744 20.8232 6.76256 20.5303 6.46967L17.5303 3.46967C17.2374 3.17678 16.7626 3.17678 16.4697 3.46967Z" fill={color} fillRule="evenodd"/>
	<Path d="M18.9393 7L18.1893 6.25H8.96422C8.05998 6.24999 7.33069 6.24998 6.7424 6.3033C6.13605 6.35826 5.60625 6.47456 5.125 6.75241C4.55493 7.08154 4.08154 7.55492 3.75241 8.12499C3.47456 8.60624 3.35826 9.13604 3.3033 9.74239C3.24998 10.3307 3.24999 11.06 3.25 11.9643V12.0358C3.24999 12.94 3.24998 13.6693 3.3033 14.2576C3.35826 14.8639 3.47455 15.3938 3.75241 15.875C4.08154 16.4451 4.55493 16.9185 5.125 17.2476C5.60625 17.5254 6.13605 17.6417 6.7424 17.6967C7.33069 17.75 8.05998 17.75 8.96423 17.75H16C16.4142 17.75 16.75 17.4142 16.75 17C16.75 16.5858 16.4142 16.25 16 16.25H9C8.05158 16.25 7.39041 16.2493 6.87779 16.2028C6.37549 16.1573 6.0899 16.0726 5.875 15.9486C5.53296 15.7511 5.24892 15.467 5.05144 15.125C4.92737 14.9101 4.84271 14.6245 4.79718 14.1222C4.75072 13.6096 4.75 12.9484 4.75 12C4.75 11.0516 4.75072 10.3904 4.79718 9.87779C4.84271 9.37548 4.92738 9.0899 5.05145 8.87499C5.24893 8.53296 5.53296 8.24892 5.875 8.05145C6.0899 7.92737 6.37549 7.84271 6.8778 7.79718C7.39042 7.75072 8.05159 7.75 9.00001 7.75H18.1893L18.9393 7Z" fill={color} opacity="0.5"/>
</Svg>;

export default BoldDuotoneArrowsActionUndoRight;