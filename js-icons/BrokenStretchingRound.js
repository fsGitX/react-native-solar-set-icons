import * as React from "react"
import Svg, { Path } from "react-native-svg";
    
const BrokenStretchingRound = ({
    size = 24,
    color = "#1f2937",
    stroke = 2,
    ...props
    }) => <Svg height={size} width={size} fill="none" viewBox="0 0 24 24" strokeWidth={stroke} xmlns="http://www.w3.org/2000/svg" {...props}>
	<circle cx="14.5" cy="4.5" r="2.5" stroke="black" strokeWidth="1.5"/>
	<Path d="M19 21.9955V18.0484C19 16.2725 17.395 14.9194 15.6265 15.2042M7.94806 13.4343L7.92328 13.4104C6.88143 12.4036 7.6864 10.7847 8.5932 10.1422C9.5 9.49967 13.3451 8.49967 13.3451 13.4341C13.3451 15.1268 12.8704 16.7126 12.0433 18.0484M5 21.9998C6.46053 21.9998 7.82003 21.6251 9 20.9674" stroke="black" strokeLinecap="round" strokeWidth="1.5"/>
</Svg>;

export default BrokenStretchingRound;
