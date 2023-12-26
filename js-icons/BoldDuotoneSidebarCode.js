import * as React from "react"
import Svg, { Path } from "react-native-svg";
    
const BoldDuotoneSidebarCode = ({
    size = 24,
    color = "#1f2937",
    stroke = 2,
    ...props
    }) => <Svg height={size} width={size} fill="none" viewBox="0 0 24 24" strokeWidth={stroke} xmlns="http://www.w3.org/2000/svg" {...props}>
	<Path d="M3.17157 4.1716C2 5.34318 2 7.2288 2 11V13C2 16.7713 2 18.6569 3.17157 19.8285C4.34315 21 6.22876 21 10 21H14C14.0843 21 14.9176 21.0001 15 21.0001L15 3.00006C14.9176 3.00005 14.0843 3.00003 14 3.00003H10C6.22876 3.00003 4.34315 3.00003 3.17157 4.1716Z" fill={color} fillRule="evenodd" opacity="0.5"/>
	<Path d="M22 13V11C22 7.22876 22 5.34315 20.8284 4.17157C19.8541 3.19724 17.6359 3.03321 15 3.00559V20.9944C17.6359 20.9668 19.8541 20.8028 20.8284 19.8284C22 18.6569 22 16.7712 22 13Z" fill={color}/>
	<Path d="M9.26334 13.2977C9.65118 13.4432 9.84769 13.8755 9.70225 14.2633L8.20225 18.2633C8.05681 18.6511 7.6245 18.8476 7.23666 18.7022C6.84882 18.5568 6.65231 18.1245 6.79775 17.7366L8.29775 13.7366C8.44319 13.3488 8.8755 13.1523 9.26334 13.2977Z" fill={color}/>
	<Path d="M6.53033 13.4696C6.82322 13.7625 6.82322 14.2374 6.53033 14.5303L6.06066 15L6.53033 15.4696C6.82322 15.7625 6.82322 16.2374 6.53033 16.5303C6.23744 16.8232 5.76256 16.8232 5.46967 16.5303L4.46967 15.5303C4.17678 15.2374 4.17678 14.7625 4.46967 14.4696L5.46967 13.4696C5.76256 13.1767 6.23744 13.1767 6.53033 13.4696Z" fill={color}/>
	<Path d="M9.96967 15.4696C10.2626 15.1767 10.7374 15.1767 11.0303 15.4696L12.0303 16.4696C12.3232 16.7625 12.3232 17.2374 12.0303 17.5303L11.0303 18.5303C10.7374 18.8232 10.2626 18.8232 9.96967 18.5303C9.67678 18.2374 9.67678 17.7625 9.96967 17.4696L10.4393 17L9.96967 16.5303C9.67678 16.2374 9.67678 15.7625 9.96967 15.4696Z" fill={color}/>
</Svg>;

export default BoldDuotoneSidebarCode;