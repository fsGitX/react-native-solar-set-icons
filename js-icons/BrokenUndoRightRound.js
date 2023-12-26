import * as React from "react"
import Svg, { Path } from "react-native-svg";
    
const BrokenUndoRightRound = ({
    size = 24,
    color = "#1f2937",
    stroke = 2,
    ...props
    }) => <Svg height={size} width={size} fill="none" viewBox="0 0 24 24" strokeWidth={stroke} xmlns="http://www.w3.org/2000/svg" {...props}>
	<Path d="M20 7H9C6.23857 7 4 9.23857 3.99999 12C3.99999 14.7614 6.23857 17 8.99999 17M20 7L17 4M20 7L17 10M16 17H13" stroke="black" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5"/>
</Svg>;

export default BrokenUndoRightRound;
