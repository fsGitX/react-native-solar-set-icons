import * as React from "react"
import Svg, { Path } from "react-native-svg";
    
const BrokenXXX = ({
    size = 24,
    color = "#1f2937",
    stroke = 2,
    ...props
    }) => <Svg height={size} width={size} fill="none" viewBox="0 0 24 24" strokeWidth={stroke} xmlns="http://www.w3.org/2000/svg" {...props}>
	<Path d="M8.5 9L6.5 12M6.5 12L4.5 15M6.5 12L4.5 9M6.5 12L8.5 15M14 9L12 12M12 12L10 15M12 12L10 9M12 12L14 15M19.5 9L17.5 12M17.5 12L15.5 15M17.5 12L15.5 9M17.5 12L19.5 15" stroke="black" strokeLinecap="round" strokeWidth="1.5"/>
	<Path d="M22 12C22 16.714 22 19.0711 20.5355 20.5355C19.0711 22 16.714 22 12 22C7.28595 22 4.92893 22 3.46447 20.5355C2 19.0711 2 16.714 2 12C2 7.28595 2 4.92893 3.46447 3.46447C4.92893 2 7.28595 2 12 2C16.714 2 19.0711 2 20.5355 3.46447C21.5093 4.43821 21.8356 5.80655 21.9449 8" stroke="black" strokeLinecap="round" strokeWidth="1.5"/>
</Svg>;

export default BrokenXXX;
