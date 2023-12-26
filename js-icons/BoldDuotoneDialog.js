import * as React from "react"
import Svg, { Path } from "react-native-svg";
    
const BoldDuotoneDialog = ({
    size = 24,
    color = "#1f2937",
    stroke = 2,
    ...props
    }) => <Svg height={size} width={size} fill="none" viewBox="0 0 24 24" strokeWidth={stroke} xmlns="http://www.w3.org/2000/svg" {...props}>
	<Path d="M18 14C18 18.4183 14.4183 22 10 22C8.76449 22 7.5944 21.7199 6.54976 21.2198C6.19071 21.0479 5.78393 20.9876 5.39939 21.0904L4.17335 21.4185C3.20701 21.677 2.32295 20.793 2.58151 19.8267L2.90955 18.6006C3.01245 18.2161 2.95209 17.8093 2.7802 17.4502C2.28008 16.4056 2 15.2355 2 14C2 9.58172 5.58172 6 10 6C14.4183 6 18 9.58172 18 14ZM6.5 15C7.05228 15 7.5 14.5523 7.5 14C7.5 13.4477 7.05228 13 6.5 13C5.94772 13 5.5 13.4477 5.5 14C5.5 14.5523 5.94772 15 6.5 15ZM10 15C10.5523 15 11 14.5523 11 14C11 13.4477 10.5523 13 10 13C9.44772 13 9 13.4477 9 14C9 14.5523 9.44772 15 10 15ZM13.5 15C14.0523 15 14.5 14.5523 14.5 14C14.5 13.4477 14.0523 13 13.5 13C12.9477 13 12.5 13.4477 12.5 14C12.5 14.5523 12.9477 15 13.5 15Z" fill={color} fillRule="evenodd"/>
	<Path d="M17.984 14.5084C18.0919 14.4638 18.1983 14.4163 18.3032 14.3661C18.5949 14.2264 18.9255 14.1774 19.2379 14.261L20.2341 14.5275C21.0192 14.7376 21.7375 14.0193 21.5274 13.2342L21.2609 12.238C21.1773 11.9256 21.2263 11.595 21.366 11.3033C21.7723 10.4545 21.9999 9.50385 21.9999 8.5C21.9999 4.91015 19.0897 2 15.4999 2C12.7899 2 10.4672 3.6585 9.49146 6.0159C9.65958 6.00535 9.82911 6 9.9999 6C14.4182 6 17.9999 9.58172 17.9999 14C17.9999 14.1708 17.9945 14.3403 17.984 14.5084Z" fill={color} opacity="0.6"/>
</Svg>;

export default BoldDuotoneDialog;