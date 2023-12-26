import * as React from "react"
import Svg, { Path } from "react-native-svg";
    
const BrokenListSortFromTopToBottom = ({
    size = 24,
    color = "#1f2937",
    stroke = 2,
    ...props
    }) => <Svg height={size} width={size} fill="none" viewBox="0 0 24 24" strokeWidth={stroke} xmlns="http://www.w3.org/2000/svg" {...props}>
	<Path d="M4 16L13 16" stroke="black" strokeLinecap="round" strokeWidth="1.5"/>
	<Path d="M6 11H13" stroke="black" strokeLinecap="round" strokeWidth="1.5"/>
	<Path d="M8 6L13 6" stroke="black" strokeLinecap="round" strokeWidth="1.5"/>
	<Path d="M17 4L17 20L20 16" stroke="black" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5"/>
</Svg>;

export default BrokenListSortFromTopToBottom;
