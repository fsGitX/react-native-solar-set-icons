import * as React from "react"
import Svg, { Path } from "react-native-svg";
    
const BoldDuotoneArrowsActionForward = ({
    size = 24,
    color = "#1f2937",
    stroke = 2,
    ...props
    }) => <Svg height={size} width={size} fill="none" viewBox="0 0 24 24" strokeWidth={stroke} xmlns="http://www.w3.org/2000/svg" {...props}>
	<Path d="M13.9697 6.46967C14.2626 6.17678 14.7374 6.17678 15.0303 6.46967L20.0303 11.4697C20.3232 11.7626 20.3232 12.2374 20.0303 12.5303L15.0303 17.5303C14.7374 17.8232 14.2626 17.8232 13.9697 17.5303C13.6768 17.2374 13.6768 16.7626 13.9697 16.4697L18.4393 12L13.9697 7.53033C13.6768 7.23744 13.6768 6.76256 13.9697 6.46967Z" fill={color} fillRule="evenodd"/>
	<g opacity="0.5">
		<Path d="M17.6893 11.25H9.5C8.54665 11.25 7.13332 11.5298 5.93677 12.3914C4.70198 13.2804 3.75 14.7556 3.75 17C3.75 17.4142 4.08579 17.75 4.5 17.75C4.91421 17.75 5.25 17.4142 5.25 17C5.25 15.2444 5.96468 14.2196 6.81323 13.6087C7.70002 12.9702 8.78668 12.75 9.5 12.75L17.6893 12.75L18.4393 12L17.6893 11.25Z" fill={color}/>
		<Path d="M20.1931 11.7129C20.2298 11.8013 20.25 11.8983 20.25 12C20.25 11.9023 20.231 11.8046 20.1931 11.7129Z" fill={color}/>
	</g>
</Svg>;

export default BoldDuotoneArrowsActionForward;
