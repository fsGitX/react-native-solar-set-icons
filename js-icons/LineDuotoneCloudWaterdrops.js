import * as React from "react"
import Svg, { Path } from "react-native-svg";
    
const LineDuotoneCloudWaterdrops = ({
    size = 24,
    color = "#1f2937",
    stroke = 2,
    ...props
    }) => <Svg height={size} width={size} fill="none" viewBox="0 0 24 24" strokeWidth={stroke} xmlns="http://www.w3.org/2000/svg" {...props}>
	<Path d="M14.381 8.02721C14.9767 7.81911 15.6178 7.70588 16.2857 7.70588C16.9404 7.70588 17.5693 7.81468 18.1551 8.01498M7.11616 10.6089C6.8475 10.5567 6.56983 10.5294 6.28571 10.5294C3.91878 10.5294 2 12.4256 2 14.7647C2 16.6611 3.26124 18.2664 5 18.8061M7.11616 10.6089C6.88706 9.9978 6.7619 9.33687 6.7619 8.64706C6.7619 5.52827 9.32028 3 12.4762 3C15.4159 3 17.8371 5.19371 18.1551 8.01498M7.11616 10.6089C7.68059 10.7184 8.20528 10.9374 8.66667 11.2426M18.1551 8.01498C20.393 8.78024 22 10.8811 22 13.3529C22 15.6958 20.5562 17.7055 18.5 18.5604" opacity="0.5" stroke="black" strokeLinecap="round" strokeWidth="1.5"/>
	<Path d="M11 20.3331C11 21.2536 10.3284 21.9998 9.5 21.9998C8.67157 21.9998 8 21.2536 8 20.3331C8 19.8282 8.45122 19.1753 8.85871 18.6885C9.19832 18.2829 9.80168 18.2829 10.1413 18.6885C10.5488 19.1753 11 19.8282 11 20.3331Z" stroke="black" strokeWidth="1.5"/>
	<Path d="M16 20.3331C16 21.2536 15.3284 21.9998 14.5 21.9998C13.6716 21.9998 13 21.2536 13 20.3331C13 19.8282 13.4512 19.1753 13.8587 18.6885C14.1983 18.2829 14.8017 18.2829 15.1413 18.6885C15.5488 19.1753 16 19.8282 16 20.3331Z" stroke="black" strokeWidth="1.5"/>
	<Path d="M13.5 15.3331C13.5 16.2536 12.8284 16.9998 12 16.9998C11.1716 16.9998 10.5 16.2536 10.5 15.3331C10.5 14.8282 10.9512 14.1753 11.3587 13.6885C11.6983 13.2829 12.3017 13.2829 12.6413 13.6885C13.0488 14.1753 13.5 14.8282 13.5 15.3331Z" stroke="black" strokeWidth="1.5"/>
</Svg>;

export default LineDuotoneCloudWaterdrops;