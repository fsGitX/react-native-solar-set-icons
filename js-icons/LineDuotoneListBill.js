import * as React from "react"
import Svg, { Path } from "react-native-svg";
    
const LineDuotoneListBill = ({
    size = 24,
    color = "#1f2937",
    stroke = 2,
    ...props
    }) => <Svg height={size} width={size} fill="none" viewBox="0 0 24 24" strokeWidth={stroke} xmlns="http://www.w3.org/2000/svg" {...props}>
	<Path d="M2 2H22" stroke="black" strokeLinecap="round" strokeWidth="1.5"/>
	<Path d="M4 2H20V12.2774C20 13.6175 20 14.2875 19.7319 14.8783C19.4638 15.4692 18.9595 15.9104 17.951 16.7929L15.951 18.5429C14.0685 20.1901 13.1272 21.0137 12 21.0137C10.8728 21.0137 9.93152 20.1901 8.04897 18.5429L6.04897 16.7928C5.04046 15.9104 4.5362 15.4692 4.2681 14.8783C4 14.2875 4 13.6175 4 12.2774V2Z" opacity="0.5" stroke="black" strokeWidth="1.5"/>
	<Path d="M8.5 13L15.5 13" stroke="black" strokeLinecap="round" strokeWidth="1.5"/>
	<Path d="M8.5 8L15.5 8" stroke="black" strokeLinecap="round" strokeWidth="1.5"/>
</Svg>;

export default LineDuotoneListBill;
