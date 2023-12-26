import * as React from "react"
import Svg, { Path } from "react-native-svg";
    
const LinearForward = ({
    size = 24,
    color = "#1f2937",
    stroke = 2,
    ...props
    }) => <Svg height={size} width={size} fill="none" viewBox="0 0 24 24" strokeWidth={stroke} xmlns="http://www.w3.org/2000/svg" {...props}>
	<Path d="M19.5 12L14.5 7M19.5 12L14.5 17M19.5 12L9.5 12C7.83333 12 4.5 13 4.5 17" stroke="black" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5"/>
</Svg>;

export default LinearForward;
