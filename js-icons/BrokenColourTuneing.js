import * as React from "react"
import Svg, { Path } from "react-native-svg";
    
const BrokenColourTuneing = ({
    size = 24,
    color = "#1f2937",
    stroke = 2,
    ...props
    }) => <Svg height={size} width={size} fill="none" viewBox="0 0 24 24" strokeWidth={stroke} xmlns="http://www.w3.org/2000/svg" {...props}>
	<Path d="M2 12H9.5M22 12H14.5" stroke="black" strokeLinecap="round" strokeWidth="1.5"/>
	<Path d="M20.0002 15.6844C20.0002 19.0002 17.7345 22.0002 16.0002 22.0002C14.7427 22.0002 13.6725 21.03 12.9682 19M4.14404 8.31579C4.14404 5 6.40978 2 8.14404 2C10.4128 2 12.0723 5.15806 12.0723 12.0002C12.0723 13.0935 12.1146 14.0927 12.1951 15" stroke="black" strokeLinecap="round" strokeWidth="1.5"/>
</Svg>;

export default BrokenColourTuneing;
