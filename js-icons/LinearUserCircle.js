import * as React from "react"
import Svg, { Path } from "react-native-svg";
    
const LinearUserCircle = ({
    size = 24,
    color = "#1f2937",
    stroke = 2,
    ...props
    }) => <Svg height={size} width={size} fill="none" viewBox="0 0 24 24" strokeWidth={stroke} xmlns="http://www.w3.org/2000/svg" {...props}>
	<circle cx="12" cy="9" r="3" stroke="black" strokeWidth="1.5"/>
	<circle cx="12" cy="12" r="10" stroke="black" strokeWidth="1.5"/>
	<Path d="M17.9692 20C17.8101 17.1085 16.9248 15 12 15C7.07527 15 6.18997 17.1085 6.03082 20" stroke="black" strokeLinecap="round" strokeWidth="1.5"/>
</Svg>;

export default LinearUserCircle;
