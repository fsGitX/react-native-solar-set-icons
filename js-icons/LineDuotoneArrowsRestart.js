import * as React from "react"
import Svg, { Path } from "react-native-svg";
    
const LineDuotoneArrowsRestart = ({
    size = 24,
    color = "#1f2937",
    stroke = 2,
    ...props
    }) => <Svg height={size} width={size} fill="none" viewBox="0 0 24 24" strokeWidth={stroke} xmlns="http://www.w3.org/2000/svg" {...props}>
	<g clipPath="url(#clip0_1648_2268)">
		<Path d="M19.7285 10.9286C20.4412 13.5975 19.7507 16.5633 17.6569 18.6571C14.5327 21.7813 9.46734 21.7813 6.34315 18.6571C3.21895 15.5329 3.21895 10.4676 6.34315 7.34338C9.46734 4.21918 14.5327 4.21918 17.6569 7.34338L18.364 8.05048" opacity="0.5" stroke="black" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5"/>
		<Path d="M14.1214 8.05026H18.364V3.80762" stroke="black" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5"/>
	</g>
	<defs>
		<clipPath id="clip0_1648_2268">
			<rect height="24" width="24" fill="white"/>
		</clipPath>
	</defs>
</Svg>;

export default LineDuotoneArrowsRestart;
