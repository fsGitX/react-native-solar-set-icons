import * as React from "react"
import Svg, { Path } from "react-native-svg";
    
const BoldForbidden = ({
    size = 24,
    color = "#1f2937",
    stroke = 2,
    ...props
    }) => <Svg height={size} width={size} fill="none" viewBox="0 0 24 24" strokeWidth={stroke} xmlns="http://www.w3.org/2000/svg" {...props}>
	<Path d="M22 13.1511V10.8489C22 9.62267 22 9.00954 21.7716 8.45823C21.5433 7.90691 21.1097 7.47337 20.2426 6.60628L19.3485 5.71214L5.71203 19.3484L6.60628 20.2426C7.47337 21.1097 7.90691 21.5433 8.45823 21.7716C9.00954 22 9.62267 22 10.8489 22H13.1511C14.3773 22 14.9905 22 15.5418 21.7716C16.0931 21.5433 16.5266 21.1097 17.3937 20.2426L20.2426 17.3937C21.1097 16.5266 21.5433 16.0931 21.7716 15.5418C22 14.9905 22 14.3773 22 13.1511Z" fill={color}/>
	<Path d="M4.65137 18.2877L3.75736 17.3937C2.89027 16.5266 2.45672 16.0931 2.22836 15.5418C2 14.9905 2 14.3773 2 13.1511V10.8489C2 9.62267 2 9.00954 2.22836 8.45823C2.45672 7.90691 2.89027 7.47337 3.75736 6.60628L6.60628 3.75736C7.47337 2.89027 7.90691 2.45672 8.45823 2.22836C9.00954 2 9.62267 2 10.8489 2H13.1511C14.3773 2 14.9905 2 15.5418 2.22836C16.0931 2.45672 16.5266 2.89027 17.3937 3.75736L18.2878 4.65148L4.65137 18.2877Z" fill={color}/>
</Svg>;

export default BoldForbidden;
