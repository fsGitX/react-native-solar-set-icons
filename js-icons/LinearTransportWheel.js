import * as React from "react"
import Svg, { Path } from "react-native-svg";
    
const LinearTransportWheel = ({
    size = 24,
    color = "#1f2937",
    stroke = 2,
    ...props
    }) => <Svg height={size} width={size} fill="none" viewBox="0 0 24 24" strokeWidth={stroke} xmlns="http://www.w3.org/2000/svg" {...props}>
	<circle cx="12" cy="12" r="10" stroke="#1C274C" strokeWidth="1.5"/>
	<circle cx="12" cy="12" r="6" stroke="#1C274C" strokeWidth="1.5"/>
	<circle cx="12" cy="12" r="2" stroke="#1C274C" strokeWidth="1.5"/>
	<Path d="M6 12L10 12" stroke="#1C274C" strokeLinecap="round" strokeWidth="1.5"/>
	<Path d="M14 12L18 12" stroke="#1C274C" strokeLinecap="round" strokeWidth="1.5"/>
	<Path d="M9 17.1963L11 13.7322" stroke="#1C274C" strokeLinecap="round" strokeWidth="1.5"/>
	<Path d="M13 10.2681L15 6.80396" stroke="#1C274C" strokeLinecap="round" strokeWidth="1.5"/>
	<Path d="M15 17.1963L13 13.7322" stroke="#1C274C" strokeLinecap="round" strokeWidth="1.5"/>
	<Path d="M11 10.2681L9 6.80396" stroke="#1C274C" strokeLinecap="round" strokeWidth="1.5"/>
</Svg>;

export default LinearTransportWheel;
