import * as React from "react"
import Svg, { Path } from "react-native-svg";
    
const LinearElectronicTurntableMinimalistic = ({
    size = 24,
    color = "#1f2937",
    stroke = 2,
    ...props
    }) => <Svg height={size} width={size} fill="none" viewBox="0 0 24 24" strokeWidth={stroke} xmlns="http://www.w3.org/2000/svg" {...props}>
	<Path d="M2 12C2 7.28595 2 4.92893 3.46447 3.46447C4.92893 2 7.28595 2 12 2C16.714 2 19.0711 2 20.5355 3.46447C22 4.92893 22 7.28595 22 12C22 16.714 22 19.0711 20.5355 20.5355C19.0711 22 16.714 22 12 22C7.28595 22 4.92893 22 3.46447 20.5355C2 19.0711 2 16.714 2 12Z" stroke="black" strokeWidth="1.5"/>
	<Path d="M14 10.5L16.5547 8.79687C16.8329 8.6114 17 8.29917 17 7.96482V2.5" stroke="black" strokeLinecap="round" strokeWidth="1.5"/>
	<Path d="M17 12C17 14.7614 14.7614 17 12 17C9.23858 17 7 14.7614 7 12C7 9.23858 9.23858 7 12 7C12.5226 7 13.0265 7.08018 13.5 7.2289" stroke="black" strokeLinecap="round" strokeWidth="1.5"/>
	<Path d="M12 14C10.8954 14 10 13.1046 10 12" stroke="black" strokeLinecap="round" strokeWidth="1.5"/>
</Svg>;

export default LinearElectronicTurntableMinimalistic;
