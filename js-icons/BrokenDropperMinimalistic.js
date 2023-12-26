import * as React from "react"
import Svg, { Path } from "react-native-svg";
    
const BrokenDropperMinimalistic = ({
    size = 24,
    color = "#1f2937",
    stroke = 2,
    ...props
    }) => <Svg height={size} width={size} fill="none" viewBox="0 0 24 24" strokeWidth={stroke} xmlns="http://www.w3.org/2000/svg" {...props}>
	<Path d="M5 8C5 6.11438 5 5.17157 5.58579 4.58579C6.17157 4 7.11438 4 9 4H15C16.8856 4 17.8284 4 18.4142 4.58579C19 5.17157 19 6.11438 19 8V15.8831C19 16.6438 18.6809 17.3697 18.1203 17.8841C14.6584 21.0607 9.3416 21.0607 5.87966 17.8841C5.31911 17.3697 5 16.6438 5 15.8831V12" stroke="black" strokeLinecap="round" strokeWidth="1.5"/>
	<Path d="M19 8L17 8" stroke="black" strokeLinecap="round" strokeWidth="1.5"/>
	<Path d="M19 14H17" stroke="black" strokeLinecap="round" strokeWidth="1.5"/>
	<Path d="M14 11.9167C14 13.0673 13.1046 14 12 14C10.8954 14 10 13.0673 10 11.9167C10 11.1968 10.783 10.2359 11.3691 9.61749C11.7161 9.25136 12.2839 9.25136 12.6309 9.61749C13.217 10.2359 14 11.1968 14 11.9167Z" stroke="black" strokeWidth="1.5"/>
	<Path d="M19 11H17" stroke="black" strokeLinecap="round" strokeWidth="1.5"/>
	<Path d="M12 21V22" stroke="black" strokeLinecap="round" strokeWidth="1.5"/>
	<Path d="M14 4C14 2.89543 13.1046 2 12 2C10.8954 2 10 2.89543 10 4" stroke="black" strokeLinecap="round" strokeWidth="1.5"/>
</Svg>;

export default BrokenDropperMinimalistic;
