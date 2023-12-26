import * as React from "react"
import Svg, { Path } from "react-native-svg";
    
const LinearEssentionalCloseCircle = ({
    size = 24,
    color = "#1f2937",
    stroke = 2,
    ...props
    }) => <Svg height={size} width={size} fill="none" viewBox="0 0 24 24" strokeWidth={stroke} xmlns="http://www.w3.org/2000/svg" {...props}>
	<circle cx="12" cy="12" r="10" stroke="black" strokeWidth="1.5"/>
	<Path d="M14.5 9.49999L9.5 14.5M9.49998 9.49997L14.5 14.4999" stroke="black" strokeLinecap="round" strokeWidth="1.5"/>
</Svg>;

export default LinearEssentionalCloseCircle;
