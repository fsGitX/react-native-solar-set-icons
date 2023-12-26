import * as React from "react"
import Svg, { Path } from "react-native-svg";
    
const BrokenArrowsActionScreenShare = ({
    size = 24,
    color = "#1f2937",
    stroke = 2,
    ...props
    }) => <Svg height={size} width={size} fill="none" viewBox="0 0 24 24" strokeWidth={stroke} xmlns="http://www.w3.org/2000/svg" {...props}>
	<Path d="M21 16C21 18.8284 21 20.2426 20.1213 21.1213C19.2426 22 17.8284 22 15 22H14C11.1716 22 9.75736 22 8.87868 21.1213C8 20.2426 8 18.8284 8 16V8C8 5.17157 8 3.75736 8.87868 2.87868C9.75736 2 11.1716 2 14 2H15C17.8284 2 19.2426 2 20.1213 2.87868C21 3.75736 21 5.17157 21 8V12" stroke="black" strokeLinecap="round" strokeWidth="1.5"/>
	<Path d="M8 19.5C5.64298 19.5 4.46447 19.5 3.73223 18.7678C3 18.0355 3 16.857 3 14.5V14M8 4.5C5.64298 4.5 4.46447 4.5 3.73223 5.23223C3 5.96447 3 7.14298 3 9.5V10" stroke="black" strokeLinecap="round" strokeWidth="1.5"/>
	<Path d="M14.5 16V8M14.5 8L17 10.5M14.5 8L12 10.5" stroke="black" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5"/>
</Svg>;

export default BrokenArrowsActionScreenShare;
