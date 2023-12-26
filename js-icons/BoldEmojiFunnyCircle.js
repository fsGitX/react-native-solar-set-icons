import * as React from "react"
import Svg, { Path } from "react-native-svg";
    
const BoldEmojiFunnyCircle = ({
    size = 24,
    color = "#1f2937",
    stroke = 2,
    ...props
    }) => <Svg height={size} width={size} fill="none" viewBox="0 0 24 24" strokeWidth={stroke} xmlns="http://www.w3.org/2000/svg" {...props}>
	<Path d="M12 22C17.5228 22 22 17.5228 22 12C22 6.47715 17.5228 2 12 2C6.47715 2 2 6.47715 2 12C2 17.5228 6.47715 22 12 22ZM8.1851 15.7508C8.2858 15.349 8.69315 15.1049 9.09494 15.2056C10.2252 15.4889 11.5232 15.4924 12.841 15.1393C14.1588 14.7862 15.2811 14.1342 16.1183 13.3237C16.4159 13.0356 16.8908 13.0433 17.1789 13.3409C17.467 13.6385 17.4593 14.1133 17.1617 14.4014C16.8142 14.7378 16.4297 15.0492 16.0128 15.3301L16.1708 15.652C16.5394 16.4031 16.2223 17.3106 15.4661 17.6685C14.7249 18.0194 13.8393 17.71 13.478 16.9738L13.2817 16.574L13.2292 16.5882C11.6739 17.005 10.1166 17.0081 8.73026 16.6606C8.32847 16.5599 8.0844 16.1526 8.1851 15.7508ZM15.4754 9.51572C15.6898 10.3159 15.4311 11.0805 14.8977 11.2234C14.3642 11.3664 13.7579 10.8336 13.5435 10.0334C13.3291 9.23316 13.5877 8.4686 14.1212 8.32565C14.6547 8.18271 15.2609 8.71552 15.4754 9.51572ZM9.10225 12.7764C9.63571 12.6335 9.89436 11.8689 9.67994 11.0687C9.46553 10.2685 8.85926 9.73569 8.32579 9.87863C7.79232 10.0216 7.53368 10.7861 7.74809 11.5863C7.9625 12.3865 8.56878 12.9194 9.10225 12.7764Z" fill={color} fillRule="evenodd"/>
</Svg>;

export default BoldEmojiFunnyCircle;
