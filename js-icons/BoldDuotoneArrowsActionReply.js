import * as React from "react"
import Svg, { Path } from "react-native-svg";
    
const BoldDuotoneArrowsActionReply = ({
    size = 24,
    color = "#1f2937",
    stroke = 2,
    ...props
    }) => <Svg height={size} width={size} fill="none" viewBox="0 0 24 24" strokeWidth={stroke} xmlns="http://www.w3.org/2000/svg" {...props}>
	<Path d="M10.0303 6.46967C9.73744 6.17678 9.26256 6.17678 8.96967 6.46967L3.96967 11.4697C3.67678 11.7626 3.67678 12.2374 3.96967 12.5303L8.96967 17.5303C9.26256 17.8232 9.73744 17.8232 10.0303 17.5303C10.3232 17.2374 10.3232 16.7626 10.0303 16.4697L5.56066 12L10.0303 7.53033C10.3232 7.23744 10.3232 6.76256 10.0303 6.46967Z" fill={color} fillRule="evenodd"/>
	<g opacity="0.5">
		<Path d="M6.31066 11.25H14.5C15.4534 11.25 16.8667 11.5298 18.0632 12.3914C19.298 13.2804 20.25 14.7556 20.25 17C20.25 17.4142 19.9142 17.75 19.5 17.75C19.0858 17.75 18.75 17.4142 18.75 17C18.75 15.2444 18.0353 14.2196 17.1868 13.6087C16.3 12.9702 15.2133 12.75 14.5 12.75L6.31066 12.75L5.56066 12L6.31066 11.25Z" fill={color}/>
		<Path d="M3.80691 11.7129C3.77024 11.8013 3.75 11.8983 3.75 12C3.75 11.9023 3.76897 11.8046 3.80691 11.7129Z" fill={color}/>
	</g>
</Svg>;

export default BoldDuotoneArrowsActionReply;
