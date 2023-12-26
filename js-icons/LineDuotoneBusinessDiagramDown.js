import * as React from "react"
import Svg, { Path } from "react-native-svg";
    
const LineDuotoneBusinessDiagramDown = ({
    size = 24,
    color = "#1f2937",
    stroke = 2,
    ...props
    }) => <Svg height={size} width={size} fill="none" viewBox="0 0 24 24" strokeWidth={stroke} xmlns="http://www.w3.org/2000/svg" {...props}>
	<Path d="M22 22H12C7.28595 22 4.92893 22 3.46447 20.5355C2 19.0711 2 16.714 2 12V2" opacity="0.5" stroke="black" strokeLinecap="round" strokeWidth="1.5"/>
	<Path d="M19.0002 15L15.8821 11.0736C15.4045 10.4722 15.1657 10.1714 14.8916 10.0249C14.47 9.79953 13.9663 9.78857 13.5354 9.99537C13.2551 10.1299 13.0035 10.4199 12.5002 11C11.9968 11.5801 11.7452 11.8701 11.4649 12.0046C11.034 12.2115 10.5303 12.2005 10.1088 11.9752C9.83461 11.8286 9.5958 11.5279 9.11819 10.9265L6 7" stroke="black" strokeLinecap="round" strokeWidth="1.5"/>
</Svg>;

export default LineDuotoneBusinessDiagramDown;
