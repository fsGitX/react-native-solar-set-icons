import * as React from "react"
import Svg, { Path } from "react-native-svg";
    
const BrokenHomeBedsideTable4 = ({
    size = 24,
    color = "#1f2937",
    stroke = 2,
    ...props
    }) => <Svg height={size} width={size} fill="none" viewBox="0 0 24 24" strokeWidth={stroke} xmlns="http://www.w3.org/2000/svg" {...props}>
	<Path d="M19 22V20.5M5 22V20.5" stroke="black" strokeLinecap="round" strokeWidth="1.5"/>
	<Path d="M12 20V8" stroke="black" strokeLinecap="round" strokeWidth="1.5"/>
	<Path d="M15 12V15" stroke="black" strokeLinecap="round" strokeWidth="1.5"/>
	<Path d="M9 12V15" stroke="black" strokeLinecap="round" strokeWidth="1.5"/>
	<Path d="M12 2H10C6.22876 2 4.34315 2 3.17157 3.17157C2 4.34315 2 6.22876 2 10V12C2 15.7712 2 17.6569 3.17157 18.8284C4.34315 20 6.22876 20 10 20H14C17.7712 20 19.6569 20 20.8284 18.8284C22 17.6569 22 15.7712 22 12V10C22 6.22876 22 4.34315 20.8284 3.17157C19.8853 2.22849 18.4796 2.04456 16 2.00869" stroke="black" strokeLinecap="round" strokeWidth="1.5"/>
	<Path d="M2 8H5M22 8H9" stroke="black" strokeLinecap="round" strokeWidth="1.5"/>
</Svg>;

export default BrokenHomeBedsideTable4;
