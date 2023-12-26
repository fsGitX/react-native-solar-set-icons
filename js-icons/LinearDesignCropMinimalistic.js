import * as React from "react"
import Svg, { Path } from "react-native-svg";
    
const LinearDesignCropMinimalistic = ({
    size = 24,
    color = "#1f2937",
    stroke = 2,
    ...props
    }) => <Svg height={size} width={size} fill="none" viewBox="0 0 24 24" strokeWidth={stroke} xmlns="http://www.w3.org/2000/svg" {...props}>
	<Path d="M22 19H13C9.22876 19 7.34315 19 6.17157 17.8284C5 16.6569 5 14.7712 5 11V2" stroke="black" strokeLinecap="round" strokeWidth="1.5"/>
	<Path d="M8 5H11C14.7712 5 16.6569 5 17.8284 6.17157C19 7.34315 19 9.22876 19 13V16M2 5H5M19 19V22" stroke="black" strokeLinecap="round" strokeWidth="1.5"/>
</Svg>;

export default LinearDesignCropMinimalistic;
