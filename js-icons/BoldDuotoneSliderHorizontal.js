import * as React from "react"
import Svg, { Path } from "react-native-svg";
    
const BoldDuotoneSliderHorizontal = ({
    size = 24,
    color = "#1f2937",
    stroke = 2,
    ...props
    }) => <Svg height={size} width={size} fill="none" viewBox="0 0 24 24" strokeWidth={stroke} xmlns="http://www.w3.org/2000/svg" {...props}>
	<Path d="M8 18C5.17157 18 3.75736 18 2.87868 17.1213C2 16.2426 2 14.8284 2 12C2 9.17157 2 7.75736 2.87868 6.87868C3.75736 6 5.17157 6 8 6L16 6C18.8284 6 20.2426 6 21.1213 6.87868C22 7.75736 22 9.17157 22 12C22 14.8284 22 16.2426 21.1213 17.1213C20.2426 18 18.8284 18 16 18H8Z" fill={color}/>
	<g opacity="0.5">
		<Path d="M4.5 17.8589C5.34287 18 6.46249 18 8 18H16C17.5375 18 18.6571 18 19.5 17.8589V18C19.5 19.4001 19.5 20.1002 19.2275 20.635C18.9878 21.1054 18.6054 21.4878 18.135 21.7275C17.6002 22 16.9001 22 15.5 22H8.5C7.09987 22 6.3998 22 5.86502 21.7275C5.39462 21.4878 5.01217 21.1054 4.77248 20.635C4.5 20.1002 4.5 19.4001 4.5 18L4.5 17.8589Z" fill={color}/>
		<Path d="M4.5 6.14114C5.34287 6 6.46248 6 7.99998 6L16 6C17.5375 6 18.6571 6 19.5 6.14114V6C19.5 4.59987 19.5 3.8998 19.2275 3.36502C18.9878 2.89462 18.6054 2.51217 18.135 2.27248C17.6002 2 16.9001 2 15.5 2L8.5 2C7.09987 2 6.3998 2 5.86502 2.27248C5.39462 2.51217 5.01217 2.89462 4.77248 3.36503C4.5 3.8998 4.5 4.59987 4.5 6L4.5 6.14114Z" fill={color}/>
	</g>
</Svg>;

export default BoldDuotoneSliderHorizontal;
