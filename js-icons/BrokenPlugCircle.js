import * as React from "react"
import Svg, { Path } from "react-native-svg";
    
const BrokenPlugCircle = ({
    size = 24,
    color = "#1f2937",
    stroke = 2,
    ...props
    }) => <Svg height={size} width={size} fill="none" viewBox="0 0 24 24" strokeWidth={stroke} xmlns="http://www.w3.org/2000/svg" {...props}>
	<Path d="M12 15.1082V20.1498C12 21.2635 11.0955 22.1875 10.0128 21.9673C5.44193 21.0381 2 16.9659 2 12.0832C2 10.2294 2.49614 8.49247 3.36182 7M16.3641 21.1581C19.7003 19.5239 22 16.0743 22 12.0832C22 6.51441 17.5228 2 12 2C10.1786 2 8.47087 2.49102 7 3.34895" stroke="black" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5"/>
	<Path d="M9 11.8C9 11.3582 9.35817 11 9.8 11H14.2C14.6418 11 15 11.3582 15 11.8V12C15 13.6569 13.6569 15 12 15C10.3431 15 9 13.6569 9 12V11.8Z" stroke="black" strokeWidth="1.5"/>
	<Path d="M13.5 11V9" stroke="black" strokeLinecap="round" strokeWidth="1.5"/>
	<Path d="M10.5 11V9" stroke="black" strokeLinecap="round" strokeWidth="1.5"/>
</Svg>;

export default BrokenPlugCircle;