import * as React from "react"
import Svg, { Path } from "react-native-svg";
    
const LineDuotoneNatureFlame = ({
    size = 24,
    color = "#1f2937",
    stroke = 2,
    ...props
    }) => <Svg height={size} width={size} fill="none" viewBox="0 0 24 24" strokeWidth={stroke} xmlns="http://www.w3.org/2000/svg" {...props}>
	<Path d="M15.3588 21.7512C17.3819 21.1216 20 19.2547 20 15.0002C20 10.3783 14.9439 5.41409 11.5727 2.84603C11.0161 2.42199 10.2157 2.72733 9.95605 3.37712C8.31029 7.49503 4 11.8538 4 15.0002C4 18.1071 6.24558 20.309 8.08142 21.3717" stroke="black" strokeWidth="1.5"/>
	<Path d="M15.3588 21.751C14.9274 21.8852 14.6438 21.3823 14.9019 21.0114C15.7823 19.7462 16.8001 17.8163 16.8001 16.0004C16.8001 14.0498 15.156 11.7469 13.8722 10.3265C13.5787 10.0018 13.0667 10.2167 13.0507 10.6541C12.9977 12.1033 12.769 14.0422 11.7829 15.5618C11.6242 15.8064 11.2872 15.8266 11.1064 15.5979C10.7983 15.2083 10.4901 14.7269 10.182 14.3466C10.0161 14.1418 9.71611 14.139 9.52467 14.3202C8.77832 15.0269 7.7334 16.129 7.7334 17.5004C7.7334 18.4897 8.20479 19.7206 8.69077 20.674C8.91147 21.107 8.50204 21.615 8.08142 21.3715" opacity="0.5" stroke="black" strokeWidth="1.5"/>
</Svg>;

export default LineDuotoneNatureFlame;
