import * as React from "react"
import Svg, { Path } from "react-native-svg";
    
const LineDuotoneUndoLeftRoundSquare = ({
    size = 24,
    color = "#1f2937",
    stroke = 2,
    ...props
    }) => <Svg height={size} width={size} fill="none" viewBox="0 0 24 24" strokeWidth={stroke} xmlns="http://www.w3.org/2000/svg" {...props}>
	<Path d="M6.5 9.49977H14.0385C15.9502 9.49977 17.5 11.0496 17.5 12.9613C17.5 14.8731 15.9502 16.4229 14.0385 16.4229H9.5M6.5 9.49977L8.75 7.42285M6.5 9.49977L8.75 11.5767" stroke="black" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5"/>
	<Path d="M2 12C2 7.28595 2 4.92893 3.46447 3.46447C4.92893 2 7.28595 2 12 2C16.714 2 19.0711 2 20.5355 3.46447C22 4.92893 22 7.28595 22 12C22 16.714 22 19.0711 20.5355 20.5355C19.0711 22 16.714 22 12 22C7.28595 22 4.92893 22 3.46447 20.5355C2 19.0711 2 16.714 2 12Z" opacity="0.5" stroke="black" strokeWidth="1.5"/>
</Svg>;

export default LineDuotoneUndoLeftRoundSquare;
