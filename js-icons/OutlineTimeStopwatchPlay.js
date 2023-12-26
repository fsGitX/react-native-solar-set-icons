import * as React from "react"
import Svg, { Path } from "react-native-svg";
    
const OutlineTimeStopwatchPlay = ({
    size = 24,
    color = "#1f2937",
    stroke = 2,
    ...props
    }) => <Svg height={size} width={size} fill="none" viewBox="0 0 24 24" strokeWidth={stroke} xmlns="http://www.w3.org/2000/svg" {...props}>
	<Path d="M9.25 2C9.25 1.58579 9.58579 1.25 10 1.25H14C14.4142 1.25 14.75 1.58579 14.75 2C14.75 2.41421 14.4142 2.75 14 2.75H10C9.58579 2.75 9.25 2.41421 9.25 2ZM12 4.75C7.44365 4.75 3.75 8.44365 3.75 13C3.75 17.5563 7.44365 21.25 12 21.25C16.5563 21.25 20.25 17.5563 20.25 13C20.25 8.44365 16.5563 4.75 12 4.75ZM2.25 13C2.25 7.61522 6.61522 3.25 12 3.25C17.3848 3.25 21.75 7.61522 21.75 13C21.75 18.3848 17.3848 22.75 12 22.75C6.61522 22.75 2.25 18.3848 2.25 13ZM12.5727 9.09016C12.5923 9.10207 12.6119 9.11401 12.6316 9.12597C12.9188 9.30059 13.2022 9.48215 13.4571 9.66113C13.7473 9.86492 14.0567 10.1049 14.3617 10.3536C14.3771 10.3662 14.3925 10.3787 14.4078 10.3912C14.9056 10.7973 15.3532 11.1623 15.6659 11.5264C16.0204 11.9393 16.25 12.4034 16.25 13C16.25 13.5966 16.0204 14.0607 15.6659 14.4736C15.3532 14.8377 14.9057 15.2027 14.4078 15.6088L14.3617 15.6464C14.0567 15.8951 13.7473 16.1351 13.4571 16.3389C13.2022 16.5178 12.9188 16.6994 12.6316 16.874C12.6119 16.886 12.5923 16.8979 12.5727 16.9098C12.0879 17.2049 11.6298 17.4836 11.2289 17.6276C11.0061 17.7076 10.7505 17.7664 10.4754 17.7459C10.1864 17.7244 9.92767 17.6195 9.70216 17.4502C9.24308 17.1056 9.05869 16.6066 8.96253 16.1104C8.87092 15.6376 8.83573 15.0287 8.79462 14.3171L8.79163 14.2655C8.76641 13.8293 8.75 13.3949 8.75 13C8.75 12.6051 8.76641 12.1707 8.79163 11.7345L8.79462 11.6829C8.83573 10.9713 8.87092 10.3624 8.96253 9.88961C9.05869 9.39339 9.24308 8.89441 9.70216 8.54979C9.92767 8.3805 10.1864 8.27557 10.4754 8.25409C10.7505 8.23364 11.0061 8.29238 11.2289 8.37243C11.6298 8.51644 12.0879 8.79515 12.5727 9.09016ZM10.6004 9.75114C10.5758 9.76995 10.5007 9.83653 10.4351 10.175C10.365 10.5368 10.3341 11.0435 10.2891 11.8212C10.2649 12.2399 10.25 12.6436 10.25 13C10.25 13.3564 10.2649 13.7601 10.2891 14.1788C10.3341 14.9565 10.365 15.4632 10.4351 15.825C10.5007 16.1635 10.5758 16.2301 10.6004 16.2489C10.6192 16.2465 10.6575 16.239 10.7218 16.2159C10.9612 16.1299 11.2865 15.9364 11.8523 15.5924C12.1215 15.4287 12.3755 15.2655 12.5951 15.1113C12.8458 14.9353 13.125 14.7194 13.4135 14.484C13.9722 14.0283 14.3127 13.747 14.5279 13.4964C14.7108 13.2833 14.75 13.1532 14.75 13C14.75 12.8468 14.7108 12.7167 14.5279 12.5036C14.3127 12.253 13.9722 11.9717 13.4135 11.516C13.125 11.2806 12.8458 11.0647 12.5951 10.8887C12.3755 10.7345 12.1215 10.5713 11.8523 10.4076C11.2865 10.0636 10.9612 9.87009 10.7218 9.7841C10.6575 9.76101 10.6192 9.75355 10.6004 9.75114Z" fill={color} fillRule="evenodd"/>
</Svg>;

export default OutlineTimeStopwatchPlay;
