import * as React from "react"
import Svg, { Path } from "react-native-svg";
    
const BoldDuotoneMinimalisticMagniferZoomOut = ({
    size = 24,
    color = "#1f2937",
    stroke = 2,
    ...props
    }) => <Svg height={size} width={size} fill="none" viewBox="0 0 24 24" strokeWidth={stroke} xmlns="http://www.w3.org/2000/svg" {...props}>
	<Path d="M11.1566 20.3133C16.2137 20.3133 20.3133 16.2137 20.3133 11.1566C20.3133 6.09956 16.2137 2 11.1566 2C6.09956 2 2 6.09956 2 11.1566C2 16.2137 6.09956 20.3133 11.1566 20.3133Z" fill={color} opacity="0.5"/>
	<Path d="M8.02393 11.1565C8.02393 10.7572 8.34758 10.4336 8.74682 10.4336H13.5661C13.9653 10.4336 14.289 10.7572 14.289 11.1565C14.289 11.5557 13.9653 11.8794 13.5661 11.8794H8.74682C8.34758 11.8794 8.02393 11.5557 8.02393 11.1565Z" fill={color} fillRule="evenodd"/>
	<Path d="M18.8387 18.8387C19.121 18.5564 19.5787 18.5564 19.861 18.8387L21.7887 20.7664C22.071 21.0487 22.071 21.5064 21.7887 21.7887C21.5064 22.071 21.0487 22.071 20.7664 21.7887L18.8387 19.861C18.5564 19.5787 18.5564 19.121 18.8387 18.8387Z" fill={color} fillRule="evenodd"/>
</Svg>;

export default BoldDuotoneMinimalisticMagniferZoomOut;
