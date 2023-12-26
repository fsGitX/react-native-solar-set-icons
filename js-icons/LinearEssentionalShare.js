import * as React from "react"
import Svg, { Path } from "react-native-svg";
    
const LinearEssentionalShare = ({
    size = 24,
    color = "#1f2937",
    stroke = 2,
    ...props
    }) => <Svg height={size} width={size} fill="none" viewBox="0 0 24 24" strokeWidth={stroke} xmlns="http://www.w3.org/2000/svg" {...props}>
	<Path d="M9 12C9 13.3807 7.88071 14.5 6.5 14.5C5.11929 14.5 4 13.3807 4 12C4 10.6193 5.11929 9.5 6.5 9.5C7.88071 9.5 9 10.6193 9 12Z" stroke="black" strokeWidth="1.5"/>
	<Path d="M14 6.5L9 10" stroke="black" strokeLinecap="round" strokeWidth="1.5"/>
	<Path d="M14 17.5L9 14" stroke="black" strokeLinecap="round" strokeWidth="1.5"/>
	<Path d="M19 18.5C19 19.8807 17.8807 21 16.5 21C15.1193 21 14 19.8807 14 18.5C14 17.1193 15.1193 16 16.5 16C17.8807 16 19 17.1193 19 18.5Z" stroke="black" strokeWidth="1.5"/>
	<Path d="M19 5.5C19 6.88071 17.8807 8 16.5 8C15.1193 8 14 6.88071 14 5.5C14 4.11929 15.1193 3 16.5 3C17.8807 3 19 4.11929 19 5.5Z" stroke="black" strokeWidth="1.5"/>
</Svg>;

export default LinearEssentionalShare;
