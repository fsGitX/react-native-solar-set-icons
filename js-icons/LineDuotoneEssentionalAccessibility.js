import * as React from "react"
import Svg, { Path } from "react-native-svg";
    
const LineDuotoneEssentionalAccessibility = ({
    size = 24,
    color = "#1f2937",
    stroke = 2,
    ...props
    }) => <Svg height={size} width={size} fill="none" viewBox="0 0 24 24" strokeWidth={stroke} xmlns="http://www.w3.org/2000/svg" {...props}>
	<circle cx="12" cy="12" opacity="0.5" r="10" stroke="black" strokeWidth="1.5"/>
	<Path d="M14 7C14 8.10457 13.1046 9 12 9C10.8954 9 10 8.10457 10 7C10 5.89543 10.8954 5 12 5C13.1046 5 14 5.89543 14 7Z" stroke="black" strokeWidth="1.5"/>
	<Path d="M18 10C18 10 14.4627 11.5 12 11.5C9.53727 11.5 6 10 6 10" stroke="black" strokeLinecap="round" strokeWidth="1.5"/>
	<Path d="M12 12V13.4522C12 14.0275 12.1654 14.5906 12.4765 15.0745L15 19" stroke="black" strokeLinecap="round" strokeWidth="1.5"/>
	<Path d="M12 12V13.4522C12 14.0275 11.8346 14.5906 11.5235 15.0745L9 19" stroke="black" strokeLinecap="round" strokeWidth="1.5"/>
</Svg>;

export default LineDuotoneEssentionalAccessibility;
