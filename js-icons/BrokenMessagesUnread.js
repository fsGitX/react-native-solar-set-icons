import * as React from "react"
import Svg, { Path } from "react-native-svg";
    
const BrokenMessagesUnread = ({
    size = 24,
    color = "#1f2937",
    stroke = 2,
    ...props
    }) => <Svg height={size} width={size} fill="none" viewBox="0 0 24 24" strokeWidth={stroke} xmlns="http://www.w3.org/2000/svg" {...props}>
	<Path d="M7 12.9L10.1429 16.5L12.1071 14.25M18 7.5L14.0714 12" stroke="black" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5"/>
</Svg>;

export default BrokenMessagesUnread;
