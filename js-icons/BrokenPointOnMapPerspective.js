import * as React from "react"
import Svg, { Path } from "react-native-svg";
    
const BrokenPointOnMapPerspective = ({
    size = 24,
    color = "#1f2937",
    stroke = 2,
    ...props
    }) => <Svg height={size} width={size} fill="none" viewBox="0 0 24 24" strokeWidth={stroke} xmlns="http://www.w3.org/2000/svg" {...props}>
	<Path d="M2 16C2 18.8284 2 20.2426 2.87868 21.1213C3.75736 22 5.17157 22 8 22H16C18.8284 22 20.2426 22 21.1213 21.1213C22 20.2426 22 18.8284 22 16C22 13.1716 22 11.7574 21.1213 10.8787C20.2426 10 18.8284 10 16 10L8 10C5.17157 10 3.75736 10 2.87868 10.8787C2.57888 11.1785 2.38137 11.5406 2.25125 12" stroke="black" strokeLinecap="round" strokeWidth="1.5"/>
	<Path d="M21 21L17.236 18.9089M3 11L14 17.1111" stroke="black" strokeLinecap="round" strokeWidth="1.5"/>
	<Path d="M3.5 21L9.85786 17.2601L12 16" stroke="black" strokeLinecap="round" strokeWidth="1.5"/>
	<Path d="M17 13L17 8" stroke="black" strokeLinecap="round" strokeWidth="1.5"/>
	<Path d="M16.5 2.04148C16.6626 2.0142 16.8296 2 17 2C18.6569 2 20 3.34315 20 5C20 6.65685 18.6569 8 17 8C15.3431 8 14 6.65685 14 5C14 4.82964 14.0142 4.6626 14.0415 4.5" stroke="black" strokeLinecap="round" strokeWidth="1.5"/>
</Svg>;

export default BrokenPointOnMapPerspective;
