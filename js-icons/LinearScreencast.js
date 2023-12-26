import * as React from "react"
import Svg, { Path } from "react-native-svg";
    
const LinearScreencast = ({
    size = 24,
    color = "#1f2937",
    stroke = 2,
    ...props
    }) => <Svg height={size} width={size} fill="none" viewBox="0 0 24 24" strokeWidth={stroke} xmlns="http://www.w3.org/2000/svg" {...props}>
	<Path d="M14 20C17.7712 20 19.6569 20 20.8284 18.8284C22 17.6569 22 15.7712 22 12C22 8.22876 22 6.34315 20.8284 5.17157C19.6569 4 17.7712 4 14 4H6.5C6.03566 4 5.80349 4 5.60793 4.01926C3.70882 4.20631 2.20631 5.70882 2.01926 7.60793C2 7.80349 2 8.03566 2 8.5" stroke="black" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5"/>
	<Path d="M11 20C11 15.0294 6.97056 11 2 11" stroke="black" strokeLinecap="round" strokeWidth="1.5"/>
	<Path d="M8 20C8 16.6863 5.31371 14 2 14" stroke="black" strokeLinecap="round" strokeWidth="1.5"/>
	<Path d="M5 20C5 18.3431 3.65685 17 2 17" stroke="black" strokeLinecap="round" strokeWidth="1.5"/>
</Svg>;

export default LinearScreencast;
