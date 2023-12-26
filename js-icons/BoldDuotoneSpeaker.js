import * as React from "react"
import Svg, { Path } from "react-native-svg";
    
const BoldDuotoneSpeaker = ({
    size = 24,
    color = "#1f2937",
    stroke = 2,
    ...props
    }) => <Svg height={size} width={size} fill="none" viewBox="0 0 24 24" strokeWidth={stroke} xmlns="http://www.w3.org/2000/svg" {...props}>
	<Path d="M4 10C4 6.22876 4 4.34315 5.17157 3.17157C6.34315 2 8.22876 2 12 2C15.7712 2 17.6569 2 18.8284 3.17157C20 4.34315 20 6.22876 20 10V14C20 17.7712 20 19.6569 18.8284 20.8284C17.6569 22 15.7712 22 12 22C8.22876 22 6.34315 22 5.17157 20.8284C4 19.6569 4 17.7712 4 14V10Z" fill={color} opacity="0.5"/>
	<Path d="M12 4.75C10.4812 4.75 9.25 5.98122 9.25 7.5C9.25 9.01878 10.4812 10.25 12 10.25C13.5188 10.25 14.75 9.01878 14.75 7.5C14.75 5.98122 13.5188 4.75 12 4.75Z" fill={color} fillRule="evenodd"/>
	<Path d="M8.25 15.5C8.25 13.4289 9.92893 11.75 12 11.75C14.0711 11.75 15.75 13.4289 15.75 15.5C15.75 17.5711 14.0711 19.25 12 19.25C9.92893 19.25 8.25 17.5711 8.25 15.5Z" fill={color} fillRule="evenodd"/>
</Svg>;

export default BoldDuotoneSpeaker;
