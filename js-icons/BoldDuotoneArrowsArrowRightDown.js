import * as React from "react"
import Svg, { Path } from "react-native-svg";
    
const BoldDuotoneArrowsArrowRightDown = ({
    size = 24,
    color = "#1f2937",
    stroke = 2,
    ...props
    }) => <Svg height={size} width={size} fill="none" viewBox="0 0 24 24" strokeWidth={stroke} xmlns="http://www.w3.org/2000/svg" {...props}>
	<Path d="M17.4697 8.46969C17.6842 8.25519 18.0068 8.19103 18.287 8.30711C18.5673 8.4232 18.75 8.69668 18.75 9.00002V18C18.75 18.4142 18.4142 18.75 18 18.75L9.00002 18.75C8.69668 18.75 8.4232 18.5673 8.30711 18.287C8.19103 18.0068 8.25519 17.6842 8.46969 17.4697L17.4697 8.46969Z" fill={color} fillRule="evenodd"/>
	<Path d="M5.46967 6.53033C5.17678 6.23744 5.17678 5.76256 5.46967 5.46967C5.76256 5.17678 6.23744 5.17678 6.53033 5.46967L13.5 12.4393L12.4393 13.5L5.46967 6.53033Z" fill={color} opacity="0.5"/>
</Svg>;

export default BoldDuotoneArrowsArrowRightDown;
