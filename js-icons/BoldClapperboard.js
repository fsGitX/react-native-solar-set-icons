import * as React from "react"
import Svg, { Path } from "react-native-svg";
    
const BoldClapperboard = ({
    size = 24,
    color = "#1f2937",
    stroke = 2,
    ...props
    }) => <Svg height={size} width={size} fill="none" viewBox="0 0 24 24" strokeWidth={stroke} xmlns="http://www.w3.org/2000/svg" {...props}>
	<Path d="M10.0957 2.00445C6.62194 2.03072 4.71683 2.2121 3.46447 3.46447C2.6068 4.32213 2.25143 5.48593 2.10418 7.25002H6.59861L10.0957 2.00445Z" fill={color}/>
	<Path d="M2.02644 8.75002C2 9.68875 2 10.7633 2 12C2 16.714 2 19.0711 3.46447 20.5355C4.92893 22 7.28595 22 12 22C16.714 22 19.0711 22 20.5355 20.5355C22 19.0711 22 16.714 22 12C22 10.7633 22 9.68875 21.9736 8.75002H2.02644Z" fill={color}/>
	<Path d="M21.8958 7.25002C21.7486 5.48593 21.3932 4.32213 20.5355 3.46447C19.9382 2.86714 19.1924 2.51345 18.1987 2.30403L14.9014 7.25002H21.8958Z" fill={color}/>
	<Path d="M16.5401 2.08783C15.3293 2 13.8452 2 12 2C11.967 2 11.9342 2 11.9014 2L8.40139 7.25002H13.0986L16.5401 2.08783Z" fill={color}/>
</Svg>;

export default BoldClapperboard;
