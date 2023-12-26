import * as React from "react"
import Svg, { Path } from "react-native-svg";
    
const BoldDuotoneHomeWiFi = ({
    size = 24,
    color = "#1f2937",
    stroke = 2,
    ...props
    }) => <Svg height={size} width={size} fill="none" viewBox="0 0 24 24" strokeWidth={stroke} xmlns="http://www.w3.org/2000/svg" {...props}>
	<Path d="M14 22H10C6.22876 22 4.34315 22 3.17157 20.7881C2 19.5763 2 17.6258 2 13.725V12.2039C2 9.91549 2 8.77128 2.5192 7.82274C3.0384 6.87421 3.98695 6.28551 5.88403 5.10813L7.88403 3.86687C9.88939 2.62229 10.8921 2 12 2C13.1079 2 14.1106 2.62229 16.116 3.86687L18.116 5.10812C20.0131 6.28551 20.9616 6.87421 21.4808 7.82274C22 8.77128 22 9.91549 22 12.2039V13.725C22 17.6258 22 19.5763 20.8284 20.7881C19.6569 22 17.7712 22 14 22Z" fill={color} opacity="0.5"/>
	<Path d="M17.4498 12.1922C14.4329 8.93592 9.56706 8.93592 6.55017 12.1922C6.26866 12.4961 5.79414 12.5142 5.49029 12.2327C5.18643 11.9512 5.16832 11.4766 5.44983 11.1728C9.06036 7.27573 14.9396 7.27573 18.5502 11.1728C18.8317 11.4766 18.8136 11.9512 18.5097 12.2327C18.2059 12.5142 17.7313 12.4961 17.4498 12.1922Z" fill={color}/>
	<Path d="M15.4499 14.3507C13.5375 12.2866 10.4625 12.2866 8.55019 14.3507C8.26868 14.6546 7.79415 14.6727 7.4903 14.3912C7.18645 14.1097 7.16834 13.6351 7.44985 13.3313C9.95581 10.6265 14.0442 10.6265 16.5502 13.3313C16.8317 13.6351 16.8136 14.1097 16.5097 14.3912C16.2059 14.6727 15.7314 14.6546 15.4499 14.3507Z" fill={color}/>
	<Path d="M13.4499 16.5097C12.6421 15.6379 11.358 15.6379 10.5502 16.5097C10.2687 16.8136 9.79417 16.8317 9.49032 16.5502C9.18647 16.2687 9.16836 15.7941 9.44987 15.4903C10.8513 13.9777 13.1488 13.9777 14.5502 15.4903C14.8317 15.7941 14.8136 16.2687 14.5098 16.5502C14.2059 16.8317 13.7314 16.8136 13.4499 16.5097Z" fill={color}/>
</Svg>;

export default BoldDuotoneHomeWiFi;