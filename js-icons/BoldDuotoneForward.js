import * as React from "react"
import Svg, { Path } from "react-native-svg";
    
const BoldDuotoneForward = ({
    size = 24,
    color = "#1f2937",
    stroke = 2,
    ...props
    }) => <Svg height={size} width={size} fill="none" viewBox="0 0 24 24" strokeWidth={stroke} xmlns="http://www.w3.org/2000/svg" {...props}>
	<Path d="M13.9548 5.18341L18.9327 9.60815C19.8632 10.4353 20.3285 10.8489 20.5 11.3373C20.6506 11.7662 20.6506 12.2335 20.5 12.6624C20.3285 13.1508 19.8632 13.5644 18.9327 14.3916L13.9548 18.8163C13.5325 19.1917 13.3214 19.3794 13.142 19.3861C12.9862 19.3919 12.8366 19.3247 12.7375 19.2044C12.6233 19.0659 12.6233 18.7834 12.6233 18.2184V15.4284C10.1952 15.4284 7.63068 16.2083 5.75807 17.5926C4.78317 18.3133 4.29571 18.6737 4.11005 18.6595C3.92907 18.6456 3.81422 18.575 3.72032 18.4196C3.62399 18.2603 3.70907 17.7624 3.87924 16.7666C4.98421 10.3004 9.43419 8.57129 12.6233 8.57129V5.78134C12.6233 5.21632 12.6233 4.93381 12.7375 4.79531C12.8366 4.67498 12.9862 4.6078 13.142 4.61363C13.3214 4.62034 13.5325 4.80803 13.9548 5.18341Z" fill={color}/>
</Svg>;

export default BoldDuotoneForward;