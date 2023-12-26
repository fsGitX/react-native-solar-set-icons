import * as React from "react"
import Svg, { Path } from "react-native-svg";
    
const LinearArrowToDownLeft = ({
    size = 24,
    color = "#1f2937",
    stroke = 2,
    ...props
    }) => <Svg height={size} width={size} fill="none" viewBox="0 0 24 24" strokeWidth={stroke} xmlns="http://www.w3.org/2000/svg" {...props}>
	<Path d="M12 19.5L17 14.5M12 19.5L7 14.5M12 19.5C12 19.5 12 11.1667 12 9.5C12 7.83333 11 4.5 7 4.5" stroke="black" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5"/>
</Svg>;

export default LinearArrowToDownLeft;
