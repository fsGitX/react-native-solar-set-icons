import * as React from "react"
import Svg, { Path } from "react-native-svg";
    
const BrokenSettingsTuning4 = ({
    size = 24,
    color = "#1f2937",
    stroke = 2,
    ...props
    }) => <Svg height={size} width={size} fill="none" viewBox="0 0 24 24" strokeWidth={stroke} xmlns="http://www.w3.org/2000/svg" {...props}>
	<Path d="M12 14C10.8954 14 10 13.1046 10 12C10 10.8954 10.8954 10 12 10C13.1046 10 14 10.8954 14 12C14 13.1046 13.1046 14 12 14Z" stroke="black" strokeWidth="1.5"/>
	<Path d="M14 6C12.8954 6 12 5.10457 12 4C12 2.89543 12.8954 2 14 2C15.1046 2 16 2.89543 16 4C16 5.10457 15.1046 6 14 6Z" stroke="black" strokeWidth="1.5"/>
	<Path d="M10 22C11.1046 22 12 21.1046 12 20C12 18.8954 11.1046 18 10 18C8.89543 18 8 18.8954 8 20C8 21.1046 8.89543 22 10 22Z" stroke="black" strokeWidth="1.5"/>
	<Path d="M17.5 20L19 20M12 20L14.75 20" stroke="black" strokeLinecap="round" strokeWidth="1.5"/>
	<Path d="M6.5 4L5 4M12 4L9.25 4" stroke="black" strokeLinecap="round" strokeWidth="1.5"/>
	<Path d="M19 12H14" stroke="black" strokeLinecap="round" strokeWidth="1.5"/>
	<Path d="M19 4L16 4" stroke="black" strokeLinecap="round" strokeWidth="1.5"/>
	<Path d="M5 20L7.66667 20" stroke="black" strokeLinecap="round" strokeWidth="1.5"/>
	<Path d="M10 12L7.5 12M5.5 12L5 12" stroke="black" strokeLinecap="round" strokeWidth="1.5"/>
</Svg>;

export default BrokenSettingsTuning4;
