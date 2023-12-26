import * as React from "react"
import Svg, { Path } from "react-native-svg";
    
const BoldDuotoneVideoClapperboardPlay = ({
    size = 24,
    color = "#1f2937",
    stroke = 2,
    ...props
    }) => <Svg height={size} width={size} fill="none" viewBox="0 0 24 24" strokeWidth={stroke} xmlns="http://www.w3.org/2000/svg" {...props}>
	<Path d="M2 12C2 10.7632 2 9.68872 2.02644 8.75H21.9736C22 9.68872 22 10.7632 22 12C22 16.714 22 19.071 20.5355 20.5355C19.0711 22 16.714 22 12 22C7.28595 22 4.92893 22 3.46447 20.5355C2 19.071 2 16.714 2 12Z" fill={color} fillRule="evenodd" opacity="0.5"/>
	<Path d="M15 14.5C15 13.8666 14.338 13.4395 13.014 12.5852C11.6719 11.7193 11.0008 11.2863 10.5004 11.6042C10 11.9221 10 12.7814 10 14.5C10 16.2186 10 17.0779 10.5004 17.3958C11.0008 17.7137 11.6719 17.2807 13.014 16.4148C14.338 15.5605 15 15.1334 15 14.5Z" fill={color}/>
	<Path d="M11.9998 2C13.845 2 15.3291 2 16.5399 2.08783L13.0984 7.25002H8.40121L11.9012 2H11.9998Z" fill={color}/>
	<Path d="M3.46429 3.46447C4.71666 2.2121 6.62176 2.03072 10.0955 2.00445L6.59844 7.25002H2.104C2.25125 5.48593 2.60663 4.32213 3.46429 3.46447Z" fill={color}/>
	<Path d="M21.8956 7.25002C21.7484 5.48593 21.393 4.32213 20.5354 3.46447C19.938 2.86714 19.1922 2.51345 18.1985 2.30403L14.9012 7.25002H21.8956Z" fill={color}/>
</Svg>;

export default BoldDuotoneVideoClapperboardPlay;
