import * as React from "react"
import Svg, { Path } from "react-native-svg";
    
const BrokenMap = ({
    size = 24,
    color = "#1f2937",
    stroke = 2,
    ...props
    }) => <Svg height={size} width={size} fill="none" viewBox="0 0 24 24" strokeWidth={stroke} xmlns="http://www.w3.org/2000/svg" {...props}>
	<Path d="M21 7.16229C21 6.11871 21 5.59692 20.7169 5.20409C20.4337 4.81126 19.9387 4.64625 18.9487 4.31624L17.7839 3.92799C16.4168 3.47229 15.7333 3.24444 15.0451 3.3366C14.3569 3.42876 13.7574 3.82843 12.5583 4.62778L11.176 5.54937C10.2399 6.1734 9.77191 6.48541 9.24685 6.60952C9.05401 6.65511 8.85714 6.68147 8.6591 6.68823C8.11989 6.70665 7.58626 6.52877 6.51901 6.17302C5.12109 5.70705 4.42213 5.47406 3.89029 5.71066C3.70147 5.79466 3.53204 5.91678 3.39264 6.06935C3 6.49907 3 7.23584 3 8.70938V12.7736M21 11V15.2907C21 16.7642 21 17.501 20.6074 17.9307C20.468 18.0833 20.2985 18.2054 20.1097 18.2894C19.5779 18.526 18.8789 18.293 17.481 17.827C16.4137 17.4713 15.8801 17.2934 15.3409 17.3118C15.1429 17.3186 14.946 17.3449 14.7532 17.3905C14.2281 17.5146 13.7601 17.8266 12.824 18.4507L11.4417 19.3722C10.2426 20.1716 9.64311 20.5713 8.95493 20.6634C8.26674 20.7556 7.58319 20.5277 6.21609 20.072L5.05132 19.6838C4.06129 19.3538 3.56627 19.1888 3.28314 18.7959C3.01507 18.424 3.0008 17.9365 3.00004 17" stroke="black" strokeLinecap="round" strokeWidth="1.5"/>
	<Path d="M15 3.5V7M15 17V11" stroke="black" strokeLinecap="round" strokeWidth="1.5"/>
	<Path d="M9 20.5V17M9 7V13" stroke="black" strokeLinecap="round" strokeWidth="1.5"/>
</Svg>;

export default BrokenMap;
