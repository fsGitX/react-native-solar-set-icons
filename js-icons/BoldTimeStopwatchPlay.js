import * as React from "react"
import Svg, { Path } from "react-native-svg";
    
const BoldTimeStopwatchPlay = ({
    size = 24,
    color = "#1f2937",
    stroke = 2,
    ...props
    }) => <Svg height={size} width={size} fill="none" viewBox="0 0 24 24" strokeWidth={stroke} xmlns="http://www.w3.org/2000/svg" {...props}>
	<Path d="M9.25 2.75C9.25 2.33579 9.58579 2 10 2H14C14.4142 2 14.75 2.33579 14.75 2.75C14.75 3.16421 14.4142 3.5 14 3.5H10C9.58579 3.5 9.25 3.16421 9.25 2.75Z" fill={color} fillRule="evenodd"/>
	<Path d="M21 13.75C21 18.7206 16.9706 22.75 12 22.75C7.02944 22.75 3 18.7206 3 13.75C3 8.77944 7.02944 4.75 12 4.75C16.9706 4.75 21 8.77944 21 13.75ZM13.0261 11.0249C12.7888 10.8583 12.5201 10.686 12.2419 10.5168C11.1695 9.86466 10.6333 9.53859 10.1524 9.8996C9.6715 10.2606 9.62779 11.0164 9.54038 12.5278C9.51566 12.9553 9.5 13.3743 9.5 13.75C9.5 14.1257 9.51566 14.5447 9.54038 14.9722C9.62779 16.4836 9.6715 17.2394 10.1524 17.6004C10.6333 17.9614 11.1695 17.6353 12.2419 16.9832C12.5201 16.814 12.7888 16.6417 13.0261 16.4751C13.2966 16.2852 13.5909 16.0573 13.8876 15.8152C14.9625 14.9383 15.5 14.4999 15.5 13.75C15.5 13.0001 14.9625 12.5617 13.8876 11.6848C13.5909 11.4427 13.2966 11.2148 13.0261 11.0249Z" fill={color} fillRule="evenodd"/>
</Svg>;

export default BoldTimeStopwatchPlay;
