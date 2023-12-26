import * as React from "react"
import Svg, { Path } from "react-native-svg";
    
const BoldDuotoneArrowsRoundSortHorizontal = ({
    size = 24,
    color = "#1f2937",
    stroke = 2,
    ...props
    }) => <Svg height={size} width={size} fill="none" viewBox="0 0 24 24" strokeWidth={stroke} xmlns="http://www.w3.org/2000/svg" {...props}>
	<Path d="M12 22C17.5228 22 22 17.5228 22 12C22 6.47715 17.5228 2 12 2C6.47715 2 2 6.47715 2 12C2 17.5228 6.47715 22 12 22Z" fill={color} opacity="0.5"/>
	<Path d="M13.7545 11.4451C13.448 11.1664 12.9737 11.189 12.695 11.4955C12.4164 11.802 12.439 12.2763 12.7455 12.555L14.06 13.75H8C7.58579 13.75 7.25 14.0858 7.25 14.5C7.25 14.9142 7.58579 15.25 8 15.25H14.06L12.7455 16.4451C12.439 16.7237 12.4164 17.198 12.695 17.5045C12.9737 17.811 13.448 17.8336 13.7545 17.555L16.5045 15.055C16.6609 14.9128 16.75 14.7113 16.75 14.5C16.75 14.2887 16.6609 14.0872 16.5045 13.9451L13.7545 11.4451Z" fill={color}/>
	<Path d="M11.2545 7.55496C11.561 7.27633 11.5836 6.80199 11.305 6.4955C11.0263 6.18901 10.552 6.16642 10.2455 6.44505L7.4955 8.94505C7.33914 9.08719 7.25 9.2887 7.25 9.50001C7.25 9.71131 7.33914 9.91282 7.4955 10.055L10.2455 12.555C10.552 12.8336 11.0263 12.811 11.305 12.5045C11.5836 12.198 11.561 11.7237 11.2545 11.4451L9.93996 10.25H16C16.4142 10.25 16.75 9.91422 16.75 9.50001C16.75 9.08579 16.4142 8.75001 16 8.75001H9.93996L11.2545 7.55496Z" fill={color}/>
</Svg>;

export default BoldDuotoneArrowsRoundSortHorizontal;
