import * as React from "react"
import Svg, { Path } from "react-native-svg";
    
const BoldTransportTransmissionCircle = ({
    size = 24,
    color = "#1f2937",
    stroke = 2,
    ...props
    }) => <Svg height={size} width={size} fill="none" viewBox="0 0 24 24" strokeWidth={stroke} xmlns="http://www.w3.org/2000/svg" {...props}>
	<Path d="M22 12C22 17.5228 17.5228 22 12 22C6.47715 22 2 17.5228 2 12C2 6.47715 6.47715 2 12 2C17.5228 2 22 6.47715 22 12ZM8 8.25C8.41421 8.25 8.75 8.58579 8.75 9V11.25H11.25V9C11.25 8.58579 11.5858 8.25 12 8.25C12.4142 8.25 12.75 8.58579 12.75 9V11.25H13C13.4762 11.25 13.7958 11.2496 14.0433 11.2327C14.284 11.2163 14.4012 11.1868 14.4784 11.1548C14.7846 11.028 15.028 10.7846 15.1549 10.4784C15.1868 10.4012 15.2163 10.284 15.2327 10.0433C15.2496 9.79579 15.25 9.4762 15.25 9C15.25 8.58579 15.5858 8.25 16 8.25C16.4142 8.25 16.75 8.58579 16.75 9V9.02526C16.75 9.46972 16.75 9.84075 16.7292 10.1454C16.7076 10.4625 16.661 10.762 16.5407 11.0524C16.2616 11.7262 15.7262 12.2616 15.0524 12.5407C14.762 12.661 14.4625 12.7076 14.1454 12.7292C13.8408 12.75 13.4697 12.75 13.0253 12.75H12.75V15C12.75 15.4142 12.4142 15.75 12 15.75C11.5858 15.75 11.25 15.4142 11.25 15V12.75H8.75V15C8.75 15.4142 8.41421 15.75 8 15.75C7.58579 15.75 7.25 15.4142 7.25 15V9C7.25 8.58579 7.58579 8.25 8 8.25Z" fill="#1C274C" fillRule="evenodd"/>
</Svg>;

export default BoldTransportTransmissionCircle;
