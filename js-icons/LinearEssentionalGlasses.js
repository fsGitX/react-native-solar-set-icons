import * as React from "react"
import Svg, { Path } from "react-native-svg";
    
const LinearEssentionalGlasses = ({
    size = 24,
    color = "#1f2937",
    stroke = 2,
    ...props
    }) => <Svg height={size} width={size} fill="none" viewBox="0 0 24 24" strokeWidth={stroke} xmlns="http://www.w3.org/2000/svg" {...props}>
	<circle cx="18" cy="16" r="4" stroke="black" strokeWidth="1.5"/>
	<circle cx="6" cy="16" r="4" stroke="black" strokeWidth="1.5"/>
	<Path d="M14 16.2135L13.3441 15.9795C12.4749 15.6694 11.5252 15.6694 10.6559 15.9795L10 16.2135" stroke="black" strokeLinecap="round" strokeWidth="1.5"/>
	<Path d="M2 16L2.76315 7.60532C2.87807 6.34121 2.93553 5.70916 3.30554 5.24199C3.67554 4.77482 4.27763 4.57412 5.48181 4.17273L6 4" stroke="black" strokeLinecap="round" strokeWidth="1.5"/>
	<Path d="M22 16L21.2368 7.60532C21.1219 6.34121 21.0645 5.70916 20.6945 5.24199C20.3245 4.77482 19.7224 4.57412 18.5182 4.17273L18 4" stroke="black" strokeLinecap="round" strokeWidth="1.5"/>
</Svg>;

export default LinearEssentionalGlasses;
