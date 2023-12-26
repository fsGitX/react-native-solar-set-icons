import * as React from "react"
import Svg, { Path } from "react-native-svg";
    
const BrokenVolumeKnob = ({
    size = 24,
    color = "#1f2937",
    stroke = 2,
    ...props
    }) => <Svg height={size} width={size} fill="none" viewBox="0 0 24 24" strokeWidth={stroke} xmlns="http://www.w3.org/2000/svg" {...props}>
	<Path d="M17 12C17 9.23858 14.7614 7 12 7C9.23858 7 7 9.23858 7 12C7 14.7614 9.23858 17 12 17" stroke="black" strokeLinecap="round" strokeWidth="1.5"/>
	<Path d="M12 7V11" stroke="black" strokeLinecap="round" strokeWidth="1.5"/>
	<Path d="M13 3.5C13 4.05228 12.5523 4.5 12 4.5C11.4477 4.5 11 4.05228 11 3.5C11 2.94772 11.4477 2.5 12 2.5C12.5523 2.5 13 2.94772 13 3.5Z" fill={color}/>
	<Path d="M20.5 13C19.9477 13 19.5 12.5523 19.5 12C19.5 11.4477 19.9477 11 20.5 11C21.0523 11 21.5 11.4477 21.5 12C21.5 12.5523 21.0523 13 20.5 13Z" fill={color}/>
	<Path d="M3.5 13C2.94772 13 2.5 12.5523 2.5 12C2.5 11.4477 2.94772 11 3.5 11C4.05228 11 4.5 11.4477 4.5 12C4.5 12.5523 4.05228 13 3.5 13Z" fill={color}/>
	<Path d="M6.69661 5.28252C7.08713 5.67304 7.08713 6.30621 6.69661 6.69673C6.30608 7.08726 5.67292 7.08726 5.2824 6.69673C4.89187 6.30621 4.89187 5.67304 5.2824 5.28252C5.67292 4.89199 6.30608 4.89199 6.69661 5.28252Z" fill={color}/>
	<Path d="M18.7176 17.3034C19.1081 17.6939 19.1081 18.3271 18.7176 18.7176C18.3271 19.1081 17.6939 19.1081 17.3034 18.7176C16.9129 18.3271 16.9129 17.6939 17.3034 17.3034C17.6939 16.9129 18.3271 16.9129 18.7176 17.3034Z" fill={color}/>
	<Path d="M18.7176 6.69673C18.3271 7.08726 17.6939 7.08726 17.3034 6.69673C16.9129 6.30621 16.9129 5.67304 17.3034 5.28252C17.6939 4.89199 18.3271 4.89199 18.7176 5.28252C19.1081 5.67304 19.1081 6.30621 18.7176 6.69673Z" fill={color}/>
	<Path d="M6.69661 18.7175C6.30608 19.108 5.67292 19.108 5.2824 18.7175C4.89187 18.327 4.89187 17.6938 5.2824 17.3033C5.67292 16.9127 6.30608 16.9127 6.69661 17.3033C7.08713 17.6938 7.08713 18.327 6.69661 18.7175Z" fill={color}/>
</Svg>;

export default BrokenVolumeKnob;
