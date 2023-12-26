import * as React from "react"
import Svg, { Path } from "react-native-svg";
    
const BrokenSportsBicyclingRound = ({
    size = 24,
    color = "#1f2937",
    stroke = 2,
    ...props
    }) => <Svg height={size} width={size} fill="none" viewBox="0 0 24 24" strokeWidth={stroke} xmlns="http://www.w3.org/2000/svg" {...props}>
	<circle cx="14" cy="4" r="2" stroke="black" strokeWidth="1.5"/>
	<circle cx="6" cy="18" r="3" stroke="black" strokeWidth="1.5"/>
	<circle cx="18" cy="18" r="3" stroke="black" strokeWidth="1.5"/>
	<Path d="M18.4999 9.99997H14.5822C14.2052 9.99997 13.8393 9.87213 13.5444 9.63733L11.386 7.91916C10.1193 6.91084 8.25168 7.27102 7.45083 8.67806C6.67562 10.0401 7.25192 11.7736 8.68829 12.4004M11.9999 18L12.7603 16.2258C13.1695 15.2708 12.7312 14.1646 11.779 13.749" stroke="black" strokeLinecap="round" strokeWidth="1.5"/>
</Svg>;

export default BrokenSportsBicyclingRound;
