import * as React from "react"
import Svg, { Path } from "react-native-svg";
    
const LineDuotoneEssentionalSliderMinimalisticHorizontal = ({
    size = 24,
    color = "#1f2937",
    stroke = 2,
    ...props
    }) => <Svg height={size} width={size} fill="none" viewBox="0 0 24 24" strokeWidth={stroke} xmlns="http://www.w3.org/2000/svg" {...props}>
	<Path d="M8 18C5.17157 18 3.75736 18 2.87868 17.1213C2 16.2426 2 14.8284 2 12C2 9.17157 2 7.75736 2.87868 6.87868C3.75736 6 5.17157 6 8 6L16 6C18.8284 6 20.2426 6 21.1213 6.87868C22 7.75736 22 9.17157 22 12C22 14.8284 22 16.2426 21.1213 17.1213C20.2426 18 18.8284 18 16 18H8Z" stroke="black" strokeWidth="1.5"/>
	<Path d="M4.5 3L19.5 3" opacity="0.5" stroke="black" strokeLinecap="round" strokeWidth="1.5"/>
	<Path d="M4.5 21L19.5 21" opacity="0.5" stroke="black" strokeLinecap="round" strokeWidth="1.5"/>
</Svg>;

export default LineDuotoneEssentionalSliderMinimalisticHorizontal;