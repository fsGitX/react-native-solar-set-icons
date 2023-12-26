import * as React from "react"
import Svg, { Path } from "react-native-svg";
    
const BoldDuotonePlugCircle = ({
    size = 24,
    color = "#1f2937",
    stroke = 2,
    ...props
    }) => <Svg height={size} width={size} fill="none" viewBox="0 0 24 24" strokeWidth={stroke} xmlns="http://www.w3.org/2000/svg" {...props}>
	<g opacity="0.5">
		<Path d="M12.7497 22C17.9224 21.6161 22 17.2918 22 12.0139L22 12.0069L22 12C22 6.47715 17.5228 2 12 2C6.47715 2 2 6.47715 2 12L2 12.0069L2 12.0139C2 17.2918 6.07759 21.6161 11.2503 22L11.2503 21.9723C6.07986 21.5891 2.00357 17.2744 2 12.0069C2.00374 6.47961 6.47946 2 12 2C17.5205 2 21.9963 6.47961 22 12.0069C21.9964 17.2744 17.9201 21.5891 12.7497 21.9723L12.7497 22Z" fill={color} fillRule="evenodd"/>
		<Path d="M11.2503 21.9723C11.4978 21.9907 11.7478 22 12 22C12.2522 22 12.5022 21.9907 12.7497 21.9723C17.9201 21.5891 21.9964 17.2744 22 12.0069C21.9963 6.47961 17.5205 2 12 2C6.47946 2 2.00374 6.47961 2 12.0069C2.00357 17.2744 6.07986 21.5891 11.2503 21.9723Z" fill={color}/>
	</g>
	<Path d="M8.5 12.5147C8.5 14.1925 9.67737 15.595 11.2499 15.9389L11.2503 21.9724C11.4978 21.9908 11.7478 22.0001 12 22.0001C12.2522 22.0001 12.5022 21.9908 12.7497 21.9724L12.7499 15.9389C14.3226 15.5951 15.5 14.1926 15.5 12.5147V12.014C15.5 11.4609 15.0523 11.0126 14.5 11.0126H14.25V9.00983C14.25 8.59504 13.9142 8.25879 13.5 8.25879C13.0858 8.25879 12.75 8.59504 12.75 9.00983V11.0126H11.25V9.00983C11.25 8.59504 10.9142 8.25879 10.5 8.25879C10.0858 8.25879 9.75 8.59504 9.75 9.00983V11.0126H9.5C8.94772 11.0126 8.5 11.4609 8.5 12.014V12.5147Z" fill={color}/>
</Svg>;

export default BoldDuotonePlugCircle;
