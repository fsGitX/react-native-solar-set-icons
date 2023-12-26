import * as React from "react"
import Svg, { Path } from "react-native-svg";
    
const LineDuotoneTimeAlarmPause = ({
    size = 24,
    color = "#1f2937",
    stroke = 2,
    ...props
    }) => <Svg height={size} width={size} fill="none" viewBox="0 0 24 24" strokeWidth={stroke} xmlns="http://www.w3.org/2000/svg" {...props}>
	<circle cx="12" cy="13" opacity="0.5" r="9" stroke="black" strokeWidth="1.5"/>
	<Path d="M3.5 4.5L7.50002 2" stroke="black" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5"/>
	<Path d="M20.5 4.5L16.5 2" stroke="black" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5"/>
	<Path d="M8 10.5C8 10.0341 8 9.80109 8.07612 9.61732C8.17761 9.37229 8.37229 9.17761 8.61732 9.07612C8.80109 9 9.03406 9 9.5 9C9.96594 9 10.1989 9 10.3827 9.07612C10.6277 9.17761 10.8224 9.37229 10.9239 9.61732C11 9.80109 11 10.0341 11 10.5V15.5C11 15.9659 11 16.1989 10.9239 16.3827C10.8224 16.6277 10.6277 16.8224 10.3827 16.9239C10.1989 17 9.96594 17 9.5 17C9.03406 17 8.80109 17 8.61732 16.9239C8.37229 16.8224 8.17761 16.6277 8.07612 16.3827C8 16.1989 8 15.9659 8 15.5V10.5Z" stroke="black" strokeWidth="1.5"/>
	<Path d="M13 10.5C13 10.0341 13 9.80109 13.0761 9.61732C13.1776 9.37229 13.3723 9.17761 13.6173 9.07612C13.8011 9 14.0341 9 14.5 9C14.9659 9 15.1989 9 15.3827 9.07612C15.6277 9.17761 15.8224 9.37229 15.9239 9.61732C16 9.80109 16 10.0341 16 10.5V15.5C16 15.9659 16 16.1989 15.9239 16.3827C15.8224 16.6277 15.6277 16.8224 15.3827 16.9239C15.1989 17 14.9659 17 14.5 17C14.0341 17 13.8011 17 13.6173 16.9239C13.3723 16.8224 13.1776 16.6277 13.0761 16.3827C13 16.1989 13 15.9659 13 15.5V10.5Z" stroke="black" strokeWidth="1.5"/>
</Svg>;

export default LineDuotoneTimeAlarmPause;
