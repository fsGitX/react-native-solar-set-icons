import * as React from "react"
import Svg, { Path } from "react-native-svg";
    
const LinearCode = ({
    size = 24,
    color = "#1f2937",
    stroke = 2,
    ...props
    }) => <Svg height={size} width={size} fill="none" viewBox="0 0 24 24" strokeWidth={stroke} xmlns="http://www.w3.org/2000/svg" {...props}>
	<Path d="M17 7.82959L18.6965 9.35641C20.239 10.7447 21.0103 11.4389 21.0103 12.3296C21.0103 13.2203 20.239 13.9145 18.6965 15.3028L17 16.8296" stroke="black" strokeLinecap="round" strokeWidth="1.5"/>
	<Path d="M13.9868 5L12 12.4149L10.0132 19.8297" stroke="black" strokeLinecap="round" strokeWidth="1.5"/>
	<Path d="M6.99999 7.82959L5.30352 9.35641C3.76096 10.7447 2.98969 11.4389 2.98969 12.3296C2.98969 13.2203 3.76096 13.9145 5.30352 15.3028L6.99999 16.8296" stroke="black" strokeLinecap="round" strokeWidth="1.5"/>
</Svg>;

export default LinearCode;
