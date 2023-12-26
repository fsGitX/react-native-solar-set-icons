import * as React from "react"
import Svg, { Path } from "react-native-svg";
    
const LinearMedicineDropperMinimalistic2 = ({
    size = 24,
    color = "#1f2937",
    stroke = 2,
    ...props
    }) => <Svg height={size} width={size} fill="none" viewBox="0 0 24 24" strokeWidth={stroke} xmlns="http://www.w3.org/2000/svg" {...props}>
	<Path d="M19 15.8831V8C19 6.11438 19 5.17157 18.4142 4.58579C17.8284 4 16.8856 4 15 4H9C7.11438 4 6.17157 4 5.58579 4.58579C5 5.17157 5 6.11438 5 8V15.8831C5 16.6438 5.31911 17.3697 5.87966 17.8841C9.3416 21.0607 14.6584 21.0607 18.1203 17.8841C18.6809 17.3697 19 16.6438 19 15.8831Z" stroke="black" strokeLinecap="round" strokeWidth="1.5"/>
	<Path d="M14 16H10" stroke="black" strokeLinecap="round" strokeWidth="1.5"/>
	<Path d="M14 10.9165C14 12.0671 13.1046 12.9998 12 12.9998C10.8954 12.9998 10 12.0671 10 10.9165C10 10.1966 10.783 9.2357 11.3691 8.61724C11.7161 8.25112 12.2839 8.25112 12.6309 8.61724C13.217 9.2357 14 10.1966 14 10.9165Z" stroke="black" strokeWidth="1.5"/>
	<Path d="M12 21V22" stroke="black" strokeLinecap="round" strokeWidth="1.5"/>
	<Path d="M14 4C14 2.89543 13.1046 2 12 2C10.8954 2 10 2.89543 10 4" stroke="black" strokeLinecap="round" strokeWidth="1.5"/>
</Svg>;

export default LinearMedicineDropperMinimalistic2;
