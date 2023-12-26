import * as React from "react"
import Svg, { Path } from "react-native-svg";
    
const LinearArrowsActionSquareBottomUp = ({
    size = 24,
    color = "#1f2937",
    stroke = 2,
    ...props
    }) => <Svg height={size} width={size} fill="none" viewBox="0 0 24 24" strokeWidth={stroke} xmlns="http://www.w3.org/2000/svg" {...props}>
	<Path d="M13 21.9994C17.055 21.9921 19.1785 21.8926 20.5355 20.5355C22 19.0711 22 16.714 22 12C22 7.28595 22 4.92893 20.5355 3.46447C19.071 2 16.714 2 12 2C7.28593 2 4.9289 2 3.46444 3.46447C2.10741 4.8215 2.00785 6.94493 2.00055 11" stroke="black" strokeLinecap="round" strokeWidth="1.5"/>
	<Path d="M3 21L11 13M11 13H5M11 13V19" stroke="black" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5"/>
</Svg>;

export default LinearArrowsActionSquareBottomUp;
