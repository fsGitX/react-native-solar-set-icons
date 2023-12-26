import * as React from "react"
import Svg, { Path } from "react-native-svg";
    
const BoldDuotoneJarOfPills = ({
    size = 24,
    color = "#1f2937",
    stroke = 2,
    ...props
    }) => <Svg height={size} width={size} fill="none" viewBox="0 0 24 24" strokeWidth={stroke} xmlns="http://www.w3.org/2000/svg" {...props}>
	<Path d="M6 3.5C6 3.03406 6 2.80109 6.07612 2.61732C6.17761 2.37229 6.37229 2.17761 6.61732 2.07612C6.80109 2 7.03406 2 7.5 2H16.5C16.9659 2 17.1989 2 17.3827 2.07612C17.6277 2.17761 17.8224 2.37229 17.9239 2.61732C18 2.80109 18 3.03406 18 3.5C18 3.96594 18 4.19891 17.9239 4.38268C17.8224 4.62771 17.6277 4.82239 17.3827 4.92388C17.1989 5 16.9659 5 16.5 5H7.5C7.03406 5 6.80109 5 6.61732 4.92388C6.37229 4.82239 6.17761 4.62771 6.07612 4.38268C6 4.19891 6 3.96594 6 3.5Z" fill={color} opacity="0.5"/>
	<Path d="M4 10.9225V17.5518C4 17.7022 4.00847 17.8518 4.02518 18H19.9763C19.992 17.8561 20 17.7109 20 17.5649V10.9083C20 10.5995 19.9643 10.295 19.8955 10H4.10779C4.03683 10.2994 4 10.6087 4 10.9225Z" fill={color} opacity="0.5"/>
	<Path d="M5.50118 7.79902L8.99996 5H15.0182L16.1595 5.89102L18.5168 7.79931C19.2149 8.3645 19.6954 9.14182 19.8955 10H4.10776C4.31164 9.13989 4.79732 8.36211 5.50118 7.79902Z" fill={color}/>
	<Path d="M4.02515 18C4.11241 18.774 4.4243 19.5092 4.92708 20.1125C5.29269 20.5513 5.4755 20.7706 5.67734 20.9548C6.27605 21.5011 7.02658 21.8526 7.82953 21.9628C8.10023 22 8.38578 22 8.95689 22H15.6417C16.8369 22 17.9696 21.4655 18.7294 20.5428L19.0877 20.1078C19.5847 19.5043 19.8919 18.771 19.9762 18H4.02515Z" fill={color}/>
	<Path d="M12 11.25C12.4142 11.25 12.75 11.5858 12.75 12V13.25H14C14.4142 13.25 14.75 13.5858 14.75 14C14.75 14.4142 14.4142 14.75 14 14.75H12.75V16C12.75 16.4142 12.4142 16.75 12 16.75C11.5858 16.75 11.25 16.4142 11.25 16V14.75H10C9.58579 14.75 9.25 14.4142 9.25 14C9.25 13.5858 9.58579 13.25 10 13.25H11.25V12C11.25 11.5858 11.5858 11.25 12 11.25Z" fill={color} fillRule="evenodd"/>
</Svg>;

export default BoldDuotoneJarOfPills;
