import * as React from "react"
import Svg, { Path } from "react-native-svg";
    
const BrokenHomeWiFi = ({
    size = 24,
    color = "#1f2937",
    stroke = 2,
    ...props
    }) => <Svg height={size} width={size} fill="none" viewBox="0 0 24 24" strokeWidth={stroke} xmlns="http://www.w3.org/2000/svg" {...props}>
	<Path d="M6 11.6825C9.31371 8.10583 14.6863 8.10583 18 11.6825M8.00002 13.841C10.2092 11.4566 13.7909 11.4566 16 13.841M10 16C11.1046 14.8078 12.8955 14.8078 14 16" stroke="black" strokeLinecap="round" strokeWidth="1.5"/>
	<Path d="M22 12.2039V13.725C22 17.6258 22 19.5763 20.8284 20.7881C19.6569 22 17.7712 22 14 22H10C6.22876 22 4.34315 22 3.17157 20.7881C2 19.5763 2 17.6258 2 13.725V12.2039C2 9.91549 2 8.77128 2.5192 7.82274C3.0384 6.87421 3.98695 6.28551 5.88403 5.10813L7.88403 3.86687C9.88939 2.62229 10.8921 2 12 2C13.1079 2 14.1106 2.62229 16.116 3.86687L18.116 5.10812C20.0131 6.28551 20.9616 6.87421 21.4808 7.82274" stroke="black" strokeLinecap="round" strokeWidth="1.5"/>
</Svg>;

export default BrokenHomeWiFi;
