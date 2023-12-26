import * as React from "react"
import Svg, { Path } from "react-native-svg";
    
const BoldDuotoneTimeAlarmPause = ({
    size = 24,
    color = "#1f2937",
    stroke = 2,
    ...props
    }) => <Svg height={size} width={size} fill="none" viewBox="0 0 24 24" strokeWidth={stroke} xmlns="http://www.w3.org/2000/svg" {...props}>
	<Path d="M12 22C16.9706 22 21 17.9706 21 13C21 8.02944 16.9706 4 12 4C7.02944 4 3 8.02944 3 13C3 17.9706 7.02944 22 12 22Z" fill={color} opacity="0.5"/>
	<Path d="M11 15.5V10.5V10.5C11 10.0341 11 9.80109 10.9239 9.61732C10.8224 9.37229 10.6277 9.17761 10.3827 9.07612C10.1989 9 9.96594 9 9.5 9C9.03406 9 8.80109 9 8.61732 9.07612C8.37229 9.17761 8.17761 9.37229 8.07612 9.61732C8 9.80109 8 10.0341 8 10.5V15.5C8 15.9659 8 16.1989 8.07612 16.3827C8.17761 16.6277 8.37229 16.8224 8.61732 16.9239C8.80109 17 9.03406 17 9.5 17C9.96594 17 10.1989 17 10.3827 16.9239C10.6277 16.8224 10.8224 16.6277 10.9239 16.3827C11 16.1989 11 15.9659 11 15.5V15.5Z" fill={color}/>
	<Path d="M16 15.5V10.5C16 10.0341 16 9.80109 15.9239 9.61732C15.8224 9.37229 15.6277 9.17761 15.3827 9.07612C15.1989 9 14.9659 9 14.5 9C14.0341 9 13.8011 9 13.6173 9.07612C13.3723 9.17761 13.1776 9.37229 13.0761 9.61732C13 9.80109 13 10.0341 13 10.5V15.5C13 15.9659 13 16.1989 13.0761 16.3827C13.1776 16.6277 13.3723 16.8224 13.6173 16.9239C13.8011 17 14.0341 17 14.5 17C14.9659 17 15.1989 17 15.3827 16.9239C15.6277 16.8224 15.8224 16.6277 15.9239 16.3827C16 16.1989 16 15.9659 16 15.5Z" fill={color}/>
	<Path d="M8.2405 2.33986C8.45409 2.67841 8.3502 3.1244 8.00844 3.33599L4.11657 5.74562C3.77481 5.95722 3.32461 5.8543 3.11102 5.51574C2.89742 5.17718 3.00131 4.7312 3.34307 4.5196L7.23494 2.10998C7.5767 1.89838 8.0269 2.0013 8.2405 2.33986Z" fill={color} fillRule="evenodd"/>
	<Path d="M15.7595 2.33985C15.9731 2.0013 16.4233 1.89838 16.7651 2.10998L20.6569 4.5196C20.9987 4.7312 21.1026 5.17719 20.889 5.51574C20.6754 5.8543 20.2252 5.95722 19.8834 5.74562L15.9916 3.33599C15.6498 3.1244 15.5459 2.67841 15.7595 2.33985Z" fill={color} fillRule="evenodd"/>
</Svg>;

export default BoldDuotoneTimeAlarmPause;
