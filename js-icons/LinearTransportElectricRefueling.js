import * as React from "react"
import Svg, { Path } from "react-native-svg";
    
const LinearTransportElectricRefueling = ({
    size = 24,
    color = "#1f2937",
    stroke = 2,
    ...props
    }) => <Svg height={size} width={size} fill="none" viewBox="0 0 24 24" strokeWidth={stroke} xmlns="http://www.w3.org/2000/svg" {...props}>
	<Path d="M16 22V8C16 5.17157 16 3.75736 15.1213 2.87868C14.2426 2 12.8284 2 10 2H9C6.17157 2 4.75736 2 3.87868 2.87868C3 3.75736 3 5.17157 3 8V22" stroke="#1C274C" strokeWidth="1.5"/>
	<Path d="M9.5 10L8 12.5H11L9.5 15" stroke="#1C274C" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5"/>
	<Path d="M17 22H2" stroke="#1C274C" strokeLinecap="round" strokeWidth="1.5"/>
	<Path d="M19.5 4L20.7331 4.98647C20.8709 5.09673 20.9398 5.15186 21.0025 5.20805C21.5937 5.73807 21.9508 6.48086 21.9953 7.27364C22 7.35769 22 7.44594 22 7.62244V18.5C22 19.3284 21.3284 20 20.5 20C19.6716 20 19 19.3284 19 18.5V18.4286C19 17.6396 18.3604 17 17.5714 17H16" stroke="#1C274C" strokeLinecap="round" strokeWidth="1.5"/>
	<Path d="M22 8H20.5C19.6716 8 19 8.67157 19 9.5V11.9189C19 12.5645 19.4131 13.1377 20.0257 13.3419L22 14" stroke="#1C274C" strokeLinecap="round" strokeWidth="1.5"/>
</Svg>;

export default LinearTransportElectricRefueling;
