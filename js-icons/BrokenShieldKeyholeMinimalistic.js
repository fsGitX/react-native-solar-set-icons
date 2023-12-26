import * as React from "react"
import Svg, { Path } from "react-native-svg";
    
const BrokenShieldKeyholeMinimalistic = ({
    size = 24,
    color = "#1f2937",
    stroke = 2,
    ...props
    }) => <Svg height={size} width={size} fill="none" viewBox="0 0 24 24" strokeWidth={stroke} xmlns="http://www.w3.org/2000/svg" {...props}>
	<Path d="M12 13.5001V16.5001M13.4997 13.0978C12.0651 13.9261 10.2306 13.4345 9.40236 11.9999C8.57407 10.5653 9.06561 8.73079 10.5003 7.9025C11.085 7.56488 11.7363 7.44654 12.3587 7.52199C13.2632 7.63163 14.107 8.15054 14.5976 9.0004C15.0883 9.85025 15.1158 10.8404 14.7585 11.6786C14.5126 12.2554 14.0845 12.7602 13.4997 13.0978Z" stroke="black" strokeLinecap="round" strokeWidth="1.5"/>
	<Path d="M3 10.4167C3 7.21907 3 5.62028 3.37752 5.08241C3.75503 4.54454 5.25832 4.02996 8.26491 3.00079L8.83772 2.80472C10.405 2.26824 11.1886 2 12 2C12.8114 2 13.595 2.26824 15.1623 2.80472L15.7351 3.00079C18.7417 4.02996 20.245 4.54454 20.6225 5.08241C21 5.62028 21 7.21907 21 10.4167C21 10.8996 21 11.4234 21 11.9914C21 14.4963 20.1632 16.4284 19 17.9041M3.19284 14C4.05026 18.2984 7.57641 20.5129 9.89856 21.5273C10.62 21.8424 10.9807 22 12 22C13.0193 22 13.38 21.8424 14.1014 21.5273C14.6796 21.2747 15.3324 20.9478 16 20.5328" stroke="black" strokeLinecap="round" strokeWidth="1.5"/>
</Svg>;

export default BrokenShieldKeyholeMinimalistic;
