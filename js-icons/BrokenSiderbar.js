import * as React from "react"
import Svg, { Path } from "react-native-svg";
    
const BrokenSiderbar = ({
    size = 24,
    color = "#1f2937",
    stroke = 2,
    ...props
    }) => <Svg height={size} width={size} fill="none" viewBox="0 0 24 24" strokeWidth={stroke} xmlns="http://www.w3.org/2000/svg" {...props}>
	<Path d="M5.5 10H11.5" stroke="black" strokeLinecap="round" strokeWidth="1.5"/>
	<Path d="M6.5 14H10.5" stroke="black" strokeLinecap="round" strokeWidth="1.5"/>
	<Path d="M15 3L15 13M15 17L15 21" stroke="black" strokeLinecap="round" strokeWidth="1.5"/>
	<Path d="M2 11V13C2 16.7712 2 18.6569 3.17157 19.8284C4.34315 21 6.22876 21 10 21H14C17.7712 21 19.6569 21 20.8284 19.8284C22 18.6569 22 16.7712 22 13V11C22 7.22876 22 5.34315 20.8284 4.17157C19.6569 3 17.7712 3 14 3H10C6.22876 3 4.34315 3 3.17157 4.17157C2.51839 4.82475 2.22937 5.69989 2.10149 7" stroke="black" strokeLinecap="round" strokeWidth="1.5"/>
</Svg>;

export default BrokenSiderbar;
