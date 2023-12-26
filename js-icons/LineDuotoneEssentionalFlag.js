import * as React from "react"
import Svg, { Path } from "react-native-svg";
    
const LineDuotoneEssentionalFlag = ({
    size = 24,
    color = "#1f2937",
    stroke = 2,
    ...props
    }) => <Svg height={size} width={size} fill="none" viewBox="0 0 24 24" strokeWidth={stroke} xmlns="http://www.w3.org/2000/svg" {...props}>
	<Path d="M5 22V14V4V2" stroke="black" strokeLinecap="round" strokeWidth="1.5"/>
	<Path d="M5 14L7.47067 13.5059C9.1212 13.1758 10.8321 13.3329 12.3949 13.958C14.0885 14.6354 15.9524 14.7619 17.722 14.3195L17.9364 14.2659C18.5615 14.1097 19 13.548 19 12.9038V5.53673C19 4.75617 18.2665 4.18343 17.5092 4.37274C15.878 4.78055 14.1597 4.66393 12.5986 4.03947L12.3949 3.95801C10.8321 3.33288 9.1212 3.1758 7.47067 3.50591L5 4.00004" opacity="0.5" stroke="black" strokeLinecap="round" strokeWidth="1.5"/>
</Svg>;

export default LineDuotoneEssentionalFlag;
