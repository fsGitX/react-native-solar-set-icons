import * as React from "react"
import Svg, { Path } from "react-native-svg";
    
const BoldDuotoneSearchMinimalisticMagnifer = ({
    size = 24,
    color = "#1f2937",
    stroke = 2,
    ...props
    }) => <Svg height={size} width={size} fill="none" viewBox="0 0 24 24" strokeWidth={stroke} xmlns="http://www.w3.org/2000/svg" {...props}>
	<Path d="M20.3133 11.1566C20.3133 16.2137 16.2137 20.3133 11.1566 20.3133C6.09956 20.3133 2 16.2137 2 11.1566C2 6.09956 6.09956 2 11.1566 2C16.2137 2 20.3133 6.09956 20.3133 11.1566Z" fill={color} opacity="0.5"/>
	<Path d="M18.8387 18.8387C19.121 18.5564 19.5787 18.5564 19.861 18.8387L21.7887 20.7664C22.071 21.0487 22.071 21.5064 21.7887 21.7887C21.5064 22.071 21.0487 22.071 20.7664 21.7887L18.8387 19.861C18.5564 19.5787 18.5564 19.121 18.8387 18.8387Z" fill={color} fillRule="evenodd"/>
</Svg>;

export default BoldDuotoneSearchMinimalisticMagnifer;
