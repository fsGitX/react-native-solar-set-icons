import * as React from "react"
import Svg, { Path } from "react-native-svg";
    
const LineDuotoneElectronicAirbudsCaseCharge = ({
    size = 24,
    color = "#1f2937",
    stroke = 2,
    ...props
    }) => <Svg height={size} width={size} fill="none" viewBox="0 0 24 24" strokeWidth={stroke} xmlns="http://www.w3.org/2000/svg" {...props}>
	<Path d="M3 11C3 7.25027 3 5.3754 3.95491 4.06107C4.26331 3.6366 4.6366 3.26331 5.06107 2.95491C6.3754 2 8.25027 2 12 2C15.7497 2 17.6246 2 18.9389 2.95491C19.3634 3.26331 19.7367 3.6366 20.0451 4.06107C21 5.3754 21 7.25027 21 11V13C21 16.7497 21 18.6246 20.0451 19.9389C19.7367 20.3634 19.3634 20.7367 18.9389 21.0451C17.6246 22 15.7497 22 12 22C8.25027 22 6.3754 22 5.06107 21.0451C4.6366 20.7367 4.26331 20.3634 3.95491 19.9389C3 18.6246 3 16.7497 3 13V11Z" opacity="0.5" stroke="black" strokeWidth="1.5"/>
	<Path d="M12 18L14 15.5001H10L12 13" stroke="black" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5"/>
	<Path d="M7 9H17" stroke="black" strokeLinecap="round" strokeWidth="1.5"/>
</Svg>;

export default LineDuotoneElectronicAirbudsCaseCharge;
