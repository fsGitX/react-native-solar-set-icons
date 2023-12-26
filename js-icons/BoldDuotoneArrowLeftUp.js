import * as React from "react"
import Svg, { Path } from "react-native-svg";
    
const BoldDuotoneArrowLeftUp = ({
    size = 24,
    color = "#1f2937",
    stroke = 2,
    ...props
    }) => <Svg height={size} width={size} fill="none" viewBox="0 0 24 24" strokeWidth={stroke} xmlns="http://www.w3.org/2000/svg" {...props}>
	<Path d="M6.53033 15.5303C6.31583 15.7448 5.99324 15.809 5.71299 15.6929C5.43273 15.5768 5.25 15.3033 5.25 15V6C5.25 5.58579 5.58579 5.25 6 5.25L15 5.25C15.3033 5.25 15.5768 5.43273 15.6929 5.71299C15.809 5.99324 15.7448 6.31583 15.5303 6.53033L6.53033 15.5303Z" fill={color} fillRule="evenodd"/>
	<Path d="M18.5303 17.4697C18.8232 17.7626 18.8232 18.2374 18.5303 18.5303C18.2374 18.8232 17.7626 18.8232 17.4697 18.5303L10.5 11.5607L11.5607 10.5L18.5303 17.4697Z" fill={color} opacity="0.5"/>
</Svg>;

export default BoldDuotoneArrowLeftUp;
