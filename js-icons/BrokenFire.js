import * as React from "react"
import Svg, { Path } from "react-native-svg";
    
const BrokenFire = ({
    size = 24,
    color = "#1f2937",
    stroke = 2,
    ...props
    }) => <Svg height={size} width={size} fill="none" viewBox="0 0 24 24" strokeWidth={stroke} xmlns="http://www.w3.org/2000/svg" {...props}>
	<Path d="M3 13.1111C3 20.2222 8.28889 22 10.9333 22C12.2874 22 14.2481 21.6432 16 20.6097M18.7207 18C19.5021 16.7537 20 15.152 20 13.1111C20 8.58427 17.1653 5.35127 14.6023 3.49767C13.4438 2.65985 12 3.58 12 5.00971V5.33334C12 6.7752 11.3938 9.40705 9.70932 10.5017C8.84932 11.0606 7.92052 10.2241 7.816 9.20382L7.73017 8.36598C7.6304 7.39197 6.63841 6.80069 5.85996 7.39454C5.18794 7.90718 4.50139 8.60486 3.96944 9.5" stroke="black" strokeLinecap="round" strokeWidth="1.5"/>
	<Path d="M8 18.4445C8 21.2889 10.4889 22 11.7333 22C12.8222 22 15 21.2889 15 18.4445C15 17.3435 14.4107 16.6002 13.8404 16.1713C13.4424 15.872 12.8828 16.1408 12.7459 16.6196C12.5675 17.2437 11.9228 17.636 11.5944 17.0759C11.2941 16.5638 11.2941 15.7957 11.2941 15.3334C11.2941 14.6968 10.6539 14.2847 10.1389 14.6589C9.10649 15.4091 8 16.6815 8 18.4445Z" stroke="black" strokeWidth="1.5"/>
</Svg>;

export default BrokenFire;
