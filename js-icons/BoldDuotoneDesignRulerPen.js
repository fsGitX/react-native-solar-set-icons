import * as React from "react"
import Svg, { Path } from "react-native-svg";
    
const BoldDuotoneDesignRulerPen = ({
    size = 24,
    color = "#1f2937",
    stroke = 2,
    ...props
    }) => <Svg height={size} width={size} fill="none" viewBox="0 0 24 24" strokeWidth={stroke} xmlns="http://www.w3.org/2000/svg" {...props}>
	<Path d="M16 22C14.1144 22 13.1716 22 12.5858 21.4142C12.0834 20.9119 12.0119 20.1469 12.0017 18.75L12 17.25V15.75V14.25V12.75V11.25V9.75V8.25V6.75L12.0017 5.25C12.0119 3.85306 12.0834 3.08814 12.5858 2.58579C13.1716 2 14.1144 2 16 2H18C19.8856 2 20.8284 2 21.4142 2.58579C22 3.17157 22 4.11439 22 6V18C22 19.8856 22 20.8284 21.4142 21.4142C20.8284 22 19.8856 22 18 22H16Z" fill={color} opacity="0.5"/>
	<Path d="M15 8.25H12V9.75H15C15.4142 9.75 15.75 9.41421 15.75 9C15.75 8.58578 15.4142 8.25 15 8.25Z" fill={color}/>
	<Path d="M14 5.25L12.0017 5.25L12 6.75H14C14.4142 6.75 14.75 6.41421 14.75 6C14.75 5.58579 14.4142 5.25 14 5.25Z" fill={color}/>
	<Path d="M14 11.25H12V12.75H14C14.4142 12.75 14.75 12.4142 14.75 12C14.75 11.5858 14.4142 11.25 14 11.25Z" fill={color}/>
	<Path d="M15 14.25L12 14.25V15.75L15 15.75C15.4142 15.75 15.75 15.4142 15.75 15C15.75 14.5858 15.4142 14.25 15 14.25Z" fill={color}/>
	<Path d="M14 17.25H12L12.0017 18.75H14C14.4142 18.75 14.75 18.4142 14.75 18C14.75 17.5858 14.4142 17.25 14 17.25Z" fill={color}/>
	<Path d="M8 14.9795L8 7.00015C7.23101 7.31715 6.21665 7.58905 5.00018 7.58904C3.78352 7.58904 2.76904 7.31706 2 7L2 14.9795C2 15.6021 2 15.9135 2.03777 16.219C2.08232 16.5794 2.166 16.9339 2.28733 17.2762C2.39019 17.5664 2.52943 17.8448 2.8079 18.4018L4.27639 21.3388C4.41343 21.6129 4.69357 21.786 5 21.786C5.30643 21.786 5.58657 21.6129 5.72361 21.3388L7.1921 18.4018C7.47057 17.8448 7.60981 17.5664 7.71267 17.2762C7.834 16.9339 7.91768 16.5794 7.96223 16.219C8 15.9135 8 15.6021 8 14.9795Z" fill={color}/>
	<Path d="M5 2C6.65685 2 8 3.34315 8 5L8 7.00015C7.23101 7.31715 6.21665 7.58905 5.00018 7.58904C3.78352 7.58904 2.76904 7.31706 2 7V5C2 3.34315 3.34315 2 5 2Z" fill={color} opacity="0.5"/>
</Svg>;

export default BoldDuotoneDesignRulerPen;