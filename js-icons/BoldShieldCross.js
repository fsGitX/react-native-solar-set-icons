import * as React from "react"
import Svg, { Path } from "react-native-svg";
    
const BoldShieldCross = ({
    size = 24,
    color = "#1f2937",
    stroke = 2,
    ...props
    }) => <Svg height={size} width={size} fill="none" viewBox="0 0 24 24" strokeWidth={stroke} xmlns="http://www.w3.org/2000/svg" {...props}>
	<Path d="M3.37752 5.08241C3 5.62028 3 7.21907 3 10.4167V11.9914C3 17.6294 7.23896 20.3655 9.89856 21.5273C10.62 21.8424 10.9807 22 12 22C13.0193 22 13.38 21.8424 14.1014 21.5273C16.761 20.3655 21 17.6294 21 11.9914V10.4167C21 7.21907 21 5.62028 20.6225 5.08241C20.245 4.54454 18.7417 4.02996 15.7351 3.00079L15.1623 2.80472C13.595 2.26824 12.8114 2 12 2C11.1886 2 10.405 2.26824 8.83772 2.80472L8.26491 3.00079C5.25832 4.02996 3.75503 4.54454 3.37752 5.08241ZM10.0303 8.96965C9.73744 8.67676 9.26256 8.67676 8.96967 8.96965C8.67678 9.26254 8.67678 9.73742 8.96967 10.0303L10.9394 12L8.96969 13.9697C8.6768 14.2625 8.6768 14.7374 8.96969 15.0303C9.26258 15.3232 9.73746 15.3232 10.0304 15.0303L12 13.0607L13.9696 15.0303C14.2625 15.3232 14.7374 15.3232 15.0303 15.0303C15.3232 14.7374 15.3232 14.2625 15.0303 13.9696L13.0607 12L15.0303 10.0303C15.3232 9.73744 15.3232 9.26256 15.0303 8.96967C14.7374 8.67678 14.2626 8.67678 13.9697 8.96967L12 10.9393L10.0303 8.96965Z" fill={color} fillRule="evenodd"/>
</Svg>;

export default BoldShieldCross;