import * as React from "react"
import Svg, { Path } from "react-native-svg";
    
const BoldDuotoneHeartPulse = ({
    size = 24,
    color = "#1f2937",
    stroke = 2,
    ...props
    }) => <Svg height={size} width={size} fill="none" viewBox="0 0 24 24" strokeWidth={stroke} xmlns="http://www.w3.org/2000/svg" {...props}>
	<Path d="M2 9.26044C2 13.0079 6.01943 16.9714 8.96173 19.3707C10.2937 20.4569 10.9597 21 12 21C13.0403 21 13.7063 20.4569 15.0383 19.3707C17.9806 16.9714 22 13.008 22 9.2604C22 3.34931 16.4998 0.662637 12 5.49877C7.50016 0.662637 2 3.3495 2 9.26044Z" fill={color} opacity="0.5"/>
	<Path d="M10.0932 10.7463C10.1827 10.6184 10.2571 10.5123 10.3233 10.4214C10.3793 10.5189 10.4418 10.6324 10.517 10.7692L12.2273 13.8788C12.3933 14.1809 12.5562 14.4772 12.7197 14.6921C12.8947 14.9222 13.2023 15.2374 13.6954 15.2467C14.1884 15.256 14.5077 14.9525 14.6912 14.7292C14.8627 14.5205 15.0365 14.2306 15.2138 13.9349L15.2692 13.8426C15.49 13.4746 15.629 13.2445 15.752 13.0783C15.8654 12.9252 15.9309 12.8752 15.9798 12.8475C16.0286 12.8198 16.1052 12.7894 16.2948 12.771C16.5006 12.751 16.7694 12.7502 17.1986 12.7502H18C18.4142 12.7502 18.75 12.4144 18.75 12.0002C18.75 11.586 18.4142 11.2502 18 11.2502L17.1662 11.2502C16.7791 11.2501 16.4367 11.2501 16.1497 11.278C15.8385 11.3083 15.5357 11.3752 15.2407 11.5422C14.9457 11.7093 14.7325 11.9345 14.5465 12.1857C14.3749 12.4175 14.1988 12.711 13.9996 13.043L13.9996 13.0431L13.9521 13.1223C13.8654 13.2668 13.793 13.3873 13.7284 13.4906C13.6676 13.3849 13.5999 13.2619 13.5186 13.1142L11.8092 10.006C11.6551 9.72566 11.5015 9.44632 11.3458 9.24153C11.1756 9.01781 10.8839 8.722 10.4164 8.69676C9.94887 8.67152 9.62698 8.93419 9.43373 9.13829C9.25683 9.32512 9.0741 9.5863 8.89069 9.84847L8.58131 10.2905C8.35416 10.615 8.21175 10.8171 8.08848 10.963C7.975 11.0972 7.91193 11.1412 7.86538 11.1654C7.81882 11.1896 7.74663 11.2161 7.57159 11.2321C7.38144 11.2495 7.13413 11.2502 6.73803 11.2502H6C5.58579 11.2502 5.25 11.586 5.25 12.0002C5.25 12.4144 5.58579 12.7502 6 12.7502L6.76812 12.7502H6.76813C7.12509 12.7502 7.44153 12.7502 7.70801 12.7259C7.99707 12.6995 8.27904 12.6412 8.55809 12.4959C8.83714 12.3506 9.04661 12.153 9.234 11.9314C9.40676 11.727 9.58821 11.4678 9.79291 11.1753L10.0932 10.7463Z" fill={color}/>
</Svg>;

export default BoldDuotoneHeartPulse;
