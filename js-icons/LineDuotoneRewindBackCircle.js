import * as React from "react"
import Svg, { Path } from "react-native-svg";
    
const LineDuotoneRewindBackCircle = ({
    size = 24,
    color = "#1f2937",
    stroke = 2,
    ...props
    }) => <Svg height={size} width={size} fill="none" viewBox="0 0 24 24" strokeWidth={stroke} xmlns="http://www.w3.org/2000/svg" {...props}>
	<Path d="M2 12C2 17.5228 6.47715 22 12 22C17.5228 22 22 17.5228 22 12C22 6.47715 17.5228 2 12 2C6.47715 2 2 6.47715 2 12Z" opacity="0.5" stroke="black" strokeWidth="1.5"/>
	<Path d="M11 8.07141L7.77844 10.3725C6.66174 11.1702 6.66174 12.8298 7.77844 13.6274L11 15.9286M16.5 15.0568V8.94317C16.5 8.1298 15.5806 7.65667 14.9188 8.12944L10.6392 11.1862C10.0809 11.5851 10.0809 12.4149 10.6392 12.8137L14.9188 15.8705C15.5806 16.3433 16.5 15.8702 16.5 15.0568Z" stroke="black" strokeLinecap="round" strokeWidth="1.5"/>
</Svg>;

export default LineDuotoneRewindBackCircle;
