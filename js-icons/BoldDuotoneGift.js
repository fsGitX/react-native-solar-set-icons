import * as React from "react"
import Svg, { Path } from "react-native-svg";
    
const BoldDuotoneGift = ({
    size = 24,
    color = "#1f2937",
    stroke = 2,
    ...props
    }) => <Svg height={size} width={size} fill="none" viewBox="0 0 24 24" strokeWidth={stroke} xmlns="http://www.w3.org/2000/svg" {...props}>
	<Path d="M2 12C2 7.28595 2 4.92893 3.46447 3.46447C4.92893 2 7.28595 2 12 2C16.714 2 19.0711 2 20.5355 3.46447C22 4.92893 22 7.28595 22 12C22 16.714 22 19.0711 20.5355 20.5355C19.0711 22 16.714 22 12 22C7.28595 22 4.92893 22 3.46447 20.5355C2 19.0711 2 16.714 2 12Z" fill={color} opacity="0.5"/>
	<Path d="M6.91381 11.25H2.00024C2 11.4932 2 11.7431 2 12C2 12.2569 2 12.5068 2.00024 12.75H9.98737C10.0033 12.7502 10.0193 12.7503 10.0354 12.7503H10.163C9.82428 14.1835 8.53669 15.25 7 15.25C6.58579 15.25 6.25 15.5858 6.25 16C6.25 16.4142 6.58579 16.75 7 16.75C8.86003 16.75 10.4704 15.6809 11.25 14.1236V21.9998C11.4932 22 11.7431 22 12 22C12.2569 22 12.5068 22 12.75 21.9998V14.1236C13.5296 15.6809 15.14 16.75 17 16.75C17.4142 16.75 17.75 16.4142 17.75 16C17.75 15.5858 17.4142 15.25 17 15.25C15.4633 15.25 14.1757 14.1835 13.837 12.7503H13.9649C13.9809 12.7503 13.9969 12.7502 14.0129 12.75H21.9998C22 12.5068 22 12.2569 22 12C22 11.7431 22 11.4932 21.9998 11.25H17.0865C17.4373 10.8117 17.6995 10.2947 17.8425 9.7228C18.3807 7.56979 16.4305 5.61958 14.2775 6.15783C13.7055 6.30083 13.1884 6.56307 12.75 6.91404V2.00024C12.5068 2 12.2569 2 12 2C11.7431 2 11.4932 2 11.25 2.00024V6.91381C10.8117 6.56295 10.2947 6.3008 9.7228 6.15783C7.56979 5.61958 5.61958 7.56979 6.15783 9.7228C6.3008 10.2947 6.56296 10.8117 6.91381 11.25ZM11.25 11.25H9.99743C8.86764 11.233 7.88786 10.4582 7.61305 9.359C7.34943 8.30455 8.30455 7.34943 9.359 7.61305C10.4582 7.88785 11.233 8.86763 11.25 9.99741V11.25ZM14.0029 11.25H12.7503V10.0354L12.7502 10.0056C12.7636 8.87236 13.5394 7.88852 14.6413 7.61305C15.6957 7.34943 16.6509 8.30455 16.3872 9.359C16.1124 10.4582 15.1326 11.233 14.0029 11.25Z" fill={color} fillRule="evenodd"/>
</Svg>;

export default BoldDuotoneGift;