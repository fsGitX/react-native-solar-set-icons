import * as React from "react"
import Svg, { Path } from "react-native-svg";
    
const BoldDuotoneNatureFlame = ({
    size = 24,
    color = "#1f2937",
    stroke = 2,
    ...props
    }) => <Svg height={size} width={size} fill="none" viewBox="0 0 24 24" strokeWidth={stroke} xmlns="http://www.w3.org/2000/svg" {...props}>
	<Path d="M20 15.0002C20 19.2547 17.3819 21.1216 15.3588 21.7512C15.2746 21.7774 15.196 21.7793 15.126 21.7627C14.8373 21.6942 14.6942 21.3101 14.9019 21.0116C15.7823 19.7464 16.8 17.8161 16.8 16.0002C16.8 14.0496 15.1559 11.7467 13.8721 10.3263C13.5786 10.0016 13.0667 10.2164 13.0507 10.6539C12.9976 12.1031 12.7689 14.042 11.7828 15.5616C11.6241 15.8062 11.2872 15.8264 11.1063 15.5977C10.7982 15.208 10.4901 14.7267 10.182 14.3464C10.016 14.1416 9.71604 14.1388 9.52461 14.32C8.77825 15.0267 7.73333 16.1288 7.73333 17.5002C7.73333 18.4301 8.0936 19.405 8.50007 20.1893C8.70225 20.5795 8.39657 21.0415 8.01803 20.9595C7.97791 20.9508 7.93697 20.936 7.89573 20.9144C6.11307 19.9789 4 18.0838 4 15.0002C4 11.8538 8.31029 7.49503 9.95605 3.37712C10.2157 2.72733 11.0161 2.42199 11.5727 2.84603C14.9439 5.41409 20 10.3783 20 15.0002Z" fill={color}/>
	<Path d="M7.7334 17.5004C7.7334 18.4303 8.09366 19.4052 8.50013 20.1896C8.70231 20.5797 8.39664 21.0417 8.0181 20.9597C8.5 21.5 11.6763 21.9175 15.1261 21.7629C14.8374 21.6944 14.6943 21.3103 14.902 21.0119C15.7824 19.7466 16.8001 17.8163 16.8001 16.0004C16.8001 14.0498 15.156 11.7469 13.8722 10.3265C13.5787 10.0018 13.0667 10.2167 13.0507 10.6541C12.9977 12.1033 12.769 14.0422 11.7829 15.5618C11.6242 15.8064 11.2872 15.8266 11.1064 15.5979C10.7983 15.2083 10.4901 14.7269 10.182 14.3466C10.0161 14.1418 9.71611 14.139 9.52467 14.3202C8.77832 15.0269 7.7334 16.129 7.7334 17.5004Z" fill={color} opacity="0.5"/>
</Svg>;

export default BoldDuotoneNatureFlame;
