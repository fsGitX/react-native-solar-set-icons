import * as React from "react"
import Svg, { Path } from "react-native-svg";
    
const LinearCardSearch = ({
    size = 24,
    color = "#1f2937",
    stroke = 2,
    ...props
    }) => <Svg height={size} width={size} fill="none" viewBox="0 0 24 24" strokeWidth={stroke} xmlns="http://www.w3.org/2000/svg" {...props}>
	<Path d="M22 13V12C22 8.22876 22 6.34315 20.8284 5.17157C19.6569 4 17.7712 4 14 4H10C6.22876 4 4.34315 4 3.17157 5.17157C2 6.34315 2 8.22876 2 12C2 15.7712 2 17.6569 3.17157 18.8284C4.34315 20 6.22876 20 10 20H13" stroke="black" strokeLinecap="round" strokeWidth="1.5"/>
	<Path d="M10 16H6" stroke="black" strokeLinecap="round" strokeWidth="1.5"/>
	<Path d="M2 10L22 10" stroke="black" strokeLinecap="round" strokeWidth="1.5"/>
	<Path d="M20.5 19.5L21.5 20.5" stroke="black" strokeLinecap="round" strokeWidth="1.5"/>
	<circle cx="18" cy="17" r="3" stroke="black" strokeWidth="1.5"/>
</Svg>;

export default LinearCardSearch;
