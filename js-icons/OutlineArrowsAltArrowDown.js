import * as React from "react"
import Svg, { Path } from "react-native-svg";
    
const OutlineArrowsAltArrowDown = ({
    size = 24,
    color = "#1f2937",
    stroke = 2,
    ...props
    }) => <Svg height={size} width={size} fill="none" viewBox="0 0 24 24" strokeWidth={stroke} xmlns="http://www.w3.org/2000/svg" {...props}>
	<Path d="M4.43056 8.51192C4.70012 8.19743 5.1736 8.161 5.48809 8.43057L12 14.0122L18.5119 8.43057C18.8264 8.16101 19.2999 8.19743 19.5694 8.51192C19.839 8.82642 19.8026 9.29989 19.4881 9.56946L12.4881 15.5695C12.2072 15.8102 11.7928 15.8102 11.5119 15.5695L4.5119 9.56946C4.19741 9.29989 4.16099 8.82641 4.43056 8.51192Z" fill={color} fillRule="evenodd"/>
</Svg>;

export default OutlineArrowsAltArrowDown;
