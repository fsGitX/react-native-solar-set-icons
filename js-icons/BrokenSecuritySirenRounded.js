import * as React from "react"
import Svg, { Path } from "react-native-svg";
    
const BrokenSecuritySirenRounded = ({
    size = 24,
    color = "#1f2937",
    stroke = 2,
    ...props
    }) => <Svg height={size} width={size} fill="none" viewBox="0 0 24 24" strokeWidth={stroke} xmlns="http://www.w3.org/2000/svg" {...props}>
	<Path d="M20 22V16C20 11.5817 16.4183 8 12 8C9.03887 8 6.4535 9.60879 5.07026 12M4 22V16" stroke="black" strokeLinecap="round" strokeWidth="1.5"/>
	<Path d="M14.2905 11.5C15.2932 11.9059 16.0939 12.7065 16.4998 13.7092" stroke="black" strokeLinecap="round" strokeWidth="1.5"/>
	<Path d="M12 2V5" stroke="black" strokeLinecap="round" strokeWidth="1.5"/>
	<Path d="M21 6L19.5 7.5" stroke="black" strokeLinecap="round" strokeWidth="1.5"/>
	<Path d="M3 6L4.5 7.5" stroke="black" strokeLinecap="round" strokeWidth="1.5"/>
	<Path d="M13.5 17.5C13.5 18.3284 12.8284 19 12 19C11.1716 19 10.5 18.3284 10.5 17.5C10.5 16.6716 11.1716 16 12 16C12.8284 16 13.5 16.6716 13.5 17.5Z" stroke="black" strokeWidth="1.5"/>
	<Path d="M12 19V22" stroke="black" strokeLinecap="round" strokeWidth="1.5"/>
	<Path d="M2 22H14M22 22H18" stroke="black" strokeLinecap="round" strokeWidth="1.5"/>
</Svg>;

export default BrokenSecuritySirenRounded;
