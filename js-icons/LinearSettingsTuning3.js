import * as React from "react"
import Svg, { Path } from "react-native-svg";
    
const LinearSettingsTuning3 = ({
    size = 24,
    color = "#1f2937",
    stroke = 2,
    ...props
    }) => <Svg height={size} width={size} fill="none" viewBox="0 0 24 24" strokeWidth={stroke} xmlns="http://www.w3.org/2000/svg" {...props}>
	<circle cx="12" cy="12" r="2" stroke="black" strokeWidth="1.5" transform="rotate(180 12 12)"/>
	<circle cx="20" cy="14" r="2" stroke="black" strokeWidth="1.5" transform="rotate(180 20 14)"/>
	<circle r="2" stroke="black" strokeWidth="1.5" transform="matrix(-1 8.74228e-08 8.74228e-08 1 4 10)"/>
	<Path d="M12 8L12 5" stroke="black" strokeLinecap="round" strokeWidth="1.5"/>
	<Path d="M20 10L20 5" stroke="black" strokeLinecap="round" strokeWidth="1.5"/>
	<Path d="M4 14L4 19" stroke="black" strokeLinecap="round" strokeWidth="1.5"/>
	<Path d="M12 19L12 16" stroke="black" strokeLinecap="round" strokeWidth="1.5"/>
	<Path d="M20 19L20 18" stroke="black" strokeLinecap="round" strokeWidth="1.5"/>
	<Path d="M4 5L4 6" stroke="black" strokeLinecap="round" strokeWidth="1.5"/>
</Svg>;

export default LinearSettingsTuning3;
