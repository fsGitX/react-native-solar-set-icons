import * as React from "react"
import Svg, { Path } from "react-native-svg";
    
const BrokenElectronicSmartphoneRotateOrientation = ({
    size = 24,
    color = "#1f2937",
    stroke = 2,
    ...props
    }) => <Svg height={size} width={size} fill="none" viewBox="0 0 24 24" strokeWidth={stroke} xmlns="http://www.w3.org/2000/svg" {...props}>
	<Path d="M2 14V16C2 18.8284 2 20.2426 2.87868 21.1213C3.75736 22 5.17157 22 8 22H9C11.8284 22 13.2426 22 14.1213 21.1213C15 20.2426 15 18.8284 15 16V8C15 5.17157 15 3.75736 14.1213 2.87868C13.2426 2 11.8284 2 9 2H8C5.17157 2 3.75736 2 2.87868 2.87868C2 3.75736 2 5.17157 2 8V10" stroke="black" strokeLinecap="round" strokeWidth="1.5"/>
	<Path d="M17.5 10.0063C19.3597 10.0333 20.414 10.1712 21.1213 10.8785C22 11.7572 22 13.1714 22 15.9998C22 18.8283 22 20.2425 21.1213 21.1212C20.414 21.8285 19.3597 21.9664 17.5 21.9933" stroke="black" strokeLinecap="round" strokeWidth="1.5"/>
	<Path d="M11 5H6" stroke="black" strokeLinecap="round" strokeWidth="1.5"/>
	<Path d="M19 18V14" stroke="black" strokeLinecap="round" strokeWidth="1.5"/>
	<Path d="M10 17.5C10 18.3284 9.32843 19 8.5 19C7.67157 19 7 18.3284 7 17.5C7 16.6716 7.67157 16 8.5 16C9.32843 16 10 16.6716 10 17.5Z" stroke="black" strokeWidth="1.5"/>
	<Path d="M20.5 6.98598L22 8C22 4.98532 19.8377 2.48275 17 2" stroke="black" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5"/>
</Svg>;

export default BrokenElectronicSmartphoneRotateOrientation;
