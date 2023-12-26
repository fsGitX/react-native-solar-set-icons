import * as React from "react"
import Svg, { Path } from "react-native-svg";
    
const LinearSecuritySiren = ({
    size = 24,
    color = "#1f2937",
    stroke = 2,
    ...props
    }) => <Svg height={size} width={size} fill="none" viewBox="0 0 24 24" strokeWidth={stroke} xmlns="http://www.w3.org/2000/svg" {...props}>
	<Path d="M20 22V16C20 13.1997 20 11.7996 19.455 10.73C18.9757 9.78924 18.2108 9.02433 17.27 8.54497C16.2004 8 14.8003 8 12 8C9.19974 8 7.79961 8 6.73005 8.54497C5.78924 9.02433 5.02433 9.78924 4.54497 10.73C4 11.7996 4 13.1997 4 16V22" stroke="black" strokeWidth="1.5"/>
	<Path d="M15 10.8149C16.2299 10.8149 17.2299 11.77 17.185 13" stroke="black" strokeLinecap="round" strokeWidth="1.5"/>
	<Path d="M2 22H22" stroke="black" strokeLinecap="round" strokeWidth="1.5"/>
	<Path d="M12 2V5" stroke="black" strokeLinecap="round" strokeWidth="1.5"/>
	<Path d="M21 5L19.5 6.5" stroke="black" strokeLinecap="round" strokeWidth="1.5"/>
	<Path d="M3 5L4.5 6.5" stroke="black" strokeLinecap="round" strokeWidth="1.5"/>
	<Path d="M13.5 17.5C13.5 18.3284 12.8284 19 12 19C11.1716 19 10.5 18.3284 10.5 17.5C10.5 16.6716 11.1716 16 12 16C12.8284 16 13.5 16.6716 13.5 17.5Z" stroke="black" strokeWidth="1.5"/>
	<Path d="M12 19V22" stroke="black" strokeLinecap="round" strokeWidth="1.5"/>
</Svg>;

export default LinearSecuritySiren;
