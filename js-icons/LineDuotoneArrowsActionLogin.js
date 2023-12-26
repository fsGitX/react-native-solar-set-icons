import * as React from "react"
import Svg, { Path } from "react-native-svg";
    
const LineDuotoneArrowsActionLogin = ({
    size = 24,
    color = "#1f2937",
    stroke = 2,
    ...props
    }) => <Svg height={size} width={size} fill="none" viewBox="0 0 24 24" strokeWidth={stroke} xmlns="http://www.w3.org/2000/svg" {...props}>
	<Path d="M12 20C16.4183 20 20 16.4183 20 12C20 7.58172 16.4183 4 12 4" opacity="0.5" stroke="black" strokeLinecap="round" strokeWidth="1.5"/>
	<Path d="M4 12H14M14 12L11 9M14 12L11 15" stroke="black" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5"/>
</Svg>;

export default LineDuotoneArrowsActionLogin;
