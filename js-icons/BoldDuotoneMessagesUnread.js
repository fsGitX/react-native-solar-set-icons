import * as React from "react"
import Svg, { Path } from "react-native-svg";
    
const BoldDuotoneMessagesUnread = ({
    size = 24,
    color = "#1f2937",
    stroke = 2,
    ...props
    }) => <Svg height={size} width={size} fill="none" viewBox="0 0 24 24" strokeWidth={stroke} xmlns="http://www.w3.org/2000/svg" {...props}>
	<Path d="M20.5355 20.5355C22 19.0711 22 16.714 22 12C22 7.28595 22 4.92893 20.5355 3.46447C19.0711 2 16.714 2 12 2C7.28595 2 4.92893 2 3.46447 3.46447C2 4.92893 2 7.28595 2 12C2 16.714 2 19.0711 3.46447 20.5355C4.92893 22 7.28595 22 12 22C16.714 22 19.0711 22 20.5355 20.5355Z" fill={color} opacity="0.5"/>
	<Path d="M17.4545 6.90347C17.784 7.1545 17.8476 7.62509 17.5966 7.95457L10.7394 16.9546C10.6029 17.1338 10.393 17.2421 10.1678 17.2496C9.94267 17.2571 9.72605 17.163 9.57788 16.9933L6.43502 13.3933C6.16261 13.0812 6.19473 12.6075 6.50677 12.3351C6.8188 12.0626 7.29259 12.0948 7.565 12.4068L10.1034 15.3144L16.4034 7.04551C16.6545 6.71603 17.1251 6.65243 17.4545 6.90347Z" fill={color}/>
</Svg>;

export default BoldDuotoneMessagesUnread;
