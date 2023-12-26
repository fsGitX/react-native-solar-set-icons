import * as React from "react"
import Svg, { Path } from "react-native-svg";
    
const BoldDuotoneTextFormattingTextSquare = ({
    size = 24,
    color = "#1f2937",
    stroke = 2,
    ...props
    }) => <Svg height={size} width={size} fill="none" viewBox="0 0 24 24" strokeWidth={stroke} xmlns="http://www.w3.org/2000/svg" {...props}>
	<Path d="M2 12C2 7.28595 2 4.92893 3.46447 3.46447C4.92893 2 7.28595 2 12 2C16.714 2 19.0711 2 20.5355 3.46447C22 4.92893 22 7.28595 22 12C22 16.714 22 19.0711 20.5355 20.5355C19.0711 22 16.714 22 12 22C7.28595 22 4.92893 22 3.46447 20.5355C2 19.0711 2 16.714 2 12Z" fill={color} opacity="0.5"/>
	<Path d="M9.95197 6.25001C9.52212 6.24994 9.12024 6.24987 8.79192 6.29892C8.42103 6.35433 8.04 6.48531 7.73543 6.82372C7.44103 7.15083 7.3371 7.54062 7.29205 7.91295C7.24993 8.26097 7.24997 8.69239 7.25 9.17955L7.25 9.75001C7.25 10.1642 7.58579 10.5 8 10.5C8.41422 10.5 8.75 10.1642 8.75 9.75001V9.22223C8.75 8.67932 8.7513 8.34012 8.78118 8.09314C8.79521 7.97726 8.81273 7.91049 8.8269 7.87222C8.83886 7.83994 8.8474 7.83047 8.85023 7.82732L8.85104 7.82638C8.85241 7.82474 8.85341 7.82354 8.86242 7.81941C8.87905 7.81181 8.92169 7.79618 9.01354 7.78246C9.21765 7.75197 9.50512 7.75001 10 7.75001H11.25V16.25H9.5C9.08579 16.25 8.75 16.5858 8.75 17C8.75 17.4142 9.08579 17.75 9.5 17.75H15C15.4142 17.75 15.75 17.4142 15.75 17C15.75 16.5858 15.4142 16.25 15 16.25H12.75V7.75001H14C14.4949 7.75001 14.7824 7.75197 14.9865 7.78246C15.0783 7.79618 15.121 7.81181 15.1376 7.81941C15.1466 7.82354 15.1476 7.82474 15.149 7.82638L15.1496 7.82717C15.1525 7.83032 15.1612 7.83994 15.1731 7.87222C15.1873 7.91049 15.2048 7.97726 15.2188 8.09314C15.2487 8.34012 15.25 8.67932 15.25 9.22223V9.75001C15.25 10.1642 15.5858 10.5 16 10.5C16.4142 10.5 16.75 10.1642 16.75 9.75001L16.75 9.17954V9.17953C16.75 8.69239 16.7501 8.26096 16.708 7.91295C16.6629 7.54062 16.559 7.15083 16.2646 6.82372C15.96 6.48531 15.579 6.35433 15.2081 6.29892C14.8798 6.24987 14.4779 6.24994 14.048 6.25001H9.95197Z" fill={color}/>
</Svg>;

export default BoldDuotoneTextFormattingTextSquare;
