import * as React from "react"
import Svg, { Path } from "react-native-svg";
    
const BoldDuotoneMessagesPlain3 = ({
    size = 24,
    color = "#1f2937",
    stroke = 2,
    ...props
    }) => <Svg height={size} width={size} fill="none" viewBox="0 0 24 24" strokeWidth={stroke} xmlns="http://www.w3.org/2000/svg" {...props}>
	<Path d="M20.3521 10.5208L18.6357 15.6701C17.4255 19.3008 16.8204 21.1161 15.933 21.6319C15.0889 22.1227 14.0463 22.1227 13.2022 21.6319C12.3148 21.1161 11.7097 19.3008 10.4995 15.6701C10.3052 15.0872 10.208 14.7957 10.0449 14.5521C9.88687 14.316 9.68404 14.1131 9.44793 13.9551C9.2043 13.792 8.91282 13.6948 8.32987 13.5005C4.69923 12.2903 2.88392 11.6852 2.36806 10.7978C1.87731 9.95369 1.87731 8.91112 2.36806 8.06698C2.88392 7.17964 4.69923 6.57453 8.32987 5.36432L13.4792 3.64788C17.9776 2.14842 20.2268 1.39869 21.414 2.58595C22.6013 3.77322 21.8516 6.02242 20.3521 10.5208Z" fill={color} fillRule="evenodd" opacity="0.5"/>
	<Path d="M13.0456 10.9024C12.7543 10.6079 12.757 10.1331 13.0515 9.84179L17.262 5.67768C17.5565 5.38641 18.0314 5.38904 18.3226 5.68355C18.6139 5.97807 18.6113 6.45293 18.3168 6.7442L14.1062 10.9083C13.8117 11.1996 13.3369 11.1969 13.0456 10.9024Z" fill={color}/>
</Svg>;

export default BoldDuotoneMessagesPlain3;
