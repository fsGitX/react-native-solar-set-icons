import * as React from "react"
import Svg, { Path } from "react-native-svg";
    
const LineDuotoneStretchingRound = ({
    size = 24,
    color = "#1f2937",
    stroke = 2,
    ...props
    }) => <Svg height={size} width={size} fill="none" viewBox="0 0 24 24" strokeWidth={stroke} xmlns="http://www.w3.org/2000/svg" {...props}>
	<circle cx="14.5" cy="4.5" r="2.5" stroke="black" strokeWidth="1.5"/>
	<Path d="M7.94806 13.4343L7.92328 13.4104C6.88143 12.4036 7.6864 10.7847 8.5932 10.1422C9.5 9.49967 13.3451 8.49967 13.3451 13.4341C13.3451 18.1285 9.69442 21.9998 5 21.9998" opacity="0.5" stroke="black" strokeLinecap="round" strokeWidth="1.5"/>
	<Path d="M19 21.9962V18.0492C19 16.2733 17.395 14.9201 15.6265 15.205" stroke="black" strokeLinecap="round" strokeWidth="1.5"/>
</Svg>;

export default LineDuotoneStretchingRound;
