import * as React from "react"
import Svg, { Path } from "react-native-svg";
    
const LinearArrowsActionReply2 = ({
    size = 24,
    color = "#1f2937",
    stroke = 2,
    ...props
    }) => <Svg height={size} width={size} fill="none" viewBox="0 0 24 24" strokeWidth={stroke} xmlns="http://www.w3.org/2000/svg" {...props}>
	<Path d="M4.5 12L9.5 17M4.5 12L9.5 7M4.5 12L14.5 12C16.1667 12 19.5 11 19.5 7" stroke="black" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5"/>
</Svg>;

export default LinearArrowsActionReply2;
