import * as React from "react"
import Svg, { Path } from "react-native-svg";
    
const BrokenArrowsActionUndoRightRoundSquare = ({
    size = 24,
    color = "#1f2937",
    stroke = 2,
    ...props
    }) => <Svg height={size} width={size} fill="none" viewBox="0 0 24 24" strokeWidth={stroke} xmlns="http://www.w3.org/2000/svg" {...props}>
	<Path d="M17.5 9.50075H9.96155C8.04979 9.50075 6.5 11.0505 6.5 12.9623C6.5 14.874 8.04978 16.4238 9.96154 16.4238H14.5M17.5 9.50075L15.25 7.42383M17.5 9.50075L15.25 11.5777" stroke="black" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5"/>
	<Path d="M22 12C22 16.714 22 19.0711 20.5355 20.5355C19.0711 22 16.714 22 12 22C7.28595 22 4.92893 22 3.46447 20.5355C2 19.0711 2 16.714 2 12C2 7.28595 2 4.92893 3.46447 3.46447C4.92893 2 7.28595 2 12 2C16.714 2 19.0711 2 20.5355 3.46447C21.5093 4.43821 21.8356 5.80655 21.9449 8" stroke="black" strokeLinecap="round" strokeWidth="1.5"/>
</Svg>;

export default BrokenArrowsActionUndoRightRoundSquare;
