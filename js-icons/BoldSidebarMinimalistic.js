import * as React from "react"
import Svg, { Path } from "react-native-svg";
    
const BoldSidebarMinimalistic = ({
    size = 24,
    color = "#1f2937",
    stroke = 2,
    ...props
    }) => <Svg height={size} width={size} fill="none" viewBox="0 0 24 24" strokeWidth={stroke} xmlns="http://www.w3.org/2000/svg" {...props}>
	<Path d="M3.17157 4.17157C2 5.34315 2 7.22876 2 11V13C2 16.7712 2 18.6569 3.17157 19.8284C4.34315 21 6.22876 21 10 21H14C14.0843 21 14.1676 21 14.25 21L14.25 3C14.1676 2.99999 14.0843 3 14 3H10C6.22876 3 4.34315 3 3.17157 4.17157ZM15.75 3.00559L15.75 20.9944C18.3859 20.9668 19.8541 20.8028 20.8284 19.8284C22 18.6569 22 16.7712 22 13V11C22 7.22876 22 5.34315 20.8284 4.17157C19.8541 3.19724 18.3859 3.03321 15.75 3.00559Z" fill={color} fillRule="evenodd"/>
</Svg>;

export default BoldSidebarMinimalistic;
