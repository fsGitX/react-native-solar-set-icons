import * as React from "react"
import Svg, { Path } from "react-native-svg";
    
const LineDuotoneFoodLadle = ({
    size = 24,
    color = "#1f2937",
    stroke = 2,
    ...props
    }) => <Svg height={size} width={size} fill="none" viewBox="0 0 24 24" strokeWidth={stroke} xmlns="http://www.w3.org/2000/svg" {...props}>
	<Path d="M2 5.68421C2 3.64948 3.64948 2 5.68421 2C7.71894 2 9.36842 3.64948 9.36842 5.68421V15" opacity="0.5" stroke="black" strokeLinecap="round" strokeWidth="1.5"/>
	<Path d="M22 14.5V15.6842C22 19.1723 19.1723 22 15.6842 22C12.1961 22 9.36841 19.1723 9.36841 15.6842V14.6316M22 14.5C22 15.8807 19.0539 17 16 17C12.9461 17 9.36841 16.0123 9.36841 14.6316M22 14.5C22 13.1193 19.0539 12 16 12C12.9461 12 9.36841 13.2509 9.36841 14.6316" stroke="black" strokeWidth="1.5"/>
</Svg>;

export default LineDuotoneFoodLadle;
