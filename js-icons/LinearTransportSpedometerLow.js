import * as React from "react"
import Svg, { Path } from "react-native-svg";
    
const LinearTransportSpedometerLow = ({
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
	<Path d="M13.7783 14.364C14.9499 13.1924 14.9499 11.2929 13.7783 10.1214C12.6068 8.94978 10.7073 8.94978 9.5357 10.1214C9.09005 10.567 8.77881 11.4921 8.56421 12.4675C8.24329 13.926 8.08283 14.6553 8.66363 15.2361C9.24444 15.8169 9.9737 15.6564 11.4322 15.3355C12.4076 15.1209 13.3327 14.8096 13.7783 14.364Z" stroke="#1C274C" strokeWidth="1.5"/>
</Svg>;

export default LinearTransportSpedometerLow;
