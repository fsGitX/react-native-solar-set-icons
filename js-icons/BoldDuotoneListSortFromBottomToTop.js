import * as React from "react"
import Svg, { Path } from "react-native-svg";
    
const BoldDuotoneListSortFromBottomToTop = ({
    size = 24,
    color = "#1f2937",
    stroke = 2,
    ...props
    }) => <Svg height={size} width={size} fill="none" viewBox="0 0 24 24" strokeWidth={stroke} xmlns="http://www.w3.org/2000/svg" {...props}>
	<Path d="M17 20.75C17.4142 20.75 17.75 20.4143 17.75 20V6.25005L19.4 8.45005C19.6485 8.78142 20.1186 8.84858 20.45 8.60005C20.7814 8.35152 20.8485 7.88142 20.6 7.55005L17.6 3.55005C17.4063 3.29179 17.0691 3.18645 16.7628 3.28854C16.4566 3.39062 16.25 3.67723 16.25 4.00005V20C16.25 20.4143 16.5858 20.75 17 20.75Z" fill={color} fillRule="evenodd"/>
	<Path d="M3.25 8C3.25 8.41421 3.58579 8.75 4 8.75H13C13.4142 8.75 13.75 8.41421 13.75 8C13.75 7.58579 13.4142 7.25 13 7.25H4C3.58579 7.25 3.25 7.58579 3.25 8Z" fill={color}/>
	<Path d="M5.25 13C5.25 13.4142 5.58579 13.75 6 13.75H13C13.4142 13.75 13.75 13.4142 13.75 13C13.75 12.5858 13.4142 12.25 13 12.25H6C5.58579 12.25 5.25 12.5858 5.25 13Z" fill={color} opacity="0.7"/>
	<Path d="M7.25 18C7.25 18.4142 7.58579 18.75 8 18.75H13C13.4142 18.75 13.75 18.4142 13.75 18C13.75 17.5858 13.4142 17.25 13 17.25H8C7.58579 17.25 7.25 17.5858 7.25 18Z" fill={color} opacity="0.4"/>
</Svg>;

export default BoldDuotoneListSortFromBottomToTop;
