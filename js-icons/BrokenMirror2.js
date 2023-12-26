import * as React from "react"
import Svg, { Path } from "react-native-svg";
    
const BrokenMirror2 = ({
    size = 24,
    color = "#1f2937",
    stroke = 2,
    ...props
    }) => <Svg height={size} width={size} fill="none" viewBox="0 0 24 24" strokeWidth={stroke} xmlns="http://www.w3.org/2000/svg" {...props}>
	<Path d="M5 9.5V19C5 19.6491 4.78947 20.2807 4.4 20.8L3.5 22M19 9.5V19C19 19.6491 19.2105 20.2807 19.6 20.8L20.5 22" stroke="black" strokeLinecap="round" strokeWidth="1.5"/>
	<Path d="M6.34141 7C6.12031 7.78195 6 8.62341 6 9.5C6 13.6421 8.68629 17 12 17C15.3137 17 18 13.6421 18 9.5C18 5.35786 15.3137 2 12 2C10.9091 2 9.88613 2.36394 9.00466 3" stroke="black" strokeLinecap="round" strokeWidth="1.5"/>
	<Path d="M5 20H12M19 20H16" stroke="black" strokeLinecap="round" strokeWidth="1.5"/>
	<Path d="M13 5.2561C13.9608 5.76552 14.697 6.98832 14.9257 8.50024" stroke="black" strokeLinecap="round" strokeWidth="1.5"/>
</Svg>;

export default BrokenMirror2;