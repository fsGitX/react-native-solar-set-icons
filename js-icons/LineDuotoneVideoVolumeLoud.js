import * as React from "react"
import Svg, { Path } from "react-native-svg";
    
const LineDuotoneVideoVolumeLoud = ({
    size = 24,
    color = "#1f2937",
    stroke = 2,
    ...props
    }) => <Svg height={size} width={size} fill="none" viewBox="0 0 24 24" strokeWidth={stroke} xmlns="http://www.w3.org/2000/svg" {...props}>
	<Path d="M1.53479 10.9714C1.60847 9.76255 1.64531 9.15814 1.95854 8.57679C2.24473 8.04563 2.7923 7.53042 3.33988 7.27707C3.93921 6.99979 4.62617 6.99979 6.00008 6.99979C6.51215 6.99979 6.76819 6.99979 7.0162 6.95791C7.26138 6.9165 7.50046 6.84478 7.72795 6.74438C7.95806 6.64283 8.17181 6.50189 8.59932 6.22002L8.81825 6.07566C11.3612 4.39898 12.6327 3.56063 13.7001 3.92487C13.9047 3.9947 14.1028 4.09551 14.2797 4.21984C15.2024 4.86829 15.2725 6.37699 15.4127 9.3944C15.4646 10.5117 15.5 11.4679 15.5 11.9998C15.5 12.5317 15.4646 13.4879 15.4127 14.6052C15.2725 17.6226 15.2024 19.1313 14.2797 19.7797C14.1028 19.9041 13.9047 20.0049 13.7001 20.0747C12.6327 20.4389 11.3612 19.6006 8.81825 17.9239L8.59932 17.7796C8.17181 17.4977 7.95806 17.3567 7.72795 17.2552C7.50046 17.1548 7.26138 17.0831 7.0162 17.0417C6.76819 16.9998 6.51215 16.9998 6.00008 16.9998C4.62617 16.9998 3.93921 16.9998 3.33988 16.7225C2.7923 16.4692 2.24473 15.9539 1.95854 15.4228C1.64531 14.8414 1.60847 14.237 1.53479 13.0282C1.51299 12.6706 1.5 12.3222 1.5 11.9998C1.5 11.6774 1.51299 11.329 1.53479 10.9714Z" stroke="black" strokeWidth="1.5"/>
	<Path d="M20 6C20 6 21.5 7.8 21.5 12C21.5 16.2 20 18 20 18" opacity="0.4" stroke="black" strokeLinecap="round" strokeWidth="1.5"/>
	<Path d="M18 9C18 9 18.5 9.9 18.5 12C18.5 14.1 18 15 18 15" opacity="0.7" stroke="black" strokeLinecap="round" strokeWidth="1.5"/>
</Svg>;

export default LineDuotoneVideoVolumeLoud;
