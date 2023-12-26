import * as React from "react"
import Svg, { Path } from "react-native-svg";
    
const LineDuotoneLogout = ({
    size = 24,
    color = "#1f2937",
    stroke = 2,
    ...props
    }) => <Svg height={size} width={size} fill="none" viewBox="0 0 24 24" strokeWidth={stroke} xmlns="http://www.w3.org/2000/svg" {...props}>
	<Path d="M12 20C7.58172 20 4 16.4183 4 12C4 7.58172 7.58172 4 12 4" opacity="0.5" stroke="black" strokeLinecap="round" strokeWidth="1.5"/>
	<Path d="M10 12H20M20 12L17 9M20 12L17 15" stroke="black" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5"/>
</Svg>;

export default LineDuotoneLogout;
