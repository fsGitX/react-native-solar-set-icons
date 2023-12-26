import * as React from "react"
import Svg, { Path } from "react-native-svg";
    
const LinearFacemaskCircle = ({
    size = 24,
    color = "#1f2937",
    stroke = 2,
    ...props
    }) => <Svg height={size} width={size} fill="none" viewBox="0 0 24 24" strokeWidth={stroke} xmlns="http://www.w3.org/2000/svg" {...props}>
	<circle cx="12" cy="12" r="10" stroke="black" strokeWidth="1.5"/>
	<Path d="M16.5 20.5001L17 15.0001L13.857 13.7429C12.6649 13.266 11.3351 13.266 10.143 13.7429L7 15.0001L7.5 20.5001" stroke="black" strokeLinecap="round" strokeWidth="1.5"/>
	<Path d="M7 15L2.5 13" stroke="black" strokeLinecap="round" strokeWidth="1.5"/>
	<Path d="M17 15L21.5 13" stroke="black" strokeLinecap="round" strokeWidth="1.5"/>
	<ellipse cx="15" cy="10.5" fill={color} rx="1" ry="1.5"/>
	<ellipse cx="9" cy="10.5" fill={color} rx="1" ry="1.5"/>
</Svg>;

export default LinearFacemaskCircle;
