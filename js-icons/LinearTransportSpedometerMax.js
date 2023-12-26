import * as React from "react"
import Svg, { Path } from "react-native-svg";
    
const LinearTransportSpedometerMax = ({
    size = 24,
    color = "#1f2937",
    stroke = 2,
    ...props
    }) => <Svg height={size} width={size} fill="none" viewBox="0 0 24 24" strokeWidth={stroke} xmlns="http://www.w3.org/2000/svg" {...props}>
	<Path d="M22 12C22 17.5228 17.5228 22 12 22C6.47715 22 2 17.5228 2 12C2 6.47715 6.47715 2 12 2C17.5228 2 22 6.47715 22 12Z" stroke="#1C274C" strokeWidth="1.5"/>
	<Path d="M19 19L17.5 17.5" stroke="#1C274C" strokeLinecap="round" strokeWidth="1.5"/>
	<Path d="M19 5L17.5 6.5" stroke="#1C274C" strokeLinecap="round" strokeWidth="1.5"/>
	<Path d="M5 19L6.5 17.5" stroke="#1C274C" strokeLinecap="round" strokeWidth="1.5"/>
	<Path d="M5 5L6.5 6.5" stroke="#1C274C" strokeLinecap="round" strokeWidth="1.5"/>
	<Path d="M2 12H4" stroke="#1C274C" strokeLinecap="round" strokeWidth="1.5"/>
	<Path d="M19.9998 12L21.9998 12" stroke="#1C274C" strokeLinecap="round" strokeWidth="1.5"/>
	<Path d="M12 4.00021L12 2.00021" stroke="#1C274C" strokeLinecap="round" strokeWidth="1.5"/>
	<Path d="M10.1214 14.364C8.94978 13.1924 8.94978 11.2929 10.1214 10.1214C11.2929 8.94978 13.1924 8.94978 14.364 10.1214C14.8096 10.567 15.1209 11.4921 15.3355 12.4675C15.6564 13.926 15.8169 14.6553 15.2361 15.2361C14.6553 15.8169 13.926 15.6564 12.4675 15.3355C11.4921 15.1209 10.567 14.8096 10.1214 14.364Z" stroke="#1C274C" strokeWidth="1.5"/>
</Svg>;

export default LinearTransportSpedometerMax;
