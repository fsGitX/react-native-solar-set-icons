import * as React from "react"
import Svg, { Path } from "react-native-svg";
    
const BrokenArrowsRoundSortHorizontal = ({
    size = 24,
    color = "#1f2937",
    stroke = 2,
    ...props
    }) => <Svg height={size} width={size} fill="none" viewBox="0 0 24 24" strokeWidth={stroke} xmlns="http://www.w3.org/2000/svg" {...props}>
	<Path d="M16 9.5L8 9.5M8 9.5L10.75 7M8 9.5L10.75 12" stroke="black" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5"/>
	<Path d="M8 14.5L16 14.5M16 14.5L13.25 12M16 14.5L13.25 17" stroke="black" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5"/>
	<Path d="M7 3.33782C8.47087 2.48697 10.1786 2 12 2C17.5228 2 22 6.47715 22 12C22 17.5228 17.5228 22 12 22C6.47715 22 2 17.5228 2 12C2 10.1786 2.48697 8.47087 3.33782 7" stroke="black" strokeLinecap="round" strokeWidth="1.5"/>
</Svg>;

export default BrokenArrowsRoundSortHorizontal;
