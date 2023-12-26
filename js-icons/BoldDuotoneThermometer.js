import * as React from "react"
import Svg, { Path } from "react-native-svg";
    
const BoldDuotoneThermometer = ({
    size = 24,
    color = "#1f2937",
    stroke = 2,
    ...props
    }) => <Svg height={size} width={size} fill="none" viewBox="0 0 24 24" strokeWidth={stroke} xmlns="http://www.w3.org/2000/svg" {...props}>
	<Path d="M5.96229 20.1739L5.57866 20.5576C4.98875 21.1475 4.03233 21.1475 3.44243 20.5576C2.85252 19.9677 2.85252 19.0112 3.44243 18.4213L3.82606 18.0377C4.25869 17.6051 4.47121 16.9992 4.40364 16.3911L4.31485 15.592C4.2135 14.6799 4.53228 13.7711 5.18123 13.1222L14.1236 4.17981C15.6967 2.60673 18.2471 2.60673 19.8202 4.17981C21.3933 5.75288 21.3933 8.30334 19.8202 9.87642L10.8778 18.8188C10.2289 19.4677 9.32013 19.7865 8.40799 19.6851L7.60886 19.5964C7.00076 19.5288 6.39492 19.7413 5.96229 20.1739Z" fill={color} opacity="0.5"/>
	<Path d="M12.5176 17.1791L11.4569 18.2397C11.4569 18.2398 11.4569 18.2397 11.4569 18.2397L10.1562 16.939C9.8633 16.6461 9.8633 16.1713 10.1562 15.8784C10.4491 15.5855 10.924 15.5855 11.2169 15.8784L12.5176 17.1791C12.5175 17.179 12.5176 17.1791 12.5176 17.1791Z" fill={color}/>
	<Path d="M15.7268 13.9698L14.6662 15.0305C14.6662 15.0305 14.6661 15.0304 14.6662 15.0305L13.3655 13.7298C13.0726 13.4369 13.0726 12.962 13.3655 12.6691C13.6584 12.3762 14.1332 12.3762 14.4261 12.6691L15.7268 13.9698C15.7268 13.9698 15.7269 13.9698 15.7268 13.9698Z" fill={color}/>
	<Path d="M18.9262 10.7704L17.8656 11.831C17.8656 11.8311 17.8655 11.831 17.8656 11.831L16.5649 10.5303C16.272 10.2374 16.272 9.76256 16.5649 9.46967C16.8578 9.17678 17.3327 9.17678 17.6255 9.46967L18.9262 10.7704C18.9262 10.7703 18.9263 10.7704 18.9262 10.7704Z" fill={color}/>
	<Path d="M16.0303 7.96967C16.3232 8.26256 16.3232 8.73744 16.0303 9.03033L9.53033 15.5303C9.23744 15.8232 8.76256 15.8232 8.46967 15.5303C8.17678 15.2374 8.17678 14.7626 8.46967 14.4697L14.9697 7.96967C15.2626 7.67678 15.7374 7.67678 16.0303 7.96967Z" fill={color} fillRule="evenodd"/>
</Svg>;

export default BoldDuotoneThermometer;
