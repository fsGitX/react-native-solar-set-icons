import * as React from "react"
import Svg, { Path } from "react-native-svg";
    
const BoldDuotoneMessagesPlain2 = ({
    size = 24,
    color = "#1f2937",
    stroke = 2,
    ...props
    }) => <Svg height={size} width={size} fill="none" viewBox="0 0 24 24" strokeWidth={stroke} xmlns="http://www.w3.org/2000/svg" {...props}>
	<Path d="M5.79624 18.2037L21.5122 2.48782C20.5237 1.49939 18.6511 2.12356 14.906 3.37189L5.57477 6.48218C3.49295 7.1761 2.45203 7.52305 2.13608 8.28637C2.06182 8.46577 2.01692 8.65596 2.00311 8.84963C1.94433 9.67365 2.72018 10.4495 4.27188 12.0011L4.55451 12.2837C4.80921 12.5384 4.93655 12.6658 5.03282 12.8075C5.22269 13.0871 5.33046 13.4143 5.34393 13.7519C5.35076 13.9232 5.32403 14.1013 5.27057 14.4574C5.07488 15.7612 4.97703 16.4131 5.0923 16.9147C5.20622 17.4105 5.45393 17.8534 5.79624 18.2037Z" fill={color} fillRule="evenodd"/>
	<Path d="M17.4976 18.4856L20.6282 9.09419C21.8766 5.3492 22.5008 3.47671 21.5123 2.48828L5.79639 18.2042C6.14444 18.5604 6.59028 18.8208 7.09271 18.9438C7.59269 19.0661 8.24591 18.9774 9.55235 18.8001L9.62378 18.7904C9.99205 18.7404 10.1762 18.7155 10.353 18.7261C10.674 18.7455 10.984 18.85 11.2511 19.029C11.3983 19.1276 11.5297 19.259 11.7925 19.5217L12.0437 19.773C13.554 21.2832 14.3092 22.0383 15.1102 21.999C15.3311 21.9882 15.548 21.9369 15.7504 21.8479C16.4845 21.5248 16.8222 20.5117 17.4976 18.4856Z" fill={color} opacity="0.5"/>
</Svg>;

export default BoldDuotoneMessagesPlain2;