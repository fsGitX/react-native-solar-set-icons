import * as React from "react"
import Svg, { Path } from "react-native-svg";
    
const BrokenArrowsActionCircleBottomDown = ({
    size = 24,
    color = "#1f2937",
    stroke = 2,
    ...props
    }) => <Svg height={size} width={size} fill="none" viewBox="0 0 24 24" strokeWidth={stroke} xmlns="http://www.w3.org/2000/svg" {...props}>
	<Path d="M10 14L2 22M2 22H8M2 22V16" stroke="black" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5"/>
	<Path d="M12 22C17.5228 22 22 17.5228 22 12C22 10.1786 21.513 8.47087 20.6622 7M2 12C2 6.47715 6.47715 2 12 2C13.8214 2 15.5291 2.48697 17 3.33782" stroke="black" strokeLinecap="round" strokeWidth="1.5"/>
</Svg>;

export default BrokenArrowsActionCircleBottomDown;
