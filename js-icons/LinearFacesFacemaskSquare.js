import * as React from "react"
import Svg, { Path } from "react-native-svg";
    
const LinearFacesFacemaskSquare = ({
    size = 24,
    color = "#1f2937",
    stroke = 2,
    ...props
    }) => <Svg height={size} width={size} fill="none" viewBox="0 0 24 24" strokeWidth={stroke} xmlns="http://www.w3.org/2000/svg" {...props}>
	<Path d="M2 12C2 7.28595 2 4.92893 3.46447 3.46447C4.92893 2 7.28595 2 12 2C16.714 2 19.0711 2 20.5355 3.46447C22 4.92893 22 7.28595 22 12C22 16.714 22 19.0711 20.5355 20.5355C19.0711 22 16.714 22 12 22C7.28595 22 4.92893 22 3.46447 20.5355C2 19.0711 2 16.714 2 12Z" stroke="black" strokeWidth="1.5"/>
	<Path d="M16.5 21.5001L17 15.0001L13.857 13.7429C12.6649 13.266 11.3351 13.266 10.143 13.7429L7 15.0001L7.5 21.5001" stroke="black" strokeLinecap="round" strokeWidth="1.5"/>
	<Path d="M7 15L2.5 13" stroke="black" strokeLinecap="round" strokeWidth="1.5"/>
	<Path d="M7 19L3.5 20.5" stroke="black" strokeLinecap="round" strokeWidth="1.5"/>
	<Path d="M17 15L21.5 13" stroke="black" strokeLinecap="round" strokeWidth="1.5"/>
	<Path d="M17 19L20.5 20.5" stroke="black" strokeLinecap="round" strokeWidth="1.5"/>
	<ellipse cx="15" cy="10.5" fill={color} rx="1" ry="1.5"/>
	<ellipse cx="9" cy="10.5" fill={color} rx="1" ry="1.5"/>
</Svg>;

export default LinearFacesFacemaskSquare;
