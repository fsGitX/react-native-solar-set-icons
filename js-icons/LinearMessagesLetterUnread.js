import * as React from "react"
import Svg, { Path } from "react-native-svg";
    
const LinearMessagesLetterUnread = ({
    size = 24,
    color = "#1f2937",
    stroke = 2,
    ...props
    }) => <Svg height={size} width={size} fill="none" viewBox="0 0 24 24" strokeWidth={stroke} xmlns="http://www.w3.org/2000/svg" {...props}>
	<Path d="M22 10C22.0185 10.7271 22 11.0542 22 12C22 15.7712 22 17.6569 20.8284 18.8284C19.6569 20 17.7712 20 14 20H10C6.22876 20 4.34315 20 3.17157 18.8284C2 17.6569 2 15.7712 2 12C2 8.22876 2 6.34315 3.17157 5.17157C4.34315 4 6.22876 4 10 4H13" stroke="black" strokeLinecap="round" strokeWidth="1.5"/>
	<Path d="M6 8L8.1589 9.79908C9.99553 11.3296 10.9139 12.0949 12 12.0949C13.0861 12.0949 14.0045 11.3296 15.8411 9.79908" stroke="black" strokeLinecap="round" strokeWidth="1.5"/>
	<circle cx="19" cy="5" r="3" stroke="black" strokeWidth="1.5"/>
</Svg>;

export default LinearMessagesLetterUnread;
