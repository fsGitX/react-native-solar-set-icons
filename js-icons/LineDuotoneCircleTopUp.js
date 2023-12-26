import * as React from "react"
import Svg, { Path } from "react-native-svg";
    
const LineDuotoneCircleTopUp = ({
    size = 24,
    color = "#1f2937",
    stroke = 2,
    ...props
    }) => <Svg height={size} width={size} fill="none" viewBox="0 0 24 24" strokeWidth={stroke} xmlns="http://www.w3.org/2000/svg" {...props}>
	<Path d="M13 11L22 2M22 2H16.6562M22 2V7.34375" stroke="black" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5"/>
	<Path d="M12 2C6.47715 2 2 6.47715 2 12C2 17.5228 6.47715 22 12 22C17.5228 22 22 17.5228 22 12" opacity="0.5" stroke="black" strokeLinecap="round" strokeWidth="1.5"/>
</Svg>;

export default LineDuotoneCircleTopUp;
