import * as React from "react"
import Svg, { Path } from "react-native-svg";
    
const BrokenCrop = ({
    size = 24,
    color = "#1f2937",
    stroke = 2,
    ...props
    }) => <Svg height={size} width={size} fill="none" viewBox="0 0 24 24" strokeWidth={stroke} xmlns="http://www.w3.org/2000/svg" {...props}>
	<Path d="M8.5 11.5C8.5 10.0858 8.5 9.37868 8.93934 8.93934C9.37868 8.5 10.0858 8.5 11.5 8.5H12.5C13.9142 8.5 14.6213 8.5 15.0607 8.93934C15.5 9.37868 15.5 10.0858 15.5 11.5V12.5C15.5 13.9142 15.5 14.6213 15.0607 15.0607C14.6213 15.5 13.9142 15.5 12.5 15.5H11.5C10.0858 15.5 9.37868 15.5 8.93934 15.0607C8.5 14.6213 8.5 13.9142 8.5 12.5V11.5Z" stroke="black" strokeWidth="1.5"/>
	<Path d="M22 19H13C9.22876 19 7.34315 19 6.17157 17.8284C5.51839 17.1752 5.22937 16.3001 5.10149 15M5 11V2" stroke="black" strokeLinecap="round" strokeWidth="1.5"/>
	<Path d="M8 5H11C14.7712 5 16.6569 5 17.8284 6.17157C18.4816 6.82475 18.7706 7.69989 18.8985 9M2 5H5M19 19V22M19 13V16" stroke="black" strokeLinecap="round" strokeWidth="1.5"/>
</Svg>;

export default BrokenCrop;
