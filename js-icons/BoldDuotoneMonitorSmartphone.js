import * as React from "react"
import Svg, { Path } from "react-native-svg";
    
const BoldDuotoneMonitorSmartphone = ({
    size = 24,
    color = "#1f2937",
    stroke = 2,
    ...props
    }) => <Svg height={size} width={size} fill="none" viewBox="0 0 24 24" strokeWidth={stroke} xmlns="http://www.w3.org/2000/svg" {...props}>
	<Path d="M21.9998 15V18C21.9998 19.8856 21.9998 20.8284 21.414 21.4142C20.8282 22 19.8854 22 17.9998 22C16.1141 22 15.1713 22 14.5855 21.4142C13.9998 20.8284 13.9998 19.8856 13.9998 18V15C13.9998 13.1144 13.9998 12.1716 14.5855 11.5858C15.1713 11 16.1141 11 17.9998 11C19.8854 11 20.8282 11 21.414 11.5858C21.9998 12.1716 21.9998 13.1144 21.9998 15ZM16.2498 20C16.2498 19.5858 16.5855 19.25 16.9998 19.25H18.9998C19.414 19.25 19.7498 19.5858 19.7498 20C19.7498 20.4142 19.414 20.75 18.9998 20.75H16.9998C16.5855 20.75 16.2498 20.4142 16.2498 20Z" fill={color} fillRule="evenodd"/>
	<Path d="M7.99973 17C5.17131 17 3.75709 17 2.87841 16.1213C2.30911 15.552 2.07058 14.7579 2 13.5V13H12.5162V13.5C12.4996 13.9365 12.4997 14.4116 12.4997 14.9105V18.0895C12.4996 18.9551 12.4995 19.7488 12.5863 20.3944C12.6819 21.1054 12.9068 21.8568 13.5249 22.4749L13.5503 22.5H7.99973C7.58552 22.5 7.24973 22.1642 7.24973 21.75C7.24973 21.3358 7.58552 21 7.99973 21H11.2497V17H7.99973Z" fill={color}/>
	<Path d="M9.99997 2H14C17.7712 2 19.6568 2 20.8284 3.17157C22 4.34315 22 6.22876 22 10V10.1383C21.4916 9.80481 20.9315 9.65881 20.3944 9.5866C19.7488 9.4998 18.9551 9.49989 18.0895 9.49999H17.9105C17.0448 9.49989 16.2512 9.4998 15.6056 9.5866C14.8946 9.68219 14.1431 9.90708 13.5251 10.5251C12.9376 11.1127 12.7053 11.8207 12.6017 12.5V13H1.99997L2 12.5C1.99348 12.0494 1.99997 11.5516 1.99997 11V10C1.99997 6.22876 1.99997 4.34315 3.17154 3.17157C4.34311 2 6.22873 2 9.99997 2Z" fill={color} opacity="0.5"/>
</Svg>;

export default BoldDuotoneMonitorSmartphone;
