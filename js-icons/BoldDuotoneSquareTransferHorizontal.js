import * as React from "react"
import Svg, { Path } from "react-native-svg";
    
const BoldDuotoneSquareTransferHorizontal = ({
    size = 24,
    color = "#1f2937",
    stroke = 2,
    ...props
    }) => <Svg height={size} width={size} fill="none" viewBox="0 0 24 24" strokeWidth={stroke} xmlns="http://www.w3.org/2000/svg" {...props}>
	<Path d="M20.5355 20.5355C22 19.0711 22 16.714 22 12C22 7.28595 22 4.92893 20.5355 3.46447C19.0711 2 16.714 2 12 2C7.28595 2 4.92893 2 3.46447 3.46447C2 4.92893 2 7.28595 2 12C2 16.714 2 19.0711 3.46447 20.5355C4.92893 22 7.28595 22 12 22C16.714 22 19.0711 22 20.5355 20.5355Z" fill={color} opacity="0.5"/>
	<Path d="M7.00003 10.75C6.6874 10.75 6.40756 10.5561 6.29779 10.2634C6.18801 9.97063 6.27134 9.64051 6.50688 9.43494L9.94438 6.43494C10.2565 6.16258 10.7302 6.19478 11.0026 6.50686C11.275 6.81894 11.2428 7.29272 10.9307 7.56508L9.00003 9.25001L17 9.25001C17.4142 9.25001 17.75 9.58579 17.75 10C17.75 10.4142 17.4142 10.75 17 10.75L7.00003 10.75Z" fill={color}/>
	<Path d="M13.0694 16.4349C12.7573 16.7073 12.7251 17.1811 12.9975 17.4932C13.2698 17.8052 13.7436 17.8374 14.0557 17.5651L17.4932 14.5651C17.7287 14.3595 17.8121 14.0294 17.7023 13.7367C17.5925 13.4439 17.3127 13.25 17 13.25L7.00003 13.25C6.58582 13.25 6.25003 13.5858 6.25003 14C6.25003 14.4142 6.58582 14.75 7.00003 14.75H15L13.0694 16.4349Z" fill={color}/>
</Svg>;

export default BoldDuotoneSquareTransferHorizontal;
