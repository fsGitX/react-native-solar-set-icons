import * as React from "react"
import Svg, { Path } from "react-native-svg";
    
const LineDuotoneNetworkStationMinimalistic = ({
    size = 24,
    color = "#1f2937",
    stroke = 2,
    ...props
    }) => <Svg height={size} width={size} fill="none" viewBox="0 0 24 24" strokeWidth={stroke} xmlns="http://www.w3.org/2000/svg" {...props}>
	<Path d="M13.25 8.75C13.25 9.44036 12.6904 10 12 10C11.3096 10 10.75 9.44036 10.75 8.75C10.75 8.05964 11.3096 7.5 12 7.5C12.6904 7.5 13.25 8.05964 13.25 8.75Z" stroke="black" strokeWidth="1.5"/>
	<Path d="M7.00778 14C5.76601 12.7269 5 10.981 5 9.05473C5 5.15851 8.13401 2 12 2C15.866 2 19 5.15851 19 9.05473C19 10.9647 18.2468 12.6975 17.0235 13.9677" opacity="0.4" stroke="black" strokeLinecap="round" strokeWidth="1.5"/>
	<Path d="M8.98785 12.0044C8.25272 11.2421 7.80005 10.2016 7.80005 9.05461C7.80005 6.71688 9.68045 4.82178 12 4.82178C14.3196 4.82178 16.2 6.71688 16.2 9.05461C16.2 10.1854 15.7601 11.2126 15.0433 11.9718" opacity="0.7" stroke="black" strokeLinecap="round" strokeWidth="1.5"/>
	<Path d="M16 22L12 10L8 22" stroke="black" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5"/>
	<Path d="M14.5 17.5H9.5" stroke="black" strokeLinecap="round" strokeWidth="1.5"/>
</Svg>;

export default LineDuotoneNetworkStationMinimalistic;