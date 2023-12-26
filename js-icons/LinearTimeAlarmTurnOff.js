import * as React from "react"
import Svg, { Path } from "react-native-svg";
    
const LinearTimeAlarmTurnOff = ({
    size = 24,
    color = "#1f2937",
    stroke = 2,
    ...props
    }) => <Svg height={size} width={size} fill="none" viewBox="0 0 24 24" strokeWidth={stroke} xmlns="http://www.w3.org/2000/svg" {...props}>
	<circle cx="12" cy="13" r="9" stroke="black" strokeWidth="1.5"/>
	<Path d="M14.1213 15.1213L12 13M12 13L9.87866 10.8787M12 13L14.1213 10.8787M12 13L9.87868 15.1213" stroke="black" strokeLinecap="round" strokeWidth="1.5"/>
	<Path d="M3.5 4.5L7.50002 2" stroke="black" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5"/>
	<Path d="M20.5 4.5L16.5 2" stroke="black" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5"/>
</Svg>;

export default LinearTimeAlarmTurnOff;
