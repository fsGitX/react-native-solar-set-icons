import * as React from "react"
import Svg, { Path } from "react-native-svg";
    
const BrokenElectronicDisplay = ({
    size = 24,
    color = "#1f2937",
    stroke = 2,
    ...props
    }) => <Svg height={size} width={size} fill="none" viewBox="0 0 24 24" strokeWidth={stroke} xmlns="http://www.w3.org/2000/svg" {...props}>
	<Path d="M22 10V9C22 6.17157 22 4.75736 21.1213 3.87868C20.2426 3 18.8284 3 16 3H8C5.17157 3 3.75736 3 2.87868 3.87868C2.57888 4.17848 2.38137 4.54062 2.25125 5M2 9V10C2 12.8284 2 14.2426 2.87868 15.1213C3.75736 16 5.17157 16 8 16H16C18.8284 16 20.2426 16 21.1213 15.1213C21.4211 14.8215 21.6186 14.4594 21.7487 14" stroke="black" strokeLinecap="round" strokeWidth="1.5"/>
	<Path d="M12 19V16.5M12 19L18 21M12 19L6 21" stroke="black" strokeLinecap="round" strokeWidth="1.5"/>
</Svg>;

export default BrokenElectronicDisplay;
