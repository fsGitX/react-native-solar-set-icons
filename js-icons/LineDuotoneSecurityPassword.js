import * as React from "react"
import Svg, { Path } from "react-native-svg";
    
const LineDuotoneSecurityPassword = ({
    size = 24,
    color = "#1f2937",
    stroke = 2,
    ...props
    }) => <Svg height={size} width={size} fill="none" viewBox="0 0 24 24" strokeWidth={stroke} xmlns="http://www.w3.org/2000/svg" {...props}>
	<Path d="M2 12C2 8.22876 2 6.34315 3.17157 5.17157C4.34315 4 6.22876 4 10 4H14C17.7712 4 19.6569 4 20.8284 5.17157C22 6.34315 22 8.22876 22 12C22 15.7712 22 17.6569 20.8284 18.8284C19.6569 20 17.7712 20 14 20H10C6.22876 20 4.34315 20 3.17157 18.8284C2 17.6569 2 15.7712 2 12Z" opacity="0.5" stroke="black" strokeWidth="1.5"/>
	<Path d="M12 10V14M10.2676 11L13.7317 13M13.7314 11L10.2673 13" stroke="black" strokeLinecap="round" strokeWidth="1.5"/>
	<Path d="M6.73241 10V14M4.99999 11L8.46409 13M8.46386 11L4.99976 13" stroke="black" strokeLinecap="round" strokeWidth="1.5"/>
	<Path d="M17.2681 10V14M15.5356 11L18.9997 13M18.9995 11L15.5354 13" stroke="black" strokeLinecap="round" strokeWidth="1.5"/>
</Svg>;

export default LineDuotoneSecurityPassword;
