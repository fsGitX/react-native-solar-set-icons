import * as React from "react"
import Svg, { Path } from "react-native-svg";
    
const BrokenProjector = ({
    size = 24,
    color = "#1f2937",
    stroke = 2,
    ...props
    }) => <Svg height={size} width={size} fill="none" viewBox="0 0 24 24" strokeWidth={stroke} xmlns="http://www.w3.org/2000/svg" {...props}>
	<Path d="M18 6.01732C19.5534 6.06413 20.48 6.23738 21.1213 6.87868C21.6112 7.36857 21.828 8.02491 21.9239 9M10 6H8C5.17157 6 3.75736 6 2.87868 6.87868C2 7.75736 2 9.17157 2 12C2 14.8284 2 16.2426 2.87868 17.1213C3.75736 18 5.17157 18 8 18H10M14 18H16C18.8284 18 20.2426 18 21.1213 17.1213C21.8897 16.3529 21.9862 15.175 21.9983 13" stroke="black" strokeLinecap="round" strokeWidth="1.5"/>
	<Path d="M18.3292 20.3354C18.5144 20.7059 18.9649 20.8561 19.3354 20.6708C19.7059 20.4856 19.8561 20.0351 19.6708 19.6646L18.3292 20.3354ZM17.3292 18.3354L18.3292 20.3354L19.6708 19.6646L18.6708 17.6646L17.3292 18.3354Z" fill={color}/>
	<Path d="M5.67082 20.3354C5.48558 20.7059 5.03507 20.8561 4.66459 20.6708C4.29411 20.4856 4.14394 20.0351 4.32918 19.6646L5.67082 20.3354ZM6.67082 18.3354L5.67082 20.3354L4.32918 19.6646L5.32918 17.6646L6.67082 18.3354Z" fill={color}/>
	<Path d="M12 9C12 10.1046 12.8954 11 14 11C15.1046 11 16 10.1046 16 9C16 7.89543 15.1046 7 14 7" stroke="black" strokeLinecap="round" strokeWidth="1.5"/>
	<Path d="M5.5 9.5L5.5002 11.0001" stroke="black" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5"/>
	<circle cx="14" cy="9" r="5" stroke="black" strokeWidth="1.5"/>
</Svg>;

export default BrokenProjector;
