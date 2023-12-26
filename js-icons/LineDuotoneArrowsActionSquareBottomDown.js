import * as React from "react"
import Svg, { Path } from "react-native-svg";
    
const LineDuotoneArrowsActionSquareBottomDown = ({
    size = 24,
    color = "#1f2937",
    stroke = 2,
    ...props
    }) => <Svg height={size} width={size} fill="none" viewBox="0 0 24 24" strokeWidth={stroke} xmlns="http://www.w3.org/2000/svg" {...props}>
	<Path d="M13 21.9994C17.0551 21.9921 19.1785 21.8926 20.5356 20.5355C22 19.0711 22 16.714 22 12C22 7.28595 22 4.92893 20.5356 3.46447C19.0711 2 16.7141 2 12 2C7.28599 2 4.92896 2 3.4645 3.46447C2.10747 4.8215 2.00791 6.94493 2.00061 11" opacity="0.5" stroke="black" strokeLinecap="round" strokeWidth="1.5"/>
	<Path d="M11 13L3 21M3 21H9M3 21V15" stroke="black" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5"/>
</Svg>;

export default LineDuotoneArrowsActionSquareBottomDown;
