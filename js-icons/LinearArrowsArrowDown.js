import * as React from "react"
import Svg, { Path } from "react-native-svg";
    
const LinearArrowsArrowDown = ({
    size = 24,
    color = "#1f2937",
    stroke = 2,
    ...props
    }) => <Svg height={size} width={size} fill="none" viewBox="0 0 24 24" strokeWidth={stroke} xmlns="http://www.w3.org/2000/svg" {...props}>
	<Path d="M12 4L12 20M12 20L18 14M12 20L6 14" stroke="black" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5"/>
</Svg>;

export default LinearArrowsArrowDown;
