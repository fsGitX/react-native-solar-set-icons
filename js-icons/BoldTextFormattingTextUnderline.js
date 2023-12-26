import * as React from "react"
import Svg, { Path } from "react-native-svg";
    
const BoldTextFormattingTextUnderline = ({
    size = 24,
    color = "#1f2937",
    stroke = 2,
    ...props
    }) => <Svg height={size} width={size} fill="none" viewBox="0 0 24 24" strokeWidth={stroke} xmlns="http://www.w3.org/2000/svg" {...props}>
	<Path d="M5 3C5 2.44772 4.55228 2 4 2C3.44772 2 3 2.44772 3 3V9C3 13.9706 7.02944 18 12 18C16.9706 18 21 13.9706 21 9V3C21 2.44772 20.5523 2 20 2C19.4477 2 19 2.44772 19 3V9C19 12.866 15.866 16 12 16C8.13401 16 5 12.866 5 9V3Z" fill={color}/>
	<Path d="M4 20C3.44772 20 3 20.4477 3 21C3 21.5523 3.44772 22 4 22H20C20.5523 22 21 21.5523 21 21C21 20.4477 20.5523 20 20 20H4Z" fill={color}/>
</Svg>;

export default BoldTextFormattingTextUnderline;
