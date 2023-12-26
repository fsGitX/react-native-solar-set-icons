import * as React from "react"
import Svg, { Path } from "react-native-svg";
    
const BrokenArrowsActionUndoLeftRound = ({
    size = 24,
    color = "#1f2937",
    stroke = 2,
    ...props
    }) => <Svg height={size} width={size} fill="none" viewBox="0 0 24 24" strokeWidth={stroke} xmlns="http://www.w3.org/2000/svg" {...props}>
	<Path d="M4 7H15C17.7614 7 20 9.23857 20 12C20 14.7614 17.7614 17 15 17M4 7L7 4M4 7L7 10M8.00001 17H11" stroke="black" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5"/>
</Svg>;

export default BrokenArrowsActionUndoLeftRound;
