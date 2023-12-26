import * as React from "react"
import Svg, { Path } from "react-native-svg";
    
const LinearMapArrowLeft = ({
    size = 24,
    color = "#1f2937",
    stroke = 2,
    ...props
    }) => <Svg height={size} width={size} fill="none" viewBox="0 0 24 24" strokeWidth={stroke} xmlns="http://www.w3.org/2000/svg" {...props}>
	<Path d="M19.5025 20.835L2.99281 13.4725C1.66906 12.8822 1.66906 11.1178 2.99281 10.5275L19.5025 3.16496C20.9984 2.49789 22.5499 3.97914 21.809 5.36689L18.657 11.2706C18.4118 11.7298 18.4118 12.2702 18.657 12.7294L21.809 18.6331C22.5499 20.0209 20.9984 21.5021 19.5025 20.835Z" stroke="black" strokeWidth="1.5"/>
</Svg>;

export default LinearMapArrowLeft;
