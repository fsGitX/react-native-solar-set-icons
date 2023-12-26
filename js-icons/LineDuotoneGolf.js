import * as React from "react"
import Svg, { Path } from "react-native-svg";
    
const LineDuotoneGolf = ({
    size = 24,
    color = "#1f2937",
    stroke = 2,
    ...props
    }) => <Svg height={size} width={size} fill="none" viewBox="0 0 24 24" strokeWidth={stroke} xmlns="http://www.w3.org/2000/svg" {...props}>
	<ellipse cx="12" cy="18.5" opacity="0.5" rx="10" ry="3.5" stroke="black" strokeWidth="1.5"/>
	<Path d="M12 18V2" stroke="black" strokeLinecap="round" strokeWidth="1.5"/>
	<Path d="M11.9999 3.5L17.4222 6.21114C18.9834 6.99169 19.7639 7.38196 19.7639 8C19.7639 8.61804 18.9834 9.00831 17.4222 9.78886L11.9999 12.5" stroke="black" strokeLinecap="round" strokeWidth="1.5"/>
</Svg>;

export default LineDuotoneGolf;
