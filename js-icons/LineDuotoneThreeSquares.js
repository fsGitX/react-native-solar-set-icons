import * as React from "react"
import Svg, { Path } from "react-native-svg";
    
const LineDuotoneThreeSquares = ({
    size = 24,
    color = "#1f2937",
    stroke = 2,
    ...props
    }) => <Svg height={size} width={size} fill="none" viewBox="0 0 24 24" strokeWidth={stroke} xmlns="http://www.w3.org/2000/svg" {...props}>
	<Path d="M7 12H6C4.11438 12 3.17157 12 2.58579 12.5858C2 13.1716 2 14.1144 2 16V18C2 19.8856 2 20.8284 2.58579 21.4142C3.17157 22 4.11438 22 6 22H8C9.88562 22 10.8284 22 11.4142 21.4142C12 20.8284 12 19.8856 12 18V17" opacity="0.5" stroke="black" strokeWidth="1.5"/>
	<Path d="M12 7H11C9.11438 7 8.17157 7 7.58579 7.58579C7 8.17157 7 9.11438 7 11V13C7 14.8856 7 15.8284 7.58579 16.4142C8.17157 17 9.11438 17 11 17H13C14.8856 17 15.8284 17 16.4142 16.4142C17 15.8284 17 14.8856 17 13V12" stroke="black" strokeWidth="1.5"/>
	<Path d="M12 6C12 4.11438 12 3.17157 12.5858 2.58579C13.1716 2 14.1144 2 16 2H18C19.8856 2 20.8284 2 21.4142 2.58579C22 3.17157 22 4.11438 22 6V8C22 9.88562 22 10.8284 21.4142 11.4142C20.8284 12 19.8856 12 18 12H16C14.1144 12 13.1716 12 12.5858 11.4142C12 10.8284 12 9.88562 12 8V6Z" stroke="black" strokeWidth="1.5"/>
</Svg>;

export default LineDuotoneThreeSquares;
