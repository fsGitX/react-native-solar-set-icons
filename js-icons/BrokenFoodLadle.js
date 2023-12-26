import * as React from "react"
import Svg, { Path } from "react-native-svg";
    
const BrokenFoodLadle = ({
    size = 24,
    color = "#1f2937",
    stroke = 2,
    ...props
    }) => <Svg height={size} width={size} fill="none" viewBox="0 0 24 24" strokeWidth={stroke} xmlns="http://www.w3.org/2000/svg" {...props}>
	<Path d="M2 5.68421C2 3.64948 3.64948 2 5.68421 2C7.71894 2 9.36842 3.64948 9.36842 5.68421M22 14.5V15.6842C22 19.1723 19.1723 22 15.6842 22C12.1961 22 9.36842 19.1723 9.36842 15.6842V14.6316V9.1579" stroke="black" strokeLinecap="round" strokeWidth="1.5"/>
	<Path d="M16 12C12.9461 12 9.5 13.1193 9.5 14.5C9.5 15.8807 12.9461 17 16 17C19.0539 17 22 15.8807 22 14.5C22 13.7802 21.1993 13.1314 20 12.6753" stroke="black" strokeLinecap="round" strokeWidth="1.5"/>
</Svg>;

export default BrokenFoodLadle;
