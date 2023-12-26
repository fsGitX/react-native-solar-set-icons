import * as React from "react"
import Svg, { Path } from "react-native-svg";
    
const LineDuotoneSportsBowling = ({
    size = 24,
    color = "#1f2937",
    stroke = 2,
    ...props
    }) => <Svg height={size} width={size} fill="none" viewBox="0 0 24 24" strokeWidth={stroke} xmlns="http://www.w3.org/2000/svg" {...props}>
	<circle cx="12" cy="12" r="10" stroke="black" strokeWidth="1.5"/>
	<circle cx="12" cy="7" opacity="0.5" r="1.5" stroke="black" strokeWidth="1.5" transform="rotate(-90 12 7)"/>
	<circle cx="12" cy="12" opacity="0.5" r="1.5" stroke="black" strokeWidth="1.5" transform="rotate(-90 12 12)"/>
	<Path d="M8 8C8.82843 8 9.5 8.67157 9.5 9.5C9.5 10.3284 8.82843 11 8 11C7.17157 11 6.5 10.3284 6.5 9.5C6.5 8.67157 7.17157 8 8 8Z" opacity="0.5" stroke="black" strokeWidth="1.5"/>
</Svg>;

export default LineDuotoneSportsBowling;
