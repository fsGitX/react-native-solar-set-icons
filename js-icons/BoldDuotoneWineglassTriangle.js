import * as React from "react"
import Svg, { Path } from "react-native-svg";
    
const BoldDuotoneWineglassTriangle = ({
    size = 24,
    color = "#1f2937",
    stroke = 2,
    ...props
    }) => <Svg height={size} width={size} fill="none" viewBox="0 0 24 24" strokeWidth={stroke} xmlns="http://www.w3.org/2000/svg" {...props}>
	<Path d="M19.2991 3H4.70095C3.20008 3 2.43759 4.79409 3.48381 5.86382L11.2851 13.8404C11.6773 14.2415 12.3227 14.2415 12.7149 13.8404L20.5162 5.86382C21.5624 4.79409 20.7999 3 19.2991 3Z" fill={color} opacity="0.5"/>
	<Path d="M7.0061 21C7.0061 20.5858 7.34189 20.25 7.7561 20.25H16.2439C16.6581 20.25 16.9939 20.5858 16.9939 21C16.9939 21.4142 16.6581 21.75 16.2439 21.75H7.7561C7.34189 21.75 7.0061 21.4142 7.0061 21Z" fill={color} fillRule="evenodd"/>
	<Path d="M11.2851 13.8404C11.6773 14.2415 12.3227 14.2415 12.7149 13.8404L16.4709 10H7.52905L11.2851 13.8404Z" fill={color}/>
	<Path d="M11.2853 13.8408C11.6776 14.2419 12.3229 14.2419 12.7152 13.8408L12.75 13.8052V20.2502H11.25V13.8047L11.2853 13.8408Z" fill={color} opacity="0.5"/>
</Svg>;

export default BoldDuotoneWineglassTriangle;
