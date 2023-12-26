import * as React from "react"
import Svg, { Path } from "react-native-svg";
    
const LineDuotoneCashOut = ({
    size = 24,
    color = "#1f2937",
    stroke = 2,
    ...props
    }) => <Svg height={size} width={size} fill="none" viewBox="0 0 24 24" strokeWidth={stroke} xmlns="http://www.w3.org/2000/svg" {...props}>
	<Path d="M18.6667 12C20.5513 11.7213 22 10.0457 22 8.02036C22 5.79998 20.2589 4 18.1111 4H5.88889C3.74112 4 2 5.79998 2 8.02036C2 10.0457 3.44873 11.7213 5.33333 12" opacity="0.5" stroke="black" strokeWidth="1.5"/>
	<Path d="M12 7V14M12 14L14 11.6667M12 14L10 11.6667" stroke="black" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5"/>
	<Path d="M5 11C5 9.11438 5 8.17157 5.58579 7.58579C6.17157 7 7.11438 7 9 7H15C16.8856 7 17.8284 7 18.4142 7.58579C19 8.17157 19 9.11438 19 11V17C19 18.8856 19 19.8284 18.4142 20.4142C17.8284 21 16.8856 21 15 21H9C7.11438 21 6.17157 21 5.58579 20.4142C5 19.8284 5 18.8856 5 17V11Z" stroke="black" strokeWidth="1.5"/>
	<Path d="M5 18H19" opacity="0.5" stroke="black" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5"/>
</Svg>;

export default LineDuotoneCashOut;
