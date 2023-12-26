import * as React from "react"
import Svg, { Path } from "react-native-svg";
    
const BrokenVideoPIP2 = ({
    size = 24,
    color = "#1f2937",
    stroke = 2,
    ...props
    }) => <Svg height={size} width={size} fill="none" viewBox="0 0 24 24" strokeWidth={stroke} xmlns="http://www.w3.org/2000/svg" {...props}>
	<Path d="M2.00077 11C2 11.3178 2 11.6508 2 12C2 15.7497 2 17.6246 2.95491 18.9389C3.26331 19.3634 3.6366 19.7367 4.06107 20.0451C5.3754 21 7.25027 21 11 21H13C16.7497 21 18.6246 21 19.9389 20.0451C20.3634 19.7367 20.7367 19.3634 21.0451 18.9389C22 17.6246 22 15.7497 22 12C22 8.25027 22 6.3754 21.0451 5.06107C20.7367 4.6366 20.3634 4.26331 19.9389 3.95491C18.6246 3 16.7497 3 13 3H11C7.25027 3 5.3754 3 4.06107 3.95491C3.6366 4.26331 3.26331 4.6366 2.95491 5.06107C2.57157 5.5887 2.34212 6.20667 2.20478 7" stroke="black" strokeLinecap="round" strokeWidth="1.5"/>
	<Path d="M11 14C11 13.0681 11 12.6022 11.1522 12.2346C11.3552 11.7446 11.7446 11.3552 12.2346 11.1522C12.6022 11 13.0681 11 14 11H15C15.9319 11 16.3978 11 16.7654 11.1522C17.2554 11.3552 17.6448 11.7446 17.8478 12.2346C18 12.6022 18 13.0681 18 14C18 14.9319 18 15.3978 17.8478 15.7654C17.6448 16.2554 17.2554 16.6448 16.7654 16.8478C16.3978 17 15.9319 17 15 17H14C13.0681 17 12.6022 17 12.2346 16.8478C11.7446 16.6448 11.3552 16.2554 11.1522 15.7654C11 15.3978 11 14.9319 11 14Z" stroke="black" strokeWidth="1.5"/>
</Svg>;

export default BrokenVideoPIP2;
