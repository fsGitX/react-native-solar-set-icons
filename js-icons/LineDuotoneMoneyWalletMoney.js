import * as React from "react"
import Svg, { Path } from "react-native-svg";
    
const LineDuotoneMoneyWalletMoney = ({
    size = 24,
    color = "#1f2937",
    stroke = 2,
    ...props
    }) => <Svg height={size} width={size} fill="none" viewBox="0 0 24 24" strokeWidth={stroke} xmlns="http://www.w3.org/2000/svg" {...props}>
	<Path d="M6 9H10" opacity="0.5" stroke="black" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5"/>
	<Path d="M20.8333 10H18.2308C16.4465 10 15 11.3431 15 13C15 14.6569 16.4465 16 18.2308 16H20.8333C20.9167 16 20.9583 16 20.9935 15.9979C21.5328 15.965 21.9623 15.5662 21.9977 15.0654C22 15.0327 22 14.994 22 14.9167V11.0833C22 11.006 22 10.9673 21.9977 10.9346C21.9623 10.4338 21.5328 10.035 20.9935 10.0021C20.9583 10 20.9167 10 20.8333 10Z" stroke="black" strokeWidth="1.5"/>
	<Path d="M20.965 10C20.8873 8.1277 20.6366 6.97975 19.8284 6.17157C18.6569 5 16.7712 5 13 5H10C6.22876 5 4.34315 5 3.17157 6.17157C2 7.34315 2 9.22876 2 13C2 16.7712 2 18.6569 3.17157 19.8284C4.34315 21 6.22876 21 10 21H13C16.7712 21 18.6569 21 19.8284 19.8284C20.6366 19.0203 20.8873 17.8723 20.965 16" stroke="black" strokeWidth="1.5"/>
	<Path d="M6 5L9.73549 2.52313C10.7874 1.82562 12.2126 1.82562 13.2645 2.52313L17 5" opacity="0.5" stroke="black" strokeLinecap="round" strokeWidth="1.5"/>
	<Path d="M17.991 13H18" opacity="0.5" stroke="black" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"/>
</Svg>;

export default LineDuotoneMoneyWalletMoney;
