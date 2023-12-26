import * as React from "react"
import Svg, { Path } from "react-native-svg";
    
const BrokenArrowsActionArrowToTopRight = ({
    size = 24,
    color = "#1f2937",
    stroke = 2,
    ...props
    }) => <Svg height={size} width={size} fill="none" viewBox="0 0 24 24" strokeWidth={stroke} xmlns="http://www.w3.org/2000/svg" {...props}>
	<Path d="M12 4.5L7 9.5M12 4.5L17 9.5M12 4.5L12 11M12 14.5C12 16.1667 13 19.5 17 19.5" stroke="black" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5"/>
</Svg>;

export default BrokenArrowsActionArrowToTopRight;
