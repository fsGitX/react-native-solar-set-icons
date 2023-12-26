import * as React from "react"
import Svg, { Path } from "react-native-svg";
    
const BoldDuotoneChefHat = ({
    size = 24,
    color = "#1f2937",
    stroke = 2,
    ...props
    }) => <Svg height={size} width={size} fill="none" viewBox="0 0 24 24" strokeWidth={stroke} xmlns="http://www.w3.org/2000/svg" {...props}>
	<Path d="M18.9983 18H5.00171C5.0119 19.3969 5.08345 20.9119 5.5858 21.4142C6.17159 22 7.1144 22 9.00002 22H15C16.8856 22 17.8284 22 18.4142 21.4142C18.9166 20.9119 18.9881 19.3969 18.9983 18Z" fill={color}/>
	<Path d="M7 5C4.23858 5 2 7.23858 2 10C2 12.0503 3.2341 13.8124 5 14.584V18H19L19 14.584C20.7659 13.8124 22 12.0503 22 10C22 7.23858 19.7614 5 17 5C16.7495 5 16.5033 5.01842 16.2626 5.05399C15.6604 3.27806 13.9794 2 12 2C10.0206 2 8.33961 3.27806 7.73736 5.05399C7.49673 5.01842 7.25052 5 7 5Z" fill={color} opacity="0.5"/>
</Svg>;

export default BoldDuotoneChefHat;
