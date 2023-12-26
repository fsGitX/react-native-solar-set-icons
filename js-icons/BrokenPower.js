import * as React from "react"
import Svg, { Path } from "react-native-svg";
    
const BrokenPower = ({
    size = 24,
    color = "#1f2937",
    stroke = 2,
    ...props
    }) => <Svg height={size} width={size} fill="none" viewBox="0 0 24 24" strokeWidth={stroke} xmlns="http://www.w3.org/2000/svg" {...props}>
	<Path d="M12 2V6" stroke="black" strokeLinecap="round" strokeWidth="1.5"/>
	<Path d="M8.5 3.70593C5.26806 5.07145 3 8.27087 3 12C3 14.3051 3.86656 16.4078 5.29169 18M15.5 3.70593C18.7319 5.07145 21 8.27087 21 12C21 16.9706 16.9706 21 12 21C10.9481 21 9.93834 20.8196 9 20.4879" stroke="black" strokeLinecap="round" strokeWidth="1.5"/>
</Svg>;

export default BrokenPower;
