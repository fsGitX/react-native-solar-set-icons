import * as React from "react"
import Svg, { Path } from "react-native-svg";
    
const LinearMessagesCheckRead = ({
    size = 24,
    color = "#1f2937",
    stroke = 2,
    ...props
    }) => <Svg height={size} width={size} fill="none" viewBox="0 0 24 24" strokeWidth={stroke} xmlns="http://www.w3.org/2000/svg" {...props}>
	<Path d="M4 12.9L7.14286 16.5L15 7.5" stroke="black" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5"/>
	<Path d="M20.0002 7.5625L11.4285 16.5625L11.0002 16" stroke="black" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5"/>
</Svg>;

export default LinearMessagesCheckRead;
