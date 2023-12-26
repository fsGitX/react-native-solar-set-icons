import * as React from "react"
import Svg, { Path } from "react-native-svg";
    
const LinearBicyclingRound = ({
    size = 24,
    color = "#1f2937",
    stroke = 2,
    ...props
    }) => <Svg height={size} width={size} fill="none" viewBox="0 0 24 24" strokeWidth={stroke} xmlns="http://www.w3.org/2000/svg" {...props}>
	<circle cx="14" cy="4" r="2" stroke="black" strokeWidth="1.5"/>
	<circle cx="6" cy="18" r="3" stroke="black" strokeWidth="1.5"/>
	<circle cx="18" cy="18" r="3" stroke="black" strokeWidth="1.5"/>
	<Path d="M18.5 9.99997H14.5823C14.2053 9.99997 13.8394 9.87213 13.5445 9.63733L11.3861 7.91916C10.1195 6.91084 8.2518 7.27102 7.45096 8.67806C6.67574 10.0401 7.25204 11.7736 8.68841 12.4004L11.7791 13.749C12.7314 14.1646 13.1697 15.2708 12.7604 16.2258L12 18" stroke="black" strokeLinecap="round" strokeWidth="1.5"/>
</Svg>;

export default LinearBicyclingRound;
