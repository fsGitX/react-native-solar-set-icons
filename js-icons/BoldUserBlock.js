import * as React from "react"
import Svg, { Path } from "react-native-svg";
    
const BoldUserBlock = ({
    size = 24,
    color = "#1f2937",
    stroke = 2,
    ...props
    }) => <Svg height={size} width={size} fill="none" viewBox="0 0 24 24" strokeWidth={stroke} xmlns="http://www.w3.org/2000/svg" {...props}>
	<Path d="M16.5 15.75C14.9812 15.75 13.75 16.9812 13.75 18.5C13.75 19.0004 13.8832 19.4691 14.1167 19.8732L17.8732 16.1167C17.4691 15.8832 17.0004 15.75 16.5 15.75ZM18.9196 17.1916L15.1916 20.9196C15.5806 21.1305 16.0261 21.25 16.5 21.25C18.0188 21.25 19.25 20.0188 19.25 18.5C19.25 18.0261 19.1305 17.5806 18.9196 17.1916ZM12.25 18.5C12.25 16.1528 14.1528 14.25 16.5 14.25C17.689 14.25 18.7652 14.7393 19.5357 15.5256C20.2861 16.2914 20.75 17.3423 20.75 18.5C20.75 20.8472 18.8472 22.75 16.5 22.75C15.3423 22.75 14.2914 22.2861 13.5256 21.5357C12.7393 20.7652 12.25 19.689 12.25 18.5Z" fill={color} fillRule="evenodd"/>
	<Path d="M16 6C16 8.20914 14.2091 10 12 10C9.79086 10 8 8.20914 8 6C8 3.79086 9.79086 2 12 2C14.2091 2 16 3.79086 16 6Z" fill={color}/>
	<Path d="M14.2951 13.1879C12.2137 14.0529 10.75 16.1055 10.75 18.5C10.75 19.8163 11.1943 21.0315 11.9378 22C4 21.9895 4 19.9788 4 17.5C4 15.0147 7.58172 13 12 13C12.7977 13 13.5681 13.0657 14.2951 13.1879Z" fill={color}/>
</Svg>;

export default BoldUserBlock;
