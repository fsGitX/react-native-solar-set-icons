import * as React from "react"
import Svg, { Path } from "react-native-svg";
    
const LinearFacesConfoundedCircle = ({
    size = 24,
    color = "#1f2937",
    stroke = 2,
    ...props
    }) => <Svg height={size} width={size} fill="none" viewBox="0 0 24 24" strokeWidth={stroke} xmlns="http://www.w3.org/2000/svg" {...props}>
	<circle cx="12" cy="12" r="10" stroke="black" strokeWidth="1.5"/>
	<Path d="M8 12L10 10.5L8 9" stroke="black" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5"/>
	<Path d="M16 12L14 10.5L16 9" stroke="black" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5"/>
	<Path d="M16 16L14.6667 15L13.3333 16L12 15L10.6667 16L9.33333 15L8 16" stroke="black" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5"/>
</Svg>;

export default LinearFacesConfoundedCircle;
