import * as React from "react"
import Svg, { Path } from "react-native-svg";
    
const BoldDuotoneElectronicPrinterMinimalistic = ({
    size = 24,
    color = "#1f2937",
    stroke = 2,
    ...props
    }) => <Svg height={size} width={size} fill="none" viewBox="0 0 24 24" strokeWidth={stroke} xmlns="http://www.w3.org/2000/svg" {...props}>
	<Path d="M17.1213 21.1213C18 20.2426 18 18.8284 18 16L18 12.6595C16.5233 12.1579 14.5419 11.7498 12 11.7498C9.45812 11.7498 7.47667 12.1579 6 12.6595V16C6 18.8284 6 20.2426 6.87868 21.1213C7.75736 22 9.17157 22 12 22C14.8284 22 16.2426 22 17.1213 21.1213Z" fill={color}/>
	<Path d="M17.1209 2.87868C16.2422 2 14.828 2 11.9995 2C9.17112 2 7.75691 2 6.87823 2.87868C6.38586 3.37105 6.16939 4.03157 6.07422 5.01484C6.63346 4.99996 7.25161 4.99998 7.92921 5H16.0704C16.7478 4.99998 17.3658 4.99996 17.9249 5.01483C17.8297 4.03156 17.6132 3.37105 17.1209 2.87868Z" fill={color}/>
	<Path d="M16 6H8C5.17157 6 3.75736 6 2.87868 6.87868C2 7.75736 2 9.17157 2 12C2 14.8284 2 16.2426 2.87868 17.1213C3.37105 17.6137 4.03157 17.8302 5.01484 17.9253C4.99996 17.3662 4.99998 16.7481 5 16.0706L5 13.0424C4.93434 13.0706 4.87007 13.0988 4.8072 13.1271C4.42933 13.2967 3.98546 13.1279 3.8158 12.7501C3.64614 12.3722 3.81493 11.9283 4.1928 11.7587C5.91455 10.9856 8.4805 10.2498 12 10.2498C15.5195 10.2498 18.0854 10.9856 19.8072 11.7587C20.1851 11.9283 20.3539 12.3722 20.1842 12.7501C20.0145 13.1279 19.5707 13.2967 19.1928 13.1271C19.1299 13.0988 19.0657 13.0706 19 13.0424L19 16.0706C19 16.748 19 17.3662 18.9852 17.9253C19.9684 17.8302 20.629 17.6137 21.1213 17.1213C22 16.2426 22 14.8284 22 12C22 9.17157 22 7.75736 21.1213 6.87868C20.2426 6 18.8284 6 16 6Z" fill={color} opacity="0.5"/>
</Svg>;

export default BoldDuotoneElectronicPrinterMinimalistic;
