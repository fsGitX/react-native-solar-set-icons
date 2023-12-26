import * as React from "react"
import Svg, { Path } from "react-native-svg";
    
const BrokenArrowsRoundTransferDiagonal = ({
    size = 24,
    color = "#1f2937",
    stroke = 2,
    ...props
    }) => <Svg height={size} width={size} fill="none" viewBox="0 0 24 24" strokeWidth={stroke} xmlns="http://www.w3.org/2000/svg" {...props}>
	<Path d="M6.5 4L13.8784 12V7.5" stroke="black" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5"/>
	<Path d="M17.3784 19.8779L9.87842 11.9995V16.4995" stroke="black" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5"/>
	<Path d="M17 3.33782C15.5291 2.48697 13.8214 2 12 2C6.47715 2 2 6.47715 2 12C2 17.5228 6.47715 22 12 22C17.5228 22 22 17.5228 22 12C22 10.1786 21.513 8.47087 20.6622 7" stroke="black" strokeLinecap="round" strokeWidth="1.5"/>
</Svg>;

export default BrokenArrowsRoundTransferDiagonal;
