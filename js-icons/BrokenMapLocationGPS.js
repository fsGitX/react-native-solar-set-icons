import * as React from "react"
import Svg, { Path } from "react-native-svg";
    
const BrokenMapLocationGPS = ({
    size = 24,
    color = "#1f2937",
    stroke = 2,
    ...props
    }) => <Svg height={size} width={size} fill="none" viewBox="0 0 24 24" strokeWidth={stroke} xmlns="http://www.w3.org/2000/svg" {...props}>
	<Path d="M12.5 14.9585C12.3374 14.9858 12.1704 15 12 15C10.3431 15 9 13.6569 9 12C9 10.3431 10.3431 9 12 9C13.6569 9 15 10.3431 15 12C15 12.1704 14.9858 12.3374 14.9585 12.5" stroke="black" strokeLinecap="round" strokeWidth="1.5"/>
	<Path d="M2 12L4 12" stroke="black" strokeLinecap="round" strokeWidth="1.5"/>
	<Path d="M20 12L22 12" stroke="black" strokeLinecap="round" strokeWidth="1.5"/>
	<Path d="M12 4V2" stroke="black" strokeLinecap="round" strokeWidth="1.5"/>
	<Path d="M12 22V20" stroke="black" strokeLinecap="round" strokeWidth="1.5"/>
	<Path d="M8 5.07026C9.17669 4.38958 10.5429 4 12 4C16.4183 4 20 7.58172 20 12C20 16.4183 16.4183 20 12 20C7.58172 20 4 16.4183 4 12C4 10.5429 4.38958 9.17669 5.07026 8" stroke="black" strokeLinecap="round" strokeWidth="1.5"/>
</Svg>;

export default BrokenMapLocationGPS;
