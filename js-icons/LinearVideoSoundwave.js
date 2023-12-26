import * as React from "react"
import Svg, { Path } from "react-native-svg";
    
const LinearVideoSoundwave = ({
    size = 24,
    color = "#1f2937",
    stroke = 2,
    ...props
    }) => <Svg height={size} width={size} fill="none" viewBox="0 0 24 24" strokeWidth={stroke} xmlns="http://www.w3.org/2000/svg" {...props}>
	<Path d="M12 4L12 20" stroke="black" strokeLinecap="round" strokeWidth="1.5"/>
	<Path d="M16 7L16 17" stroke="black" strokeLinecap="round" strokeWidth="1.5"/>
	<Path d="M8 7L8 17" stroke="black" strokeLinecap="round" strokeWidth="1.5"/>
	<Path d="M20 11L20 13" stroke="black" strokeLinecap="round" strokeWidth="1.5"/>
	<Path d="M4 11L4 13" stroke="black" strokeLinecap="round" strokeWidth="1.5"/>
</Svg>;

export default LinearVideoSoundwave;
