import * as React from "react"
import Svg, { Path } from "react-native-svg";
    
const BrokenElectronicTurntable = ({
    size = 24,
    color = "#1f2937",
    stroke = 2,
    ...props
    }) => <Svg height={size} width={size} fill="none" viewBox="0 0 24 24" strokeWidth={stroke} xmlns="http://www.w3.org/2000/svg" {...props}>
	<Path d="M15 17L15.8944 16.5528C16.572 16.214 17 15.5215 17 14.7639V10.5" stroke="black" strokeLinecap="round" strokeWidth="1.5"/>
	<Path d="M15.5 9C15.5 8.17157 16.1716 7.5 17 7.5C17.8284 7.5 18.5 8.17157 18.5 9C18.5 9.82843 17.8284 10.5 17 10.5C16.1716 10.5 15.5 9.82843 15.5 9Z" stroke="black" strokeWidth="1.5"/>
	<Path d="M22 12C22 16.714 22 19.0711 20.5355 20.5355C19.0711 22 16.714 22 12 22C7.28595 22 4.92893 22 3.46447 20.5355C2 19.0711 2 16.714 2 12C2 7.28595 2 4.92893 3.46447 3.46447C4.92893 2 7.28595 2 12 2C16.714 2 19.0711 2 20.5355 3.46447C21.5093 4.43821 21.8356 5.80655 21.9449 8" stroke="black" strokeLinecap="round" strokeWidth="1.5"/>
	<rect height="8" width="8" rx="4" stroke="black" strokeWidth="1.5" x="6" y="8"/>
</Svg>;

export default BrokenElectronicTurntable;
