import * as React from "react"
import Svg, { Path } from "react-native-svg";
    
const BoldDuotoneUserHeart = ({
    size = 24,
    color = "#1f2937",
    stroke = 2,
    ...props
    }) => <Svg height={size} width={size} fill="none" viewBox="0 0 24 24" strokeWidth={stroke} xmlns="http://www.w3.org/2000/svg" {...props}>
	<circle cx="11" cy="6" fill={color} r="4"/>
	<Path d="M14.5126 21.4874C15.0251 22 15.8501 22 17.5 22C19.1499 22 19.9749 22 20.4874 21.4874C21 20.9749 21 20.1499 21 18.5C21 16.8501 21 16.0251 20.4874 15.5126C19.9749 15 19.1499 15 17.5 15C15.8501 15 15.0251 15 14.5126 15.5126C14 16.0251 14 16.8501 14 18.5C14 20.1499 14 20.9749 14.5126 21.4874ZM16.5266 19.9765C15.8245 19.4738 15 18.8833 15 17.8598C15 16.7299 16.375 15.9285 17.5 17.0148C18.625 15.9285 20 16.7299 20 17.8598C20 18.8833 19.1755 19.4738 18.4734 19.9765C18.4005 20.0287 18.3288 20.08 18.2596 20.1308C18 20.3209 17.75 20.5 17.5 20.5C17.25 20.5 17 20.3209 16.7404 20.1308C16.6712 20.08 16.5995 20.0287 16.5266 19.9765Z" fill={color} fillRule="evenodd"/>
	<Path d="M14.5942 21.5625C14.5661 21.5388 14.5389 21.5138 14.5126 21.4874C14 20.9749 14 20.1499 14 18.5C14 16.8501 14 16.0251 14.5126 15.5126C15.0251 15 15.8501 15 17.5 15C17.6501 15 17.7933 15 17.9301 15.0004C16.547 13.6551 13.9614 12.75 11 12.75C6.58172 12.75 3 14.7647 3 17.25C3 19.7353 3 21.75 11 21.75C12.4426 21.75 13.625 21.6845 14.5942 21.5625Z" fill={color} opacity="0.5"/>
</Svg>;

export default BoldDuotoneUserHeart;