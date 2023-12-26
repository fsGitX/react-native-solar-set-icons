import * as React from "react"
import Svg, { Path } from "react-native-svg";
    
const BoldDuotoneFlashlightOn = ({
    size = 24,
    color = "#1f2937",
    stroke = 2,
    ...props
    }) => <Svg height={size} width={size} fill="none" viewBox="0 0 24 24" strokeWidth={stroke} xmlns="http://www.w3.org/2000/svg" {...props}>
	<Path d="M9.00037 19V17.6569C9.00037 16.8394 9.00037 16.4306 8.84813 16.0631C8.83933 16.0418 8.83006 16.0208 8.82031 16H15.1804C15.1707 16.0208 15.1614 16.0418 15.1526 16.0631C15.0004 16.4306 15.0004 16.8394 15.0004 17.6569V20C15.0004 20.9428 15.0004 21.4142 14.7075 21.7071C14.4146 22 13.9432 22 13.0004 22H11.0004C10.0576 22 9.58616 22 9.29327 21.7071C9.00037 21.4142 9.00037 20.9428 9.00037 20V19Z" fill={color} opacity="0.5"/>
	<Path d="M12 18.25C12.4142 18.25 12.75 18.5858 12.75 19V20C12.75 20.4142 12.4142 20.75 12 20.75C11.5858 20.75 11.25 20.4142 11.25 20V19C11.25 18.5858 11.5858 18.25 12 18.25Z" fill={color} fillRule="evenodd"/>
	<Path d="M20 10.1716V10C20 9.05719 20 8.58579 19.7071 8.29289C19.4142 8 18.9428 8 18 8H6C5.05719 8 4.58579 8 4.29289 8.29289C4 8.58579 4 9.05719 4 10V10.1716C4 10.5803 4 10.7847 4.07612 10.9685C4.08052 10.9791 4.08516 10.9896 4.09003 11H19.91C19.9148 10.9896 19.9195 10.9791 19.9239 10.9685C20 10.7847 20 10.5803 20 10.1716Z" fill={color} opacity="0.5"/>
	<Path d="M16.1714 14.8284L19.414 11.5858C19.6863 11.3135 19.8304 11.1694 19.9098 11H4.08984C4.16926 11.1694 4.31329 11.3135 4.5856 11.5858L7.82824 14.8284C8.37287 15.3731 8.66093 15.6611 8.81975 16H15.1799C15.3387 15.6611 15.6268 15.373 16.1714 14.8284Z" fill={color}/>
	<Path d="M12.75 2C12.75 1.58579 12.4142 1.25 12 1.25C11.5858 1.25 11.25 1.58579 11.25 2V5C11.25 5.41421 11.5858 5.75 12 5.75C12.4142 5.75 12.75 5.41421 12.75 5V2Z" fill={color}/>
	<Path d="M6.53033 2.46967C6.23744 2.17678 5.76256 2.17678 5.46967 2.46967C5.17678 2.76256 5.17678 3.23744 5.46967 3.53033L7.46967 5.53033C7.76256 5.82322 8.23744 5.82322 8.53033 5.53033C8.82322 5.23744 8.82322 4.76256 8.53033 4.46967L6.53033 2.46967Z" fill={color}/>
	<Path d="M18.5303 2.46967C18.2374 2.17678 17.7626 2.17678 17.4697 2.46967L15.4697 4.46967C15.1768 4.76256 15.1768 5.23744 15.4697 5.53033C15.7626 5.82322 16.2374 5.82322 16.5303 5.53033L18.5303 3.53033C18.8232 3.23744 18.8232 2.76256 18.5303 2.46967Z" fill={color}/>
</Svg>;

export default BoldDuotoneFlashlightOn;