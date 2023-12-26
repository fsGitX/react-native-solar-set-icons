import * as React from "react"
import Svg, { Path } from "react-native-svg";
    
const LineDuotoneMapLocationMapArrowLeft = ({
    size = 24,
    color = "#1f2937",
    stroke = 2,
    ...props
    }) => <Svg height={size} width={size} fill="none" viewBox="0 0 24 24" strokeWidth={stroke} xmlns="http://www.w3.org/2000/svg" {...props}>
	<Path d="M18.4731 12C18.4731 12.2499 18.5344 12.4998 18.657 12.7294L21.809 18.6331C22.5499 20.0209 20.9984 21.5021 19.5025 20.835L2.99281 13.4725C2.33094 13.1774 2 12.5887 2 12" stroke="black" strokeLinecap="round" strokeWidth="1.5"/>
	<Path d="M18.4731 12C18.4731 11.7501 18.5344 11.5002 18.657 11.2706L21.809 5.36689C22.5499 3.97914 20.9984 2.49789 19.5025 3.16496L2.99281 10.5275C2.33094 10.8226 2 11.4113 2 12" opacity="0.5" stroke="black" strokeWidth="1.5"/>
</Svg>;

export default LineDuotoneMapLocationMapArrowLeft;
