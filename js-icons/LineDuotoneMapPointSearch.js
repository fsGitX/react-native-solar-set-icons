import * as React from "react"
import Svg, { Path } from "react-native-svg";
    
const LineDuotoneMapPointSearch = ({
    size = 24,
    color = "#1f2937",
    stroke = 2,
    ...props
    }) => <Svg height={size} width={size} fill="none" viewBox="0 0 24 24" strokeWidth={stroke} xmlns="http://www.w3.org/2000/svg" {...props}>
	<Path d="M4 10.1433C4 5.64588 7.58172 2 12 2C16.4183 2 20 5.64588 20 10.1433C20 14.6055 17.4467 19.8124 13.4629 21.6744C12.5343 22.1085 11.4657 22.1085 10.5371 21.6744C6.55332 19.8124 4 14.6055 4 10.1433Z" opacity="0.5" stroke="black" strokeWidth="1.5"/>
	<Path d="M14.1249 12.1178L15.5 13.5M14.1249 12.1178C14.6657 11.5752 15 10.8266 15 10C15 8.34315 13.6569 7 12 7C10.3431 7 9 8.34315 9 10C9 11.6569 10.3431 13 12 13C12.8302 13 13.5817 12.6628 14.1249 12.1178Z" stroke="black" strokeLinecap="round" strokeWidth="1.5"/>
</Svg>;

export default LineDuotoneMapPointSearch;
