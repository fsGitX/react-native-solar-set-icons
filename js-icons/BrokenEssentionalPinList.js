import * as React from "react"
import Svg, { Path } from "react-native-svg";
    
const BrokenEssentionalPinList = ({
    size = 24,
    color = "#1f2937",
    stroke = 2,
    ...props
    }) => <Svg height={size} width={size} fill="none" viewBox="0 0 24 24" strokeWidth={stroke} xmlns="http://www.w3.org/2000/svg" {...props}>
	<Path d="M13.6315 8.22382C15.1616 9.7539 15.9266 10.5189 15.926 11.3483C15.9257 11.6192 15.8705 11.8873 15.7635 12.1362C15.4361 12.8982 14.4309 13.2983 12.4204 14.0985L12.2749 14.1564C11.7049 14.3832 11.4199 14.4967 11.19 14.6788C11.0156 14.817 10.8655 14.9833 10.7458 15.1709C10.5881 15.4182 10.5044 15.7133 10.3369 16.3034C10.0771 17.2185 9.94727 17.6761 9.67033 17.8791C9.46451 18.03 9.20879 18.0966 8.95553 18.065C8.61475 18.0226 8.27843 17.6863 7.60579 17.0137L4.47529 13.8832C3.80265 13.2105 3.46633 12.8742 3.42392 12.5334C3.3924 12.2802 3.4589 12.0244 3.60981 11.8186C3.81287 11.5417 4.27042 11.4118 5.18554 11.1521C5.77568 10.9846 6.07076 10.9009 6.31804 10.7431C6.50565 10.6235 6.67197 10.4733 6.81015 10.2989C6.9923 10.069 7.10572 9.78403 7.33256 9.21406L7.39047 9.06855C8.19063 7.05807 8.59071 6.05283 9.35273 5.72542C9.60165 5.61847 9.86971 5.56321 10.1406 5.56299C10.5028 5.5627 10.8526 5.70839 11.2593 6.00002" stroke="black" strokeLinecap="round" strokeWidth="1.5"/>
	<Path d="M3.34679 18.142L6.04053 15.4482" stroke="black" strokeLinecap="round" strokeWidth="1.5"/>
	<Path d="M22 8H17" stroke="black" strokeLinecap="round" strokeWidth="1.5"/>
	<Path d="M22 12.5H18" stroke="black" strokeLinecap="round" strokeWidth="1.5"/>
	<Path d="M22 17H21M13 17H17" stroke="black" strokeLinecap="round" strokeWidth="1.5"/>
</Svg>;

export default BrokenEssentionalPinList;
