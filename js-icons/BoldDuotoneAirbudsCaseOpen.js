import * as React from "react"
import Svg, { Path } from "react-native-svg";
    
const BoldDuotoneAirbudsCaseOpen = ({
    size = 24,
    color = "#1f2937",
    stroke = 2,
    ...props
    }) => <Svg height={size} width={size} fill="none" viewBox="0 0 24 24" strokeWidth={stroke} xmlns="http://www.w3.org/2000/svg" {...props}>
	<Path d="M3.20665 11.3912C3 11.6605 3 12.0515 3 12.8333V13C3 16.7497 3 18.6246 3.95491 19.9389C4.26331 20.3634 4.6366 20.7367 5.06107 21.0451C6.3754 22 8.25027 22 12 22C15.7497 22 17.6246 22 18.9389 21.0451C19.3634 20.7367 19.7367 20.3634 20.0451 19.9389C21 18.6246 21 16.7497 21 13V12.8333C21 12.0515 21 11.6605 20.7934 11.3912C20.7402 11.3219 20.6781 11.2598 20.6088 11.2066C20.3395 11 19.9485 11 19.1667 11H16.75C16.75 12.5188 15.5188 13.75 14 13.75H10C8.48122 13.75 7.25 12.5188 7.25 11H4.83333C4.05147 11 3.66055 11 3.39124 11.2066C3.32191 11.2598 3.25985 11.3219 3.20665 11.3912Z" fill={color}/>
	<Path d="M8.75 11C8.75 11.6904 9.30964 12.25 10 12.25H14C14.6904 12.25 15.25 11.6904 15.25 11H8.75Z" fill={color}/>
	<Path d="M14 13.75C15.5188 13.75 16.75 12.5188 16.75 11H15.25C15.25 11.6904 14.6904 12.25 14 12.25H10C9.30964 12.25 8.75 11.6904 8.75 11H7.25C7.25 12.5188 8.48122 13.75 10 13.75H14Z" fill={color} opacity="0.5"/>
	<g opacity="0.5">
		<Path d="M3.5 4.625V5.94143C3.5 7.3059 4.60612 8.41202 5.97059 8.41202C6.42541 8.41202 6.79412 8.78072 6.79412 9.23555V11L10.5 11V6.375C10.5 3.95875 8.54125 2 6.125 2C4.67525 2 3.5 3.17525 3.5 4.625Z" fill={color}/>
		<Path d="M20.4999 4.625V5.94143C20.4999 7.3059 19.3938 8.41202 18.0293 8.41202C17.5745 8.41202 17.2058 8.78072 17.2058 9.23555V11L13.4999 11V6.375C13.4999 3.95875 15.4587 2 17.8749 2C19.3247 2 20.4999 3.17525 20.4999 4.625Z" fill={color}/>
	</g>
</Svg>;

export default BoldDuotoneAirbudsCaseOpen;
